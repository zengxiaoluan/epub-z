<template>
    <div class="container">
        <template v-for="(value, index) in allBooks">
            <div :key="value + '-outer'">
                <div :key="value" :id="'viewer-' + index"></div>

                <button @click="readThisBook(value)">Read</button>
            </div>
        </template>

        <div class="add">
            <input @change="change" type="file" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    // column-gap: 5px;
    // row-gap: 5px;

   & > div {
        border: 1px dashed gray;
    }

    .add {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 600px;
    }
}
</style>

<script>
import Epub from "epubjs";
import localForage from "localforage";

export default {
    data() {
        return {
            allBooks: []
        };
    },
    async mounted() {
        let allBooks = await localForage.keys();
        this.allBooks = allBooks;
        console.log(allBooks);

        for (let i = 0; i < allBooks.length; i++) {
            this.renderBook(i, allBooks[i]);
        }
    },
    methods: {
        readThisBook(bookName) {
            this.$router.push({ path: "ebook", query: { bookName } });
        },
        async renderBook(key, value) {
            let book = new Epub();

            let arrayBuffer = await localForage.getItem(value);

            book.open(arrayBuffer);

            let rendition = book.renderTo("viewer-" + key, {
                width: "100%",
                height: 600
            });

            rendition.display();
        },
        change(e) {
            var file = e.target.files[0];
            console.log(file);

            let key = file.name;

            var reader = new FileReader();
            reader.onload = openBook;
            reader.readAsArrayBuffer(file);

            let book = new Epub();

            async function openBook(e) {
                var bookData = e.target.result;

                await localForage.setItem(key, bookData);

                let fromdb = await localForage.getItem(key);

                location.reload();

                book.open(fromdb);

                let rendition = book.renderTo("viewer", {
                    width: "100%",
                    height: 600
                });

                rendition.display();
            }
        }
    }
};
</script>

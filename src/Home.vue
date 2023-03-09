<template>
    <div>
        <input @change="change" type="file" />
        <div id="viewer"></div>
    </div>
</template>

<script>
import Epub from 'epubjs'
// import localdb from '../packages/z-db'
import localdb from 'easy-indexed'




export default {
    methods: {
        change(e) {

            var file = e.target.files[0];
            var reader = new FileReader();
            reader.onload = openBook;
            reader.readAsArrayBuffer(file);

            let book = new Epub()



            async function openBook(e) {
                var bookData = e.target.result;

                await localdb.initialize()

                let key = 'epub-z-book-0'

                await localdb.set(key, bookData)








                let fromdb = await localdb.get(key)


                book.open(fromdb);

                let rendition = book.renderTo("viewer", {
                    width: "100%",
                    height: 600
                });


                rendition.display()




            }
        }
    }
}
</script>


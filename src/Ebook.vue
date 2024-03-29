<template>
  <div class="ebook">
    <title-bar :ifTitleAndMenuShow="ifTitleAndMenuShow"></title-bar>
    <div class="read-wrapper">
      <div class="mask">
        <div v-if="!isMobile" class="left" @click="prevPage">
          Click for pre page.
        </div>
        <div id="center" class="center" @click="toggleTitleAndMenu"></div>
        <div v-if="!isMobile" class="right" @click="nextPage">
          Click for next page.
        </div>
      </div>

      <div id="read"></div>
    </div>
    <menu-bar
      :ifTitleAndMenuShow="ifTitleAndMenuShow"
      :fontSizeList="fontSizeList"
      :defaultFontSize="defaultFontSize"
      @setFontSize="setFontSize"
      :themeList="themeList"
      :defaultTheme="defaultTheme"
      @setTheme="setTheme"
      :bookAvailable="bookAvailable"
      @onProgressChange="onProgressChange"
      :navigation="navigation"
      @jumpTo="jumpTo"
      ref="menuBar"
    ></menu-bar>
  </div>
</template>

<script>
import localForage from "localforage";
import Epub from "epubjs";
import Hammer from "hammerjs";

import TitleBar from "@/components/TitleBar";
import MenuBar from "@/components/MenuBar";

import { getFontSize, setFontSize, isMobile } from "./utils/font-size";

export default {
  components: {
    TitleBar,
    MenuBar
  },
  data() {
    return {
      isMobile: isMobile(),
      currentBookName: "",
      ifTitleAndMenuShow: false,
      fontSizeList: [
        { fontSize: 12 },
        { fontSize: 14 },
        { fontSize: 16 },
        { fontSize: 18 },
        { fontSize: 20 },
        { fontSize: 22 },
        { fontSize: 24 }
      ],
      defaultFontSize: getFontSize(),
      themeList: [
        {
          name: "default",
          style: {
            body: {
              color: "#000",
              background: "#fff"
            }
          }
        },
        {
          name: "eye",
          style: {
            body: {
              color: "#000",
              background: "#ceeaba"
            }
          }
        },
        {
          name: "night",
          style: {
            body: {
              color: "#fff",
              background: "#000"
            }
          }
        },
        {
          name: "gold",
          style: {
            body: {
              color: "#000",
              background: "rgb(241,236,226)"
            }
          }
        }
      ],
      defaultTheme: 0,
      bookAvailable: false,
      navigation: null
    };
  },
  methods: {
    //电子书的解析和渲染
    async showEpub() {
      //解析电子书,生成Book对象
      this.book = new Epub();

      let bookName = this.$route.query.bookName || void 0;
      this.currentBookName = bookName;

      let arrayBuffer = await localForage.getItem(bookName);

      if (!arrayBuffer) {
        alert("Book not exists.");
        this.$router.push({ name: "home" });
      }

      let readBox = document.getElementById("center");

      this.book.open(arrayBuffer);

      //通过Book.renderTo生成Rendition对象(对象名不唯一)
      this.rendition = this.book.renderTo("read", {
        //第一个参数是div的id
        width: readBox.offsetWidth,
        height: readBox.offsetHeight,
        allowScriptedContent: true
      });

      this.rendition.on("rendered", (e, i) => {
        let doc = i.document.documentElement;
        doc.addEventListener("click", (e, contents, ...args) => {
          console.log(e, contents, args);
          if (e.target.tagName === "A") return;
          this.toggleTitleAndMenu();
        });

        if (!this.isMobile) return;

        // Create a manager to manager the element
        var manager = new Hammer.Manager(doc);

        // Create a recognizer
        var Swipe = new Hammer.Swipe();

        // Add the recognizer to the manager
        manager.add(Swipe);

        // Declare global variables to swiped correct distance

        // Subscribe to a desired event
        manager.on("swipe", e => {
          var direction = e.offsetDirection;

          console.log(direction);

          if (direction === 2) {
            this.nextPage();
          }

          if (direction === 4) {
            this.prevPage();
          }
        });
      });

      let cfi = this.$route.query.cfi || void 0;
      this.rendition.display(cfi);

      //获取Theme对象
      this.themes = this.rendition.themes;
      //设置默认字体
      this.setFontSize(this.defaultFontSize);
      /*thems的俩个方法:
				主题注册:this.themes.register(name,styles)
				主题切换:this.themes.select(name)
			*/
      this.registerTheme();
      this.setTheme(this.defaultTheme);
      //获取Locations对象
      //通过epubjs钩子函数来实现电子书定位
      this.book.ready
        .then(() => {
          //生成目录
          this.navigation = this.book.navigation;

          return this.book.locations.generate();
        })
        .then(result => {
          this.locations = this.book.locations;
          // this.onProgressChange(50); //实现跳转到百分之50的位置
          this.bookAvailable = true;
        });
    },

    async prevPage() {
      await this.rendition.prev();
      this.updateCfi();
    },

    async nextPage() {
      await this.rendition.next();
      this.updateCfi();
    },
    //标题栏和菜单栏
    toggleTitleAndMenu() {
      //切换
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow;
      if (!this.ifTitleAndMenuShow) {
        //ref 加在子组件上,获取到的是组件实例,可以使用组件的所有方法,this.$refs.(ref值).组件方法,。
        this.$refs.menuBar.hideSetting();
      }
    },
    //设置字体大小切换
    setFontSize(fontSize) {
      this.defaultFontSize = fontSize;
      if (this.themes) {
        this.themes.fontSize(fontSize + "px");
      }

      setFontSize(fontSize);
    },
    registerTheme() {
      this.themeList.forEach(theme => {
        //注册全部主题颜色样式
        this.themes.register(theme.name, theme.style);
      });
    },
    setTheme(index) {
      //切换主题
      this.themes.select(this.themeList[index].name);
      this.defaultTheme = index;
    },
    //propress进度条的数值(0-100)
    onProgressChange(progress) {
      const percentage = progress / 100;
      const location =
        percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0;
      this.rendition.display(location);
    },
    hideTitleAndMenu() {
      //隐藏标题栏和菜单栏
      this.ifTitleAndMenuShow = false;
      //隐藏菜单栏弹出的设置栏
      this.$refs.menuBar.hideSetting();
      //隐藏目录
      this.$refs.menuBar.hideContent();
    },
    //根据链接跳转到指定位置(目录)
    async jumpTo(href) {
      await this.rendition.display(href);

      this.updateCfi();

      this.hideTitleAndMenu();
    },

    updateCfi() {
      let location = this.rendition.currentLocation();
      let cfiString = location.start.cfi;

      this.$router.replace({
        query: { cfi: cfiString, bookName: this.currentBookName }
      });
    }
  },

  mounted() {
    // 等待父组件 mounted
    setTimeout(() => {
      this.showEpub();
    }, 0);

    var keyListener = e => {
      // Left Key
      if ((e.keyCode || e.which) == 37) {
        this.prevPage();
      }

      // Right Key
      if ((e.keyCode || e.which) == 39) {
        this.nextPage();
      }
    };

    document.addEventListener("keyup", keyListener, false);
  }
};
</script>

<style>
.ebook .epub-container {
  margin: 0 auto;

  border: 1px dashed greenyellow;
  border-top: none;
  border-bottom: none;
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
.left,
.right {
  text-align: center;
  display: flex;
  align-items: center;
  color: aliceblue;
  cursor: pointer;
}

$fontSize: 37.5;

@function px2rem($px) {
  @return ($px / $fontSize) + rem;
}

@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ebook {
  position: relative;

  .read-wrapper {
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      height: 100%;

      .left {
        flex: 0 0 px2rem(100);
      }

      .center {
        flex: 1;
      }

      .right {
        flex: 0 0 px2rem(100);
      }
    }
  }
}
</style>

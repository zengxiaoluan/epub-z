webpackJsonp([1],{"4/se":function(t,e,n){"use strict";var i={props:{navigation:Object,ifShowContent:Boolean,bookAvailable:Boolean},methods:{jumpTo:function(t){this.$emit("jumpTo",t)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-right"}},[n("div",{staticClass:"content"},[t.bookAvailable?n("div",{staticClass:"content-wrapper"},t._l(t.navigation.toc,function(e,i){return n("div",{key:i,staticClass:"content-item",on:{click:function(n){return t.jumpTo(e.href)}}},[n("span",{staticClass:"text"},[t._v(t._s(e.label))])])}),0):n("div",{staticClass:"empty"},[t._v("Loading...")])])])},staticRenderFns:[]};var o={components:{contentView:n("VU/8")(i,s,!1,function(t){n("hEhu")},"data-v-ef299a82",null).exports},props:{ifTitleAndMenuShow:{type:Boolean,default:!1},fontSizeList:Array,defaultFontSize:Number,themeList:Array,defaultTheme:Number,bookAvailable:{type:Boolean,default:!1},navigation:Object},data:function(){return{ifSettingShow:!1,showTag:0,progress:0,ifShowContent:!1}},methods:{showSetting:function(t){this.ifSettingShow=!0,this.showTag=t,3===this.showTag?(this.ifSettingShow=!1,this.ifShowContent=!0):this.ifSettingShow=!0},hideSetting:function(){this.ifSettingShow=!1},setFontSize:function(t){this.$emit("setFontSize",t)},setTheme:function(t){this.$emit("setTheme",t)},onProgressInput:function(t){this.progress=t,this.$refs.progress.style.backgroundSize=this.progress+"% 100%"},onProgressChange:function(t){this.$emit("onProgressChange",t)},jumpTo:function(t){this.$emit("jumpTo",t)},hideContent:function(){this.ifShowContent=!1}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-bar"},[n("transition",{attrs:{name:"slide-up"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ifTitleAndMenuShow,expression:"ifTitleAndMenuShow"}],staticClass:"menu-wrapper",class:{"hide-box-shadow":t.ifSettingShow||!t.ifTitleAndMenuShow}},[n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"iconfont icon icon-menu",on:{click:function(e){return t.showSetting(3)}}},[t._v("")])]),t._v(" "),n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"iconfont icon icon-progress",on:{click:function(e){return t.showSetting(2)}}},[t._v("")])]),t._v(" "),n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"iconfont icon icon-bright",on:{click:function(e){return t.showSetting(1)}}},[t._v("")])]),t._v(" "),n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"iconfont icon icon-font",on:{click:function(e){return t.showSetting(0)}}},[t._v("")])])])]),t._v(" "),n("transition",{attrs:{name:"slide-up"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ifSettingShow,expression:"ifSettingShow"}],staticClass:"setting-wrapper"},[0===t.showTag?n("div",{staticClass:"setting-font-size"},[n("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[0].fontSize+"px"}},[t._v("A")]),t._v(" "),n("div",{staticClass:"select"},t._l(t.fontSizeList,function(e,i){return n("div",{key:i,staticClass:"select-wrapper",on:{click:function(n){return t.setFontSize(e.fontSize)}}},[n("div",{staticClass:"line"}),t._v(" "),n("div",{staticClass:"point-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.defaultFontSize===e.fontSize,expression:"defaultFontSize===item.fontSize"}],staticClass:"point"},[n("div",{staticClass:"small-point"})])]),t._v(" "),n("div",{staticClass:"line"})])}),0),t._v(" "),n("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[t.fontSizeList.length-1].fontSize+"px"}},[t._v("A")])]):1===t.showTag?n("div",{staticClass:"setting-theme"},t._l(t.themeList,function(e,i){return n("div",{key:i,staticClass:"setting-theme-item",on:{click:function(e){return t.setTheme(i)}}},[n("div",{staticClass:"preview",class:{"no-border":"#fff"!==e.style.body.background},style:{background:e.style.body.background}}),t._v(" "),n("div",{staticClass:"text",class:{selected:i===t.defaultTheme}},[t._v(t._s(e.name))])])}),0):2===t.showTag?n("div",{staticClass:"setting-progress"},[n("div",{staticClass:"progress-wrapper"},[n("input",{ref:"progress",staticClass:"progress",attrs:{type:"range",max:"100",min:"0",step:"1",disabled:!t.bookAvailable},domProps:{value:t.progress},on:{change:function(e){return t.onProgressChange(e.target.value)},input:function(e){return t.onProgressInput(e.target.value)}}})]),t._v(" "),n("div",{staticClass:"text-wrapper"},[n("span",[t._v(t._s(t.bookAvailable?t.progress+"%":"loading..."))])])]):t._e()])]),t._v(" "),n("content-view",{directives:[{name:"show",rawName:"v-show",value:t.ifShowContent,expression:"ifShowContent"}],attrs:{ifShowContent:t.ifShowContent,navigation:t.navigation,bookAvailable:t.bookAvailable},on:{jumpTo:t.jumpTo}}),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ifShowContent,expression:"ifShowContent"}],staticClass:"content-mask",on:{click:t.hideContent}})])],1)},staticRenderFns:[]};var r=n("VU/8")(o,a,!1,function(t){n("UrFC")},"data-v-af2de0ee",null);e.a=r.exports},"8ttN":function(t,e){},DfrK:function(t,e){},G1q7:function(t,e){},M8sU:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={name:"App",mounted:function(){var t=document.querySelector("html"),e=window.innerWidth/10;e=e>50?50:e,t.style.fontSize=e+"px"}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")(s,o,!1,function(t){n("8ttN")},null,null).exports,r=n("/ocq"),c=n("cTCA"),l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ebook"},[n("title-bar",{attrs:{ifTitleAndMenuShow:t.ifTitleAndMenuShow}}),t._v(" "),n("div",{staticClass:"read-wrapper"},[n("div",{attrs:{id:"read"}}),t._v(" "),n("div",{staticClass:"mask"},[n("div",{staticClass:"left",on:{click:t.prevPage}},[n("input",{attrs:{type:"file"},on:{change:t.change}})]),t._v(" "),n("div",{staticClass:"center",attrs:{id:"center"},on:{click:t.toggleTitleAndMenu}}),t._v(" "),n("div",{staticClass:"right",on:{click:t.nextPage}})])]),t._v(" "),n("menu-bar",{ref:"menuBar",attrs:{ifTitleAndMenuShow:t.ifTitleAndMenuShow,fontSizeList:t.fontSizeList,defaultFontSize:t.defaultFontSize,themeList:t.themeList,defaultTheme:t.defaultTheme,bookAvailable:t.bookAvailable,navigation:t.navigation},on:{setFontSize:t.setFontSize,setTheme:t.setTheme,onProgressChange:t.onProgressChange,jumpTo:t.jumpTo}})],1)},staticRenderFns:[]};var u=function(t){n("DfrK"),n("M8sU")},h=n("VU/8")(c.a,l,!1,u,"data-v-cf3458c6",null).exports,f={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    home\n")])},staticRenderFns:[]},d=n("VU/8")(null,f,!1,null,null,null).exports;i.a.use(r.a);var v=new r.a({routes:[{path:"/",redirect:"/ebook"},{path:"/ebook",component:h},{path:"/home",component:d}]});n("TzC8"),n("G1q7");i.a.config.productionTip=!1,new i.a({el:"#app",router:v,components:{App:a},template:"<App/>"})},TzC8:function(t,e){},UrFC:function(t,e){},cTCA:function(t,e,n){"use strict";(function(t){var i=n("tdlb"),s=n("4/se"),o=n("VXRH");t.ePub=o.a,e.a={components:{TitleBar:i.a,MenuBar:s.a},data:function(){return{ifTitleAndMenuShow:!1,fontSizeList:[{fontSize:12},{fontSize:14},{fontSize:16},{fontSize:18},{fontSize:20},{fontSize:22},{fontSize:24}],defaultFontSize:16,themeList:[{name:"default",style:{body:{color:"#000",background:"#fff"}}},{name:"eye",style:{body:{color:"#000",background:"#ceeaba"}}},{name:"night",style:{body:{color:"#fff",background:"#000"}}},{name:"gold",style:{body:{color:"#000",background:"rgb(241,236,226)"}}}],defaultTheme:0,bookAvailable:!1,navigation:null}},methods:{change:function(t){console.log(t.target.files)},showEpub:function(){var t=this;this.book=new o.a("static/始于极限.epub"),console.log(this.book);var e=document.getElementById("center");this.rendition=this.book.renderTo("read",{width:e.offsetWidth,height:e.offsetHeight,allowScriptedContent:!0}),this.rendition.display(),this.themes=this.rendition.themes,this.setFontSize(this.defaultFontSize),this.registerTheme(),this.setTheme(this.defaultTheme),this.book.ready.then(function(){return t.navigation=t.book.navigation,t.book.locations.generate()}).then(function(e){t.locations=t.book.locations,t.bookAvailable=!0})},prevPage:function(){this.rendition&&this.rendition.prev()},nextPage:function(){this.rendition.next()},toggleTitleAndMenu:function(){this.ifTitleAndMenuShow=!this.ifTitleAndMenuShow,this.ifTitleAndMenuShow||this.$refs.menuBar.hideSetting()},setFontSize:function(t){this.defaultFontSize=t,this.themes&&this.themes.fontSize(t+"px")},registerTheme:function(){var t=this;this.themeList.forEach(function(e){t.themes.register(e.name,e.style)})},setTheme:function(t){this.themes.select(this.themeList[t].name),this.defaultTheme=t},onProgressChange:function(t){var e=t/100,n=e>0?this.locations.cfiFromPercentage(e):0;this.rendition.display(n)},hideTitleAndMenu:function(){this.ifTitleAndMenuShow=!1,this.$refs.menuBar.hideSetting(),this.$refs.menuBar.hideContent()},jumpTo:function(t){console.warn(t),this.rendition.display(t),this.hideTitleAndMenu()}},mounted:function(){var t=this;setTimeout(function(){t.showEpub()},2e3)}}}).call(e,n("DuR2"))},hEhu:function(t,e){},tdlb:function(t,e,n){"use strict";var i={props:{ifTitleAndMenuShow:{type:Boolean,default:!1}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-down"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ifTitleAndMenuShow,expression:"ifTitleAndMenuShow"}],staticClass:"title-wrapper"},[n("div",{staticClass:"left"},[n("span",{staticClass:"iconfont icon"},[t._v("")])]),t._v(" "),n("div",{staticClass:"right"},[n("div",{staticClass:"icon-wrapper icon"},[n("span",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"iconfont icon"},[t._v("")])]),t._v(" "),n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"iconfont icon"},[t._v("")])])])])])},staticRenderFns:[]};var o=n("VU/8")(i,s,!1,function(t){n("xi4d")},"data-v-3a14f74a",null);e.a=o.exports},xi4d:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a935a9a9bc909d864459.js.map
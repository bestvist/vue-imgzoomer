(function(t){function e(e){for(var s,a,n=e[0],l=e[1],h=e[2],g=0,f=[];g<n.length;g++)a=n[g],r[a]&&f.push(r[a][0]),r[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,h||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],s=!0,n=1;n<i.length;n++){var l=i[n];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},r={index:0},o=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/docs/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var h=0;h<n.length;h++)e(n[h]);var c=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("e58e")},"2dc5":function(t,e,i){"use strict";var s=i("cddf"),r=i.n(s);r.a},"31cf":function(t,e,i){var s=i("b041");e=t.exports=i("2350")(!1),e.push([t.i,"\n.magnifier-box[data-v-614562af]{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;position:relative\n}\n.magnifier-box .edit-wrap[data-v-614562af]{position:absolute;top:5px;right:0;z-index:9999999;background:rgba(0,0,0,.4);padding:5px 15px 0 15px;border-radius:15px\n}\n.magnifier-box .edit-wrap .rotate-left[data-v-614562af]{-webkit-transform:scaleX(-1);transform:scaleX(-1);-webkit-filter:FlipH;filter:FlipH\n}\n.magnifier-box .edit-wrap .rotate-left[data-v-614562af],.magnifier-box .edit-wrap .rotate-right[data-v-614562af]{display:inline-block;cursor:pointer;width:16px;height:16px;background:url("+s(i("d34a"))+");background-size:100% 100%\n}\n.magnifier-box .edit-wrap .rotate-right[data-v-614562af]{margin-left:10px\n}\n.magnifier-box img[data-v-614562af]{width:100%\n}\n.magnifier-box .mouse-cover[data-v-614562af]{position:fixed;background-color:rgba(0,0,0,.5);cursor:move\n}\n.magnifier-box .mouse-cover-canvas[data-v-614562af]{position:fixed;left:100%;top:0;width:100%;height:100%\n}\n.magnifier-box.vertical img[data-v-614562af]{height:100%;width:auto\n}",""])},"63b3":function(t,e,i){var s=i("f988");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var r=i("499e").default;r("2720b75b",s,!0,{sourceMap:!1,shadowMode:!1})},"8d65":function(t,e,i){"use strict";var s=i("63b3"),r=i.n(s);r.a},cddf:function(t,e,i){var s=i("31cf");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var r=i("499e").default;r("24ae23be",s,!0,{sourceMap:!1,shadowMode:!1})},d34a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACNUlEQVRYR8VXi01bQRCcqSChAkIFQAWBCoAKgApIKgAqACoAKgAqgFSQUAHQQVLBoJHuOcf57rzP0sMrWbL99nZnvzePWLFwxf4xCoCkfQDfAWwB+JY+juEJwF8A9wB+kXyNBhYCIOkMwAmAr0HDNwDOSyDJjgM4Hp51AUhypHdZpEH/M7Uzkuf+JcmgDtOTnyQv/b0JQNIRgOuxHiv6Lo9LYnuDODvOah1AwPlbMvonZcelcWqj0gaQ0v67YekWwCVJO/4gkgzCTerI1hcg6QJwukoD/wDs1Bw3gLjeex0QdQCSfgC4KA6GnQ/nioar4WgC8Cx/KU5sRyIf4dyq8wDSkvHI5XJLMu/ebmnTnJ8GOrEKwHPpZZPL2Og9cpFp8CJyn/wfQ0nl4TeSXrdhkWT9RRl7HZyXAMru907fCXtfUnG2CSWpsHFF0lMxqfQAPJD0YplUcgBlD3x6CXyXl9trjaR3w2SSZ6B2+83GZSoEOQCP0EvhyNFvTJmFD3xAUq0M9yQPxmYgXelebM7i3O052CsB1LJg3RuSx1EQkrw/HpO+s7jbAjHHiCTVVrJtOQpTKU9LVRIn8F1Q7g+D8FqfI6tVStYoxeDUQLzH87QOZMR7o0Zcm1d6C4CNONLNaNo7el0+sYgV50x2GSzmjvvhJqx5SDzBfbGI55XHTcfNH7uLLPRiYstprFzjHtd7Tv3h0Q29HYUB5OGlMfNffnGxI0fpez7kNLe1FIBlmqF1ZuUA3gG+J+MhoQiAnAAAAABJRU5ErkJggg=="},e58e:function(t,e,i){"use strict";i.r(e);var s=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"page-header"},[i("h1",[t._v("vue imgzoomer")]),i("div",{staticStyle:{width:"400px"}},[i("v-imgzoomer",{attrs:{url:t.imgUrl}})],1)])])},o=[],a={data(){return{imgUrl:"http://imgsrc.baidu.com/imgad/pic/item/3801213fb80e7beca9004ec5252eb9389b506b38.jpg"}},methods:{}},n=a,l=(i("8d65"),i("2877")),h=Object(l["a"])(n,r,o,!1,null,"859672f4",null);h.options.__file="App.vue";var c=h.exports,g=i("1487"),f=i.n(g),m=(i("2c43"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:t.id,staticClass:"magnifier-box",class:t.vertical?"vertical":"",on:{mousemove:t.mousemove,mouseover:t.mouseover,mouseleave:t.mouseleave}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.showImg,expression:"showImg"}],attrs:{src:t.imgUrl,alt:""}}),i("div",{staticClass:"mouse-cover"}),t.showEidt?i("div",{staticClass:"edit-wrap"},[i("span",{staticClass:"rotate-left",on:{click:function(e){t.rotate("left")}}}),i("span",{staticClass:"rotate-right",on:{click:function(e){t.rotate("right")}}})]):t._e()])}),d=[],u={name:"VImgzoomer",props:{scale:{type:Number,default:2.5},url:{type:String,required:!0},bigUrl:{type:String,default:null},scroll:{type:Boolean,default:!1},showEidt:{type:Boolean,default:!1}},data(){return{id:null,cover:null,imgbox:null,imgwrap:null,orginUrl:null,bigImgUrl:null,bigOrginUrl:null,imgUrl:null,img:null,canvas:null,ctx:null,rectTimesX:0,rectTimesY:0,imgTimesX:0,imgTimesY:0,init:!1,step:0,bigStep:0,vertical:!1,showImg:!0}},created(){const t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",e=t.length;let i="";for(let s=0;s<10;s++)i+=t.charAt(Math.floor(Math.random()*e));this.id=i,this.imgUrl=this.url,this.orginUrl=this.url,this.bigImgUrl=this.bigUrl,this.bigOrginUrl=this.bigUrl},watch:{url(t){this.imgUrl=t,this.orginUrl=t,this.initTime()},bigUrl(){this.bigImgUrl=bigUrl,this.bigOrginUrl=bigUrl,this.initTime()}},mounted(){this.$nextTick(()=>{this.initTime()})},methods:{initTime(){this.init=!1;let t,e=this.$refs[this.id];this.imgbox=e,this.cover=e.querySelector(".mouse-cover"),this.cover.style.width=this.imgbox.offsetWidth/this.scale+"px",this.cover.style.height=this.imgbox.offsetHeight/this.scale+"px",this.cover.style.left="-100%",this.cover.style.top="-100%",this.imgwrap=e.querySelector("img"),t=this.bigImgUrl?this.bigImgUrl:this.imgUrl,this.img=new Image,this.img.src=t,this.img.onload=(()=>{this.rectTimesX=this.imgbox.offsetWidth/this.scale/this.imgwrap.offsetWidth,this.rectTimesY=this.imgbox.offsetHeight/this.scale/this.imgwrap.offsetHeight,this.imgTimesX=this.img.width/this.imgwrap.offsetWidth,this.imgTimesY=this.img.height/this.imgwrap.offsetHeight,this.vertical=this.img.width<this.img.height,this.init=!0}),this.canvas&&(this.canvas.parentNode.removeChild(this.canvas),this.canvas=null),this.canvas=document.createElement("canvas"),this.canvas.className="mouse-cover-canvas",this.canvas.style.position="absolute",this.canvas.style.left=this.imgbox.offsetLeft+this.imgbox.offsetWidth+10+"px",this.canvas.style.top=this.imgbox.offsetTop+"px",this.canvas.style.border="1px solid #eee",this.canvas.style.zIndex="99999",this.canvas.height=this.imgbox.offsetHeight,this.canvas.width=this.imgbox.offsetWidth,this.canvas.style.display="none",document.body.append(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},initBox(){this.showImg=!1,this.canvas.style.display="none";let t,e=this.$refs[this.id];t=this.bigImgUrl?this.bigImgUrl:this.imgUrl,this.img=new Image,this.img.src=t,this.img.onload=(()=>{this.vertical=this.img.width<this.img.height,this.showImg=!0;e.querySelector("img");setTimeout(()=>{this.rectTimesX=this.imgbox.offsetWidth/this.scale/e.querySelector("img").offsetWidth,this.rectTimesY=this.imgbox.offsetHeight/this.scale/e.querySelector("img").offsetHeight},20)})},mousemove(t){if(!this.init)return!1;let e=this;function i(t){var e=null,i=null,s=t.offsetParent;e+=t.offsetLeft,i+=t.offsetTop;while(s)-1===navigator.userAgent.indexOf("MSIE 8.0")&&(e+=s.clientLeft,i+=s.clientTop),e+=s.offsetLeft,i+=s.offsetTop,s=s.offsetParent;return{left:e,top:i}}function s(t){return{x:t.clientX-e.cover.offsetWidth/2,y:t.clientY-e.cover.offsetHeight/2}}let r=t||event,o=s(r),a=i(this.imgwrap),n={minX:a.left,maxX:a.left+this.imgwrap.offsetWidth-this.cover.offsetWidth,minY:a.top-document.documentElement.scrollTop,maxY:a.top-document.documentElement.scrollTop+this.imgwrap.offsetHeight-this.cover.offsetHeight};o.x>n.maxX&&(o.x=n.maxX),o.x<n.minX&&(o.x=n.minX),o.y>n.maxY&&(o.y=n.maxY),o.y<n.minY&&(o.y=n.minY),this.cover.style.left=o.x+"px",this.cover.style.top=o.y+"px",this.ctx.clearRect(0,0,this.imgwrap.offsetWidth,this.imgwrap.offsetHeight);let l=o.x-(a.left-document.documentElement.scrollLeft),h=o.y-(a.top-document.documentElement.scrollTop);this.ctx.drawImage(this.img,l*this.imgTimesX,h*this.imgTimesY,this.img.width*this.rectTimesX,this.img.height*this.rectTimesY,0,0,this.imgbox.offsetWidth,this.imgbox.offsetHeight)},mouseover(t){if(!this.init)return!1;t=t||event,this.scroll||(t.currentTarget.addEventListener("mousewheel",function(t){t.preventDefault()},!1),t.currentTarget.addEventListener("DOMMouseScroll",function(t){t.preventDefault()},!1)),this.cover.style.display="block",this.canvas.style.display="block"},mouseleave(){if(!this.init)return!1;this.cover.style.display="none",this.canvas.style.display="none"},rotate(t){var e=new Image;if(e.crossOrigin="Anonymous",e.src=this.orginUrl,e.onload=(()=>{this.rotateImg(e,t,this.step)}),this.bigOrginUrl){var i=new Image;e.crossOrigin="Anonymous",i.src=this.bigOrginUrl,i.onload=(()=>{this.rotateImg(i,t,this.bigStep,!0)})}},rotateImg(t,e,i,s=!1){var r=0,o=3;if(null!=t){var a=t.height,n=t.width;null==i&&(i=r),"right"==e?(i++,i>o&&(i=r)):(i--,i<r&&(i=o));var l=document.createElement("canvas"),h=90*i*Math.PI/180,c=l.getContext("2d");switch(l.width=a,l.height=n,c.rotate(h),c.drawImage(t,0,-a),i){case 0:l.width=n,l.height=a,c.drawImage(t,0,0);break;case 1:l.width=a,l.height=n,c.rotate(h),c.drawImage(t,0,-a);break;case 2:l.width=n,l.height=a,c.rotate(h),c.drawImage(t,-n,-a);break;case 3:l.width=a,l.height=n,c.rotate(h),c.drawImage(t,-n,0);break}var g=l.toDataURL();s?(this.bigImgUrl=g,this.bigStep=i,this.initBox()):(this.imgUrl=g,this.step=i,this.$nextTick(()=>{this.initBox()}))}}}},p=u,v=(i("2dc5"),Object(l["a"])(p,m,d,!1,null,"614562af",null));v.options.__file="img-zoomer.vue";var b=v.exports;const x=[b],w=function(t){w.installed||x.map(e=>t.component(e.name,e))};"undefined"!==typeof window&&window.Vue&&w(window.Vue);var y={install:w,imgZoomer:b};s["a"].directive("hljs",t=>{let e=t.querySelectorAll("pre");Array.prototype.forEach.call(e,f.a.highlightBlock)}),s["a"].use(y),s["a"].config.productionTip=!1,new s["a"]({render:t=>t(c)}).$mount("#app")},f988:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"",""])}});
//# sourceMappingURL=index.520f9085.js.map
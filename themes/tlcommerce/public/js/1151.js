"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1151],{7149:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(3645),n=o.n(r)()((function(e){return e[1]}));n.push([e.id,".section_btn[data-v-71fdd19d]{background-color:var(--button-background-color);border:var(--button-border);border-color:var(--button-border-color);color:var(--button-color)}.section_btn[data-v-71fdd19d]:hover{background-color:var(--button-hover-bg-color);border-color:var(--button-hover-border-color);color:var(--button-hover-color)}.collection-section[data-v-71fdd19d]{background-color:var(--section-background-color);background-image:var(--section-background-image);background-position:var(--section-background-image-position);background-repeat:var(--section-background-image-repeat);background-size:var(--section-background-image-size);margin:var(--section-margin)!important;padding:var(--section-padding)!important}",""]);const i=n},1151:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var r=o(118),n={class:"custom-container2"},i={class:"row align-items-center"},c={class:"col-md-6"},l={class:"col-md-6 text-md-end"};var s=o(2830),a=o(1911),d=(0,r.defineAsyncComponent)((function(){return o.e(1721).then(o.bind(o,1721))})),p=o(9669).default;const u={name:"CollectionSection",components:{Swiper:s.tq,SwiperSlide:s.o5,SingleProduct:d},setup:function(){return{modules:[a.pt,a.tl]}},props:{content:{type:String,required:!1},properties:{type:Array,required:!1}},data:function(){return{collectionDetails:{},collectionProducts:[],bgImage:null}},computed:{styleObject:function(){return{"--section-background-color":this.properties.bg_color,"--section-background-image":"url(".concat(this.properties.bg_image,")"),"--section-background-image-position":this.properties.background_position,"--section-background-image-size":this.properties.background_size,"--section-background-image-repeat":this.properties.background_repeat,"--section-padding":"".concat(this.properties.padding_top+"px "+this.properties.padding_right+"px "+this.properties.padding_bottom+"px "+this.properties.padding_left+"px"),"--section-margin":"".concat(this.properties.margin_top+"px "+this.properties.margin_right+"px "+this.properties.margin_bottom+"px "+this.properties.margin_left+"px"),"--button-color":this.properties.btn_color,"--button-background-color":this.properties.btn_bg_color,"--button-border":null!=this.properties.btn_border?this.properties.btn_border+"px solid":"0px","--button-border-color":this.properties.btn_border_color,"--button-hover-border-color":this.properties.btn_border_hover_color,"--button-hover-bg-color":this.properties.btn_bg_hover_color,"--button-hover-color":this.properties.btn_hover_color}}},mounted:function(){this.getCollectionSectionContent()},methods:{getCollectionSectionContent:function(){var e=this;p.post("/api/theme/tlcommerce/v1/collection-details",{id:this.content}).then((function(t){t.data.success&&(e.collectionDetails=t.data.details,e.collectionProducts=t.data.collection_products.data)})).catch((function(e){}))}}};var b=o(3379),g=o.n(b),m=o(7149),h={insert:"head",singleton:!1};g()(m.Z,h);m.Z.locals;const v=(0,o(3744).Z)(u,[["render",function(e,t,o,s,a,d){var p=(0,r.resolveComponent)("section-title"),u=(0,r.resolveComponent)("router-link"),b=(0,r.resolveComponent)("single-product"),g=(0,r.resolveComponent)("swiper-slide"),m=(0,r.resolveComponent)("swiper");return(0,r.openBlock)(),(0,r.createElementBlock)("section",{class:"collection-section home-page-section",style:(0,r.normalizeStyle)(d.styleObject)},[(0,r.createElementVNode)("div",n,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",c,[(0,r.createVNode)(p,{class:"mb-30 section-title",title:a.collectionDetails.name,titleColor:o.properties.title_color},null,8,["title","titleColor"])]),(0,r.createElementVNode)("div",l,[(0,r.createVNode)(u,{class:"btn btn-sm rounded-0 mb-30 section_btn",style:(0,r.normalizeStyle)(d.styleObject),to:"/collection/".concat(a.collectionDetails.id,"?collection=").concat(a.collectionDetails.permalink)},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(null!=o.properties.btn_title?o.properties.btn_title:e.$t("View All")),1)]})),_:1},8,["style","to"])])]),a.collectionProducts.length?((0,r.openBlock)(),(0,r.createBlock)(m,{key:0,slidesPerView:6,modules:s.modules,spaceBetween:1,autoplay:{delay:4e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!0,pagination:{clickable:!0},class:"product-grid-slider theme-slider-dots",breakpoints:{0:{slidesPerView:2},480:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:6}}},{default:(0,r.withCtx)((function(){return[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(a.collectionProducts,(function(e,t){return(0,r.openBlock)(),(0,r.createBlock)(g,{key:"slide-".concat(t)},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(b,{item:e},null,8,["item"])]})),_:2},1024)})),128))]})),_:1},8,["modules"])):(0,r.createCommentVNode)("",!0)])],4)}],["__scopeId","data-v-71fdd19d"]])}}]);
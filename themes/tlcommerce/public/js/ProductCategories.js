"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8631,3803],{425:(e,t,a)=>{a.d(t,{Z:()=>n});var o=a(3645),c=a.n(o)()((function(e){return e[1]}));c.push([e.id,".page-header[data-v-3ef2a2bd]{padding:16px 0}.fs-20[data-v-3ef2a2bd]{font-size:20px!important}",""]);const n=c},7691:(e,t,a)=>{a.d(t,{Z:()=>n});var o=a(3645),c=a.n(o)()((function(e){return e[1]}));c.push([e.id,".child-category-wrapper .child-category[data-v-4434bfe3]:not(:last-child){margin-bottom:2rem!important}",""]);const n=c},3803:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var o=a(118),c={class:"custom-container2"},n={class:"align-items-center row"},r={key:0,class:"col-lg-6"},l={key:1,class:"col-lg-6 d-flex justify-content-lg-end"},s={key:2,class:"col-lg-6"};var i=a(8549);const d={name:"PageHeader",components:{CBreadcrumb:i.fj,CBreadcrumbItem:i.Sd},props:{title:{type:String,default:""},whiteBg:{type:Boolean,default:!1},items:{type:Array,default:function(){return[]}},small:{type:Boolean,default:!1}}};var m=a(3379),u=a.n(m),g=a(425),p={insert:"head",singleton:!1};u()(g.Z,p);g.Z.locals;const k=(0,a(3744).Z)(d,[["render",function(e,t,a,i,d,m){var u=(0,o.resolveComponent)("CBreadcrumbItem"),g=(0,o.resolveComponent)("CBreadcrumb");return(0,o.openBlock)(),(0,o.createElementBlock)("div",{class:(0,o.normalizeClass)(["page-header bg-light",{"white-box":a.whiteBg}])},[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",n,[a.title?((0,o.openBlock)(),(0,o.createElementBlock)("div",r,[a.title?((0,o.openBlock)(),(0,o.createElementBlock)("h2",{key:0,class:(0,o.normalizeClass)(["fs-20 mb-lg-0 page-title",{small:a.small}])},(0,o.toDisplayString)(a.title),3)):(0,o.createCommentVNode)("",!0)])):(0,o.createCommentVNode)("",!0),a.title?((0,o.openBlock)(),(0,o.createElementBlock)("div",l,[(0,o.createVNode)(g,{style:{"--cui-breadcrumb-divider":"'>'"}},{default:(0,o.withCtx)((function(){return[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(a.items,(function(e){return(0,o.openBlock)(),(0,o.createBlock)(u,{href:e.href,class:(0,o.normalizeClass)({active:e.active}),key:e},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.text),1)]})),_:2},1032,["href","class"])})),128))]})),_:1})])):((0,o.openBlock)(),(0,o.createElementBlock)("div",s,[(0,o.createVNode)(g,{style:{"--cui-breadcrumb-divider":"'>'"}},{default:(0,o.withCtx)((function(){return[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(a.items,(function(e){return(0,o.openBlock)(),(0,o.createBlock)(u,{href:e.href,class:(0,o.normalizeClass)({active:e.active}),key:e},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.text),1)]})),_:2},1032,["href","class"])})),128))]})),_:1})]))])])],2)}],["__scopeId","data-v-3ef2a2bd"]])},3376:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var o=a(118),c={class:""},n={class:"pt-60 pb-60 light-bg"},r={class:"custom-container2"},l={class:"row"},s={key:0,class:"col-12"},i={class:"card-header"},d={class:"mb-0 py-1"},m={class:"card-body"},u={key:0,class:"sub-categories"},g={class:"row gx-0"},p={class:"col-12"},k={class:"row child-category-wrapper"},f={class:"sub-category-group"},h={class:"sub-category-title"},v={class:"sub-category list-unstyled mb-0"},y={key:1,class:"col-12"};var B=a(3803),C=a(9669),b=a.n(C);const N={name:"Categories",components:{PageHeader:B.default},data:function(){return{bItems:[{text:this.$t("Home"),href:"/"},{text:this.$t("Categories"),active:!0}],megaCategories:[],categoryLoading:!0}},mounted:function(){document.title=this.$t("All Categories"),this.getMegaCategories()},methods:{getMegaCategories:function(){var e=this,t={"Content-Type":"application/json","Accept-Language":localStorage.getItem("locale")||"en"};b().get("/api/v1/ecommerce-core/mega-categories",{headers:t}).then((function(t){t.data.success&&(e.megaCategories=t.data.data),e.categoryLoading=!1})).catch((function(t){e.categoryLoading=!1}))}}};var V=a(3379),E=a.n(V),x=a(7691),w={insert:"head",singleton:!1};E()(x.Z,w);x.Z.locals;const L=(0,a(3744).Z)(N,[["render",function(e,t,a,B,C,b){var N=(0,o.resolveComponent)("page-header"),V=(0,o.resolveComponent)("router-link"),E=(0,o.resolveComponent)("skeleton");return(0,o.openBlock)(),(0,o.createElementBlock)("div",c,[(0,o.createVNode)(N,{class:"pt-3 pb-3",items:C.bItems},null,8,["items"]),(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",l,[C.categoryLoading?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("div",s,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(C.megaCategories,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{class:"card mb-30",key:t},[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("h5",d,[(0,o.createVNode)(V,{to:"/products/category/".concat(e.slug)},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.name),1)]})),_:2},1032,["to"])])]),(0,o.createElementVNode)("div",m,[e.childs.data?((0,o.openBlock)(),(0,o.createElementBlock)("div",u,[(0,o.createElementVNode)("div",g,[(0,o.createElementVNode)("div",p,[(0,o.createElementVNode)("div",k,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.childs.data,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{key:"subCatGroup-".concat(t),class:"col-lg-2 child-category"},[(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("h6",h,[(0,o.createVNode)(V,{to:"/products/category/".concat(e.slug)},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.name),1)]})),_:2},1032,["to"])]),(0,o.createElementVNode)("ul",v,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.childs.data,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:"item-".concat(t),class:"sub-category-link"},[(0,o.createVNode)(V,{to:"/products/category/".concat(e.slug)},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.name),1)]})),_:2},1032,["to"])])})),128))])])])})),128))])])])])):(0,o.createCommentVNode)("",!0)])])})),128))])),C.categoryLoading?((0,o.openBlock)(),(0,o.createElementBlock)("div",y,[(0,o.createVNode)(E,{class:"w-100 mb-20",height:"300px"}),(0,o.createVNode)(E,{class:"w-100 mb-20",height:"300px"})])):(0,o.createCommentVNode)("",!0)])])])])}],["__scopeId","data-v-4434bfe3"]])}}]);
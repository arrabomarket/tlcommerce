"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2376],{2376:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var c=a(118),o={class:"col-10 mx-auto"},s=["action"],n={class:"row mb-20"},r={class:"form-group col-12"},l=["placeholder"],i={class:"mb-45 mx-0 row"};var u=a(9669).default;const m={name:"SubscribeForm",data:function(){return{email:"",newsletterAction:"#"}},methods:{subscribe:function(){var e=this;u.post("/api/theme/tlcommerce/v1/newsletter-store",{email:this.email}).then((function(t){t.data.success?e.$toast.success(t.data.message):e.$toast.error(t.data.message)})).catch((function(e){}))}}};const d=(0,a(3744).Z)(m,[["render",function(e,t,a,u,m,d){return(0,c.openBlock)(),(0,c.createElementBlock)("div",o,[(0,c.createElementVNode)("form",{action:m.newsletterAction,method:"post"},[(0,c.createElementVNode)("div",n,[(0,c.createElementVNode)("div",r,[(0,c.withDirectives)((0,c.createElementVNode)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return m.email=e}),class:"theme-input-style",placeholder:e.$t("Enter your email")},null,8,l),[[c.vModelText,m.email]])])]),(0,c.createElementVNode)("div",i,[(0,c.createElementVNode)("button",{onClick:t[1]||(t[1]=function(){return d.subscribe&&d.subscribe.apply(d,arguments)}),type:"button",class:"btn d-block"},(0,c.toDisplayString)(e.$t("Subscribe")),1)])],8,s)])}]])}}]);
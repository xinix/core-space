import{d as m,o as i,a as r,e as t,t as p,s as $,c as h,v as I,x as O,b as n,y as T,n as V,p as g,j as b,_ as v,z as S,i as x,w as f,k as N,F as q,r as D,f as F,u as U,A as z,h as _,g as E,B as L}from"./main.3a2d0b53.js";import{_ as M}from"./BackButton.vue_vue_type_script_setup_true_lang.da94b9ad.js";const R={class:"form-field"},j={class:"form-label"},A=["for"],H={class:"form-control"},k=m({__name:"FormField",props:{label:null,name:null},setup(e){return(c,o)=>(i(),r("div",R,[t("div",j,[t("label",{for:e.name},p(c.$t(e.label)),9,A),$(c.$slots,"label")]),t("div",H,[$(c.$slots,"default")])]))}}),P=e=>(g("data-v-2c7243fb"),e=e(),b(),e),W=["for"],G=["id","value"],J={class:"option"},K={class:"name"},Q=P(()=>t("span",{class:"material-symbols-rounded off"}," radio_button_unchecked ",-1)),X=P(()=>t("span",{class:"material-symbols-rounded on"}," radio_button_checked ",-1)),Y={class:"preview"},Z=m({__name:"ThemeOption",props:{name:null,value:null,modelValue:null},emits:["update:modelValue"],setup(e,{emit:c}){const o=e,l=h({get:()=>o.modelValue,set:s=>c("update:modelValue",s)}),d=h(()=>`${o.value}_mode`),u={dark:{quote:"I think we've been lucky. We've managed to catch the First Born on the hop. Did they seem more organised to you when we went on that last raid?",by:"Balcor, Nerind'ar, age: 60",image:"balcor"},light:{quote:"They did. I kept a couple of the Engrams aside. Daric thought we might be able to use them, what do you think, Balcor?",by:"Cassiopeia Peltier, Human, age: 32",image:"cassie"}},a=h(()=>u[o.value]);return(s,y)=>(i(),r("label",{for:e.name,class:"theme-option"},[I(t("input",{id:e.name,"onUpdate:modelValue":y[0]||(y[0]=C=>T(l)?l.value=C:null),value:e.value,name:"theme",type:"radio"},null,8,G),[[O,n(l)]]),t("span",J,[t("span",K,[Q,X,t("span",null,p(s.$t(n(d))),1)]),t("span",Y,[t("span",{class:V([n(a).image,"crew"])},null,2),t("strong",null,p(n(a).quote),1),t("small",null,p(n(a).by),1)])])],8,W))}});const w=v(Z,[["__scopeId","data-v-2c7243fb"]]),B=e=>(g("data-v-17c647b0"),e=e(),b(),e),ee=B(()=>t("section",{class:"image"},[t("figure"),t("span",{class:"checkbox material-symbols-rounded"},"done")],-1)),te={class:"product"},oe={class:"name"},se=["href"],ae=B(()=>t("span",{class:"material-symbols-rounded"},"shopping_cart",-1)),ne=m({__name:"ProductOption",props:{tag:{default:"div"},option:null,selected:null},emits:["select"],setup(e,{emit:c}){const o=e,l=S(),d=h(()=>{const s={active:o.selected.indexOf(o.option)>=0};return s[o.option]=!0,s}),u=s=>(c("select",o.option),s),a=s=>(s.stopPropagation(),s);return(s,y)=>(i(),x(N(e.tag),{class:V([n(d),"product-option"])},{default:f(()=>[t("div",{class:"container",onClick:u},[ee,t("header",te,[t("strong",oe,p(s.$t(e.option)),1)])]),t("a",{href:n(l).getBuyNowLink(e.option),class:"buy-now",target:"_blank",onClick:a},[ae,t("span",null,p(s.$t("buy-now")),1)],8,se)]),_:1},8,["class"]))}});const le=v(ne,[["__scopeId","data-v-17c647b0"]]),ce={class:"products"},de=m({__name:"ProductSelector",props:{modelValue:null,options:null},emits:["update:modelValue"],setup(e,{emit:c}){const o=e,l=d=>{const u=[...o.modelValue],a=u.indexOf(d);a>=0?u.splice(a,1):u.push(d),c("update:modelValue",u)};return(d,u)=>(i(),r("ul",ce,[(i(!0),r(q,null,D(e.options,a=>(i(),x(le,{key:a,option:a,selected:e.modelValue,tag:"li",onSelect:l},null,8,["option","selected"]))),128))]))}});const ue=v(de,[["__scopeId","data-v-37422a90"]]),ie=e=>(g("data-v-fcb56419"),e=e(),b(),e),re={class:"progress-bar"},_e={class:"svg",viewBox:"0 0 200 30"},pe=ie(()=>t("line",{class:"bg",stroke:"#899390","stroke-linecap":"round","stroke-width":"5",x1:"5",x2:"195",y1:"15",y2:"15"},null,-1)),me=["x2"],he=m({__name:"ProgressBar",props:{value:null,total:null},setup(e){const c=e,o=h(()=>c.value/c.total*195);return(l,d)=>(i(),r("div",re,[(i(),r("svg",_e,[pe,n(o)?(i(),r("line",{key:0,x2:n(o),class:"bar",stroke:"#ffffff","stroke-linecap":"round","stroke-width":"5",x1:"5",y1:"15",y2:"15"},null,8,me)):F("",!0)]))]))}});const ve=v(he,[["__scopeId","data-v-fcb56419"]]),fe=e=>(g("data-v-413ef5be"),e=e(),b(),e),ge={class:"settings"},be=fe(()=>t("span",{class:"material-symbols-rounded"},"Settings",-1)),ye=["onSubmit"],$e=m({__name:"SettingsPage",setup(e){const c=U(),o=z(),l=S(),d=u=>(o.save(),o.apply(),l.save(),c.load(l.active),u);return(u,a)=>(i(),r("div",ge,[t("header",null,[_(M,{class:"btn"}),t("h1",null,[be,E(" "+p(u.$t("preferences")),1)])]),t("form",{onSubmit:L(d,["prevent"])},[_(k,{label:"owned_products",name:"products"},{label:f(()=>[_(ve,{total:n(l).totalCount,value:n(l).inCollectionCount},null,8,["total","value"])]),default:f(()=>[_(ue,{modelValue:n(l).active,"onUpdate:modelValue":[a[0]||(a[0]=s=>n(l).active=s),d],options:n(l).options},null,8,["modelValue","options"])]),_:1}),_(k,{label:"theme",name:"theme"},{default:f(()=>[_(w,{modelValue:n(o).theme,"onUpdate:modelValue":[a[1]||(a[1]=s=>n(o).theme=s),d],name:"dark-mode",value:"dark"},null,8,["modelValue"]),_(w,{modelValue:n(o).theme,"onUpdate:modelValue":[a[2]||(a[2]=s=>n(o).theme=s),d],name:"light-mode",value:"light"},null,8,["modelValue"])]),_:1})],40,ye)]))}});const Ve=v($e,[["__scopeId","data-v-413ef5be"]]);export{Ve as default};

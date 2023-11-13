import{d as h,h as o,o as s,e as i,i as k,j as C,w as $,a as y,k as I,c as a,n as b,t as d,b as l,_ as f,F as v,r as g,p as M,g as B,S as L}from"./main.2b5c5756.js";const H=h({__name:"AttributeIcon",props:{attribute:{}},setup(n){const e=n,r=o(()=>`${e.attribute.replace("_","-")}-icon`);return(c,m)=>(s(),i(k(r.value)))}}),z=["innerHTML"],A=h({__name:"IconLegend",props:{icon:{},tag:{default:"div"},mustache:{default:null},legend:{default:""}},setup(n){const e=n,{t:r}=C(),c=o(()=>e.mustache!=null&&!Array.isArray(e.mustache)),m=o(()=>{const t={};return t[e.icon]=!0,t}),p=o(()=>{const t=e.legend===""?e.icon:e.legend;return e.mustache!=null?r(t,Array.isArray(e.mustache)?e.mustache:[e.mustache]):r(t)});return(t,_)=>(s(),i(k(t.tag),{class:"icon-description"},{default:$(()=>[y("figure",null,[I(H,{attribute:t.icon},null,8,["attribute"]),c.value?(s(),a("span",{key:0,class:b([m.value,"number"])},d(t.mustache),3)):l("",!0)]),y("span",{innerHTML:p.value},null,8,z)]),_:1}))}});const T=f(A,[["__scopeId","data-v-ed3d91d8"]]),S=h({__name:"JustText",props:{attribute:{},tag:{default:"p"},mustache:{default:null}},setup(n){const e=n,{t:r}=C(),c=o(()=>e.mustache!=null?r(e.attribute,Array.isArray(e.mustache)?e.mustache:[e.mustache]):r(e.attribute));return(m,p)=>(s(),i(k(m.tag),{class:"attribute",innerHTML:c.value},null,8,["innerHTML"]))}});const D=f(S,[["__scopeId","data-v-6c724132"]]),N=n=>(M("data-v-72899882"),n=n(),B(),n),E=["innerHTML"],J=["innerHTML"],V={class:"crystals"},W=N(()=>y("svg",{fill:"none",height:"16",viewBox:"0 0 19 16",width:"19",xmlns:"http://www.w3.org/2000/svg"},[y("path",{d:"M7.76795 2C8.53775 0.666668 10.4623 0.666667 11.2321 2L16.8612 11.75C17.631 13.0833 16.6688 14.75 15.1292 14.75L3.87084 14.75C2.33124 14.75 1.36898 13.0833 2.13878 11.75L7.76795 2Z",fill:"black",stroke:"black","stroke-linejoin":"round","stroke-width":"2"})],-1)),j=[W],F=h({__name:"BuyWithCrystals",props:{tag:{default:"div"},name:{},buy:{default:-1},sell:{default:-1},crystals:{}},setup(n){return(e,r)=>(s(),i(k(e.tag),null,{default:$(()=>[e.buy===-1?(s(),a("span",{key:0,innerHTML:e.$t("sell-with-crystal",[e.name,e.sell,e.crystals.length])},null,8,E)):(s(),a("span",{key:1,innerHTML:e.$t("buy-with-crystal",[e.name,e.buy,e.crystals.length])},null,8,J)),y("span",V,[(s(!0),a(v,null,g(e.crystals,(c,m)=>(s(),a("span",{key:m,class:b([c,"crystal"])},j,2))),128))])]),_:1}))}});const Z=f(F,[["__scopeId","data-v-72899882"]]),U={class:"title"},q={key:0,class:"dl"},G={key:0},K={key:1},O={key:2},P={key:3},Q={key:4},R={key:5},X={key:0,class:"more"},Y={key:0,class:"list"},x={key:1,class:"list"},ee={key:2,class:"list"},te=h({__name:"TokenDetails",props:{item:{},active:{type:Boolean,default:!1}},setup(n){const e=n,r=o(()=>e.active?"div":"router-link"),c=o(()=>{const t={active:e.active},_=L[e.item.size];return t[_]=!0,t[e.item.color]=!0,t}),m=o(()=>{const t={},_=L[e.item.size];return t[e.item.product]=!0,t[_]=!0,t[e.item.slug]=!0,t}),p=o(()=>[{key:"phase",value:e.item.phase},{key:"close",value:e.item.close},{key:"heavy",value:e.item.heavy},{key:"short",value:e.item.short,icon:"range"},{key:"medium",value:e.item.medium,icon:"range"},{key:"long",value:e.item.long,icon:"range"},{key:"throw",value:e.item.throw},{key:"grenade",value:e.item.grenade},{key:"armour",value:e.item.armour,icon:"physical_armour"},{key:"blue-armour",value:e.item.blue_armour},{key:"blue-armour-regen",value:e.item.blue_armour_regen},{key:"shield",value:e.item.shield,icon:"shield_armour"},{key:"dyson",value:e.item.dyson},{key:"move",value:e.item.move},{key:"scramble",value:e.item.scramble},{key:"stim-heal",value:e.item.heal},{key:"stim-heal-plus",value:e.item.super_heal},{key:"stim-skill",value:e.item.skill},{key:"stim-skill-plus",value:e.item.super_skill},{key:"stim-combat",value:e.item.action},{key:"freeze",value:e.item.freeze},{key:"explode",value:e.item.explode},{key:"scatter-core",value:e.item.scatter,icon:"scatter"}].filter(_=>_.value!=null));return(t,_)=>(s(),i(k(r.value),{class:b([c.value,"token-details"]),to:{name:"token",params:{slug:t.item.key}},tabindex:"-1"},{default:$(()=>[y("figure",{class:b([m.value,"token"])},null,2),y("header",U,[y("h3",null,d(t.item.name),1),t.active?(s(),a("dl",q,[t.item.buy?(s(),a("dt",G,d(t.$t("buy"))+":",1)):l("",!0),t.item.buy?(s(),a("dd",K,d(t.item.buy),1)):l("",!0),t.item.sell?(s(),a("dt",O,d(t.$t("sell"))+":",1)):l("",!0),t.item.sell?(s(),a("dd",P,d(t.item.sell),1)):l("",!0),t.item.range?(s(),a("dt",Q,d(t.$t("range"))+":",1)):l("",!0),t.item.range?(s(),a("dd",R,d(t.$t(t.item.range)),1)):l("",!0)])):l("",!0)]),t.active?(s(),a("section",X,[t.item.description?(s(),a("ul",Y,[(s(!0),a(v,null,g(t.item.description,u=>(s(),i(D,{key:u,attribute:u,tag:"li"},null,8,["attribute"]))),128))])):l("",!0),p.value.length>0||t.item.icons?(s(),a("ul",x,[(s(!0),a(v,null,g(p.value,u=>{var w;return s(),i(T,{key:u.key,icon:(w=u.icon)!=null?w:u.key,legend:u.key,mustache:u.value,tag:"li"},null,8,["icon","legend","mustache"])}),128)),(s(!0),a(v,null,g(t.item.icons,u=>(s(),i(T,{key:u,icon:u,tag:"li"},null,8,["icon"]))),128))])):l("",!0),t.item.crystals?(s(),a("ul",ee,[t.item.crystals?(s(),i(Z,{key:0,buy:t.item.buy,crystals:t.item.crystals,name:t.item.name,sell:t.item.sell,tag:"li"},null,8,["buy","crystals","name","sell"])):l("",!0)])):l("",!0)])):l("",!0)]),_:1},8,["class","to"]))}});const ae=f(te,[["__scopeId","data-v-15a32a5a"]]);export{ae as T};
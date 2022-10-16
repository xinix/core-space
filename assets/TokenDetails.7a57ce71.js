import{d as _,c as h,o as s,k as o,l as b,e as y,m as w,j as $,f as r,i as I,b as a,n as f,t as d,g as l,_ as x,F as v,r as g,p as L,q as T,s as B}from"./main.bc0e3098.js";const M=_({__name:"AttributIcon",props:{attribute:null},setup(t){const e=t,i=h(()=>`${e.attribute.replace("_","-")}-icon`);return(c,n)=>(s(),o(b(y(i))))}}),A=["innerHTML"],H=_({__name:"IconLegend",props:{icon:null,tag:{default:"div"},mustache:{default:null},legend:{default:""}},setup(t){const e=t,{t:i}=w(),c=h(()=>e.mustache!=null&&!Array.isArray(e.mustache)),n=h(()=>{const m={};return m[e.icon]=!0,m}),k=h(()=>{const m=e.legend===""?e.icon:e.legend;return e.mustache!=null?i(m,Array.isArray(e.mustache)?e.mustache:[e.mustache]):i(m)});return(m,u)=>(s(),o(b(t.tag),{class:"icon-description"},{default:$(()=>[r("figure",null,[I(M,{attribute:t.icon},null,8,["attribute"]),y(c)?(s(),a("span",{key:0,class:f([y(n),"number"])},d(t.mustache),3)):l("",!0)]),r("span",{innerHTML:y(k)},null,8,A)]),_:1}))}});const p=x(H,[["__scopeId","data-v-a4bcfea3"]]),D=_({__name:"JustText",props:{attribute:null,tag:{default:"p"},mustache:{default:null}},setup(t){const e=t,{t:i}=w(),c=h(()=>e.mustache!=null?i(e.attribute,Array.isArray(e.mustache)?e.mustache:[e.mustache]):i(e.attribute));return(n,k)=>(s(),o(b(t.tag),{class:"attribute",innerHTML:y(c)},null,8,["innerHTML"]))}});const z=x(D,[["__scopeId","data-v-6c724132"]]),S=t=>(L("data-v-a7ed8e58"),t=t(),T(),t),J=["innerHTML"],N={class:"crystals"},V=S(()=>r("svg",{fill:"none",height:"16",viewBox:"0 0 19 16",width:"19",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M7.76795 2C8.53775 0.666668 10.4623 0.666667 11.2321 2L16.8612 11.75C17.631 13.0833 16.6688 14.75 15.1292 14.75L3.87084 14.75C2.33124 14.75 1.36898 13.0833 2.13878 11.75L7.76795 2Z",fill:"black",stroke:"black","stroke-linejoin":"round","stroke-width":"2"})],-1)),W=[V],j=_({__name:"BuyWithCrystals",props:{tag:{default:"div"},name:null,buy:{default:0},crystals:null},setup(t){return(e,i)=>(s(),o(b(t.tag),null,{default:$(()=>[r("span",{innerHTML:e.$t("buy-with-crystal",[t.name,t.buy,t.crystals.length])},null,8,J),r("span",N,[(s(!0),a(v,null,g(t.crystals,(c,n)=>(s(),a("span",{key:n,class:f([c,"crystal"])},W,2))),128))])]),_:1}))}});const F=x(j,[["__scopeId","data-v-a7ed8e58"]]),q={class:"title"},E={key:0,class:"dl"},Z={key:0},G={key:1},K={key:2},O={key:3},P={key:4},Q={key:5},R={key:0,class:"more"},U={key:0,class:"list"},X={key:1,class:"list"},Y={key:2,class:"list"},ee=_({__name:"TokenDetails",props:{item:null,active:{type:Boolean,default:!1}},setup(t){const e=t,i=h(()=>{const n={};return n[e.item.product]=!0,n[e.item.size]=!0,n[e.item.slug]=!0,n}),c=h(()=>[{key:"phase",value:e.item.phase},{key:"close",value:e.item.close},{key:"heavy",value:e.item.heavy},{key:"short",value:e.item.short,icon:"range"},{key:"medium",value:e.item.medium,icon:"range"},{key:"long",value:e.item.long,icon:"range"},{key:"throw",value:e.item.throw},{key:"grenade",value:e.item.grenade},{key:"armour",value:e.item.armour,icon:"physical_armour"},{key:"shield",value:e.item.shield,icon:"shield_armour"},{key:"dyson",value:e.item.dyson},{key:"move",value:e.item.move},{key:"scramble",value:e.item.scramble},{key:"stim-heal",value:e.item.heal},{key:"stim-heal-plus",value:e.item.super_heal},{key:"stim-skill",value:e.item.skill},{key:"stim-skill-plus",value:e.item.super_skill},{key:"stim-actions",value:e.item.action},{key:"freeze",value:e.item.freeze},{key:"explode",value:e.item.explode}].filter(k=>k.value!=null));return(n,k)=>{const m=B("router-link");return s(),o(m,{class:f([{active:t.active},"token-details"]),to:`/item/${t.item.slug}`,tabindex:"-1"},{default:$(()=>[r("figure",{class:f([y(i),"token"])},null,2),r("header",q,[r("h3",null,d(t.item.name),1),t.active?(s(),a("dl",E,[t.item.buy?(s(),a("dt",Z,d(n.$t("buy"))+":",1)):l("",!0),t.item.buy?(s(),a("dd",G,d(t.item.buy),1)):l("",!0),t.item.sell?(s(),a("dt",K,d(n.$t("sell"))+":",1)):l("",!0),t.item.sell?(s(),a("dd",O,d(t.item.sell),1)):l("",!0),t.item.range?(s(),a("dt",P,d(n.$t("range"))+":",1)):l("",!0),t.item.range?(s(),a("dd",Q,d(n.$t(t.item.range)),1)):l("",!0)])):l("",!0)]),t.active?(s(),a("section",R,[t.item.description?(s(),a("ul",U,[(s(!0),a(v,null,g(t.item.description,u=>(s(),o(z,{key:u,attribute:u,tag:"li"},null,8,["attribute"]))),128))])):l("",!0),y(c).length>0||t.item.icons?(s(),a("ul",X,[(s(!0),a(v,null,g(y(c),u=>{var C;return s(),o(p,{key:u.key,icon:(C=u.icon)!=null?C:u.key,legend:u.key,mustache:u.value,tag:"li"},null,8,["icon","legend","mustache"])}),128)),(s(!0),a(v,null,g(t.item.icons,u=>(s(),o(p,{key:u,icon:u,tag:"li"},null,8,["icon"]))),128))])):l("",!0),t.item.crystals?(s(),a("ul",Y,[t.item.crystals?(s(),o(F,{key:0,buy:t.item.buy,crystals:t.item.crystals,name:t.item.name,tag:"li"},null,8,["buy","crystals","name"])):l("",!0)])):l("",!0)])):l("",!0)]),_:1},8,["class","to"])}}});const se=x(ee,[["__scopeId","data-v-feb90a01"]]);export{se as T};

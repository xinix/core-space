import{d as p,k as i,o as s,e as u,l as v,m as C,i as $,a as y,j as T,c as a,n as b,t as d,b as l,_ as f,F as g,r as _,p as w}from"./main-BlFvgC6Q.js";const M=p({__name:"AttributeIcon",props:{attribute:{}},setup(o){const e=o,n=i(()=>`${e.attribute.replace("_","-")}-icon`);return(c,m)=>(s(),u(v(n.value)))}}),I=["innerHTML"],B=p({__name:"IconLegend",props:{icon:{},tag:{default:"div"},mustache:{default:null},legend:{default:""}},setup(o){const e=o,{t:n}=C(),c=i(()=>e.mustache!=null&&!Array.isArray(e.mustache)),m=i(()=>{const t={};return t[e.icon]=!0,t}),k=i(()=>{const t=e.legend===""?e.icon:e.legend;return e.mustache!=null?n(t,Array.isArray(e.mustache)?e.mustache:[e.mustache]):n(t)});return(t,h)=>(s(),u(v(t.tag),{class:"icon-description"},{default:$(()=>[y("figure",null,[T(M,{attribute:t.icon},null,8,["attribute"]),c.value?(s(),a("span",{key:0,class:b([m.value,"number"])},d(t.mustache),3)):l("",!0)]),y("span",{innerHTML:k.value},null,8,I)]),_:1}))}}),L=f(B,[["__scopeId","data-v-ed3d91d8"]]),H=p({__name:"JustText",props:{attribute:{},tag:{default:"p"},mustache:{default:null}},setup(o){const e=o,{t:n}=C(),c=i(()=>e.mustache!=null?n(e.attribute,Array.isArray(e.mustache)?e.mustache:[e.mustache]):n(e.attribute));return(m,k)=>(s(),u(v(m.tag),{class:"attribute",innerHTML:c.value},null,8,["innerHTML"]))}}),z=f(H,[["__scopeId","data-v-6c724132"]]),A=["innerHTML"],D=["innerHTML"],N={class:"crystals"},E=p({__name:"BuyWithCrystals",props:{tag:{default:"div"},name:{},buy:{default:-1},sell:{default:-1},crystals:{}},setup(o){return(e,n)=>(s(),u(v(e.tag),null,{default:$(()=>[e.buy===-1?(s(),a("span",{key:0,innerHTML:e.$t("sell-with-crystal",[e.name,e.sell,e.crystals.length])},null,8,A)):(s(),a("span",{key:1,innerHTML:e.$t("buy-with-crystal",[e.name,e.buy,e.crystals.length])},null,8,D)),y("span",N,[(s(!0),a(g,null,_(e.crystals,(c,m)=>(s(),a("span",{key:m,class:b([c,"crystal"])},n[0]||(n[0]=[y("svg",{fill:"none",height:"16",viewBox:"0 0 19 16",width:"19",xmlns:"http://www.w3.org/2000/svg"},[y("path",{d:"M7.76795 2C8.53775 0.666668 10.4623 0.666667 11.2321 2L16.8612 11.75C17.631 13.0833 16.6688 14.75 15.1292 14.75L3.87084 14.75C2.33124 14.75 1.36898 13.0833 2.13878 11.75L7.76795 2Z",fill:"black",stroke:"black","stroke-linejoin":"round","stroke-width":"2"})],-1)]),2))),128))])]),_:1}))}}),V=f(E,[["__scopeId","data-v-72899882"]]),j={class:"title"},F={key:0,class:"dl"},J={key:0},S={key:1},W={key:2},Z={key:3},U={key:4},q={key:5},G={key:0,class:"more"},K={key:0,class:"list"},O={key:1,class:"list"},P={key:2,class:"list"},Q=p({__name:"TokenDetails",props:{item:{},active:{type:Boolean,default:!1}},setup(o){const e=o,n=i(()=>e.active?"div":"router-link"),c=i(()=>{const t={active:e.active},h=w[e.item.size];return t[h]=!0,t[e.item.color]=!0,t}),m=i(()=>{const t={},h=w[e.item.size];return t[e.item.product]=!0,t[h]=!0,t[e.item.slug]=!0,t}),k=i(()=>[{key:"phase",value:e.item.phase},{key:"close",value:e.item.close},{key:"heavy",value:e.item.heavy},{key:"short",value:e.item.short,icon:"range"},{key:"medium",value:e.item.medium,icon:"range"},{key:"long",value:e.item.long,icon:"range"},{key:"throw",value:e.item.throw},{key:"grenade",value:e.item.grenade},{key:"armour",value:e.item.armour,icon:"physical_armour"},{key:"blue-armour",value:e.item.blue_armour},{key:"blue-armour-regen",value:e.item.blue_armour_regen},{key:"shield",value:e.item.shield,icon:"shield_armour"},{key:"dyson",value:e.item.dyson},{key:"move",value:e.item.move},{key:"scramble",value:e.item.scramble},{key:"stim-heal",value:e.item.heal},{key:"stim-heal-plus",value:e.item.super_heal},{key:"stim-skill",value:e.item.skill},{key:"stim-skill-plus",value:e.item.super_skill},{key:"stim-combat",value:e.item.action},{key:"freeze",value:e.item.freeze},{key:"explode",value:e.item.explode},{key:"scatter-core",value:e.item.scatter,icon:"scatter"}].filter(h=>h.value!=null));return(t,h)=>(s(),u(v(n.value),{class:b([c.value,"token-details"]),to:{name:"token",params:{slug:t.item.key}},tabindex:"-1"},{default:$(()=>[y("figure",{class:b([m.value,"token"])},null,2),y("header",j,[y("h3",null,d(t.item.name),1),t.active?(s(),a("dl",F,[t.item.buy?(s(),a("dt",J,d(t.$t("buy"))+":",1)):l("",!0),t.item.buy?(s(),a("dd",S,d(t.item.buy),1)):l("",!0),t.item.sell?(s(),a("dt",W,d(t.$t("sell"))+":",1)):l("",!0),t.item.sell?(s(),a("dd",Z,d(t.item.sell),1)):l("",!0),t.item.range?(s(),a("dt",U,d(t.$t("range"))+":",1)):l("",!0),t.item.range?(s(),a("dd",q,d(t.$t(t.item.range)),1)):l("",!0)])):l("",!0)]),t.active?(s(),a("section",G,[t.item.description?(s(),a("ul",K,[(s(!0),a(g,null,_(t.item.description,r=>(s(),u(z,{key:r,attribute:r,tag:"li"},null,8,["attribute"]))),128))])):l("",!0),k.value.length>0||t.item.icons?(s(),a("ul",O,[(s(!0),a(g,null,_(k.value,r=>(s(),u(L,{key:r.key,icon:r.icon??r.key,legend:r.key,mustache:r.value,tag:"li"},null,8,["icon","legend","mustache"]))),128)),(s(!0),a(g,null,_(t.item.icons,r=>(s(),u(L,{key:r,icon:r,tag:"li"},null,8,["icon"]))),128))])):l("",!0),t.item.crystals?(s(),a("ul",P,[t.item.crystals?(s(),u(V,{key:0,buy:t.item.buy,crystals:t.item.crystals,name:t.item.name,sell:t.item.sell,tag:"li"},null,8,["buy","crystals","name","sell"])):l("",!0)])):l("",!0)])):l("",!0)]),_:1},8,["class","to"]))}}),X=f(Q,[["__scopeId","data-v-15a32a5a"]]);export{X as T};

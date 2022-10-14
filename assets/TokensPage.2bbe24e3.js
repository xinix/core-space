import{d as k,c as y,o as s,a as h,r as T,u as l,b as C,w as $,e as o,f as L,g as u,t as _,n as f,h as m,_ as x,i as I,F as g,j as v,k as q,l as A,m as M,T as B}from"./main.38a7fb79.js";const H=k({__name:"AttributIcon",props:{attribute:null},setup(t){const e=t,a=y(()=>`${e.attribute.replace("_","-")}-icon`);return(d,c)=>(s(),h(T(l(a))))}}),D=["innerHTML"],J=k({__name:"IconLegend",props:{icon:null,tag:{default:"div"},mustache:{default:null},legend:{default:""}},setup(t){const e=t,{t:a}=C(),d=y(()=>e.mustache!=null&&!Array.isArray(e.mustache)),c=y(()=>{const i={};return i[e.icon]=!0,i}),r=y(()=>{const i=e.legend===""?e.icon:e.legend;return e.mustache!=null?a(i,Array.isArray(e.mustache)?e.mustache:[e.mustache]):a(i)});return(i,n)=>(s(),h(T(t.tag),{class:"icon-description"},{default:$(()=>[o("figure",null,[L(H,{attribute:t.icon},null,8,["attribute"]),l(d)?(s(),u("span",{key:0,class:f([l(c),"number"])},_(t.mustache),3)):m("",!0)]),o("span",{innerHTML:l(r)},null,8,D)]),_:1}))}});const w=x(J,[["__scopeId","data-v-237f1402"]]),N=k({__name:"JustText",props:{attribute:null,tag:{default:"p"},mustache:{default:null}},setup(t){const e=t,{t:a}=C(),d=y(()=>e.mustache!=null?a(e.attribute,Array.isArray(e.mustache)?e.mustache:[e.mustache]):a(e.attribute));return(c,r)=>(s(),h(T(t.tag),{class:"attribute",innerHTML:l(d)},null,8,["innerHTML"]))}});const S=x(N,[["__scopeId","data-v-6c724132"]]),V={class:"title"},z={key:0,class:"dl"},E={key:0},F={key:1},P={key:2},j={key:3},G={key:0,class:"more"},R={key:0,class:"list"},K={class:"list"},O=k({__name:"TokenDetails",props:{item:null,active:{type:Boolean}},setup(t){const e=t,a=y(()=>{const c={};return c[e.item.product]=!0,c[e.item.size]=!0,c[e.item.slug]=!0,c}),d=y(()=>[{key:"phase",value:e.item.phase},{key:"close",value:e.item.close},{key:"heavy",value:e.item.heavy},{key:"short",value:e.item.short,icon:"range"},{key:"medium",value:e.item.medium,icon:"range"},{key:"long",value:e.item.long,icon:"range"},{key:"throw",value:e.item.throw},{key:"grenade",value:e.item.grenade},{key:"armour",value:e.item.armour,icon:"physical_armour"},{key:"shield",value:e.item.shield,icon:"shield_armour"},{key:"dyson",value:e.item.dyson}].filter(r=>r.value!=null));return(c,r)=>{const i=I("router-link");return s(),h(i,{class:f([{active:t.active},"token-details"]),to:`/item/${t.item.slug}`,tabindex:"-1"},{default:$(()=>[o("figure",{class:f([l(a),"token"])},null,2),o("header",V,[o("h3",null,_(t.item.name),1),t.active?(s(),u("dl",z,[t.item.buy?(s(),u("dt",E,_(c.$t("buy"))+":",1)):m("",!0),t.item.buy?(s(),u("dd",F,_(t.item.buy),1)):m("",!0),t.item.sell?(s(),u("dt",P,_(c.$t("sell"))+":",1)):m("",!0),t.item.sell?(s(),u("dd",j,_(t.item.sell),1)):m("",!0)])):m("",!0)]),t.active?(s(),u("section",G,[t.item.description?(s(),u("ul",R,[(s(!0),u(g,null,v(t.item.description,n=>(s(),h(S,{key:n,attribute:n,tag:"li"},null,8,["attribute"]))),128))])):m("",!0),o("ul",K,[(s(!0),u(g,null,v(l(d),n=>{var b;return s(),h(w,{key:n.key,icon:(b=n.icon)!=null?b:n.key,legend:n.key,mustache:n.value,tag:"li"},null,8,["icon","legend","mustache"])}),128)),(s(!0),u(g,null,v(t.item.icons,n=>(s(),h(w,{key:n,icon:n,tag:"li"},null,8,["icon"]))),128))])])):m("",!0)]),_:1},8,["class","to"])}}});const Q=x(O,[["__scopeId","data-v-54fb443b"]]),U={class:"container"},W={key:0,class:"summary with-back"},X=o("span",{class:"material-symbols-rounded icon"},"arrow_back",-1),Y={key:1,class:"summary"},Z=["innerHTML"],te=k({__name:"TokensPage",props:{slug:{default:""},q:{default:""}},setup(t){const e=t,a=q();A(()=>{a.transfer({q:e.q,slug:e.slug})});const d=y(()=>`Search results for: <strong>${a.q}</strong>`),c=n=>(r.push("/"),n),r=M(),i=n=>(window.history.length>2?r.back():r.push("/"),n);return(n,b)=>(s(),u("section",U,[t.slug?(s(),u("p",W,[o("button",{class:"btn",type:"button",onClick:i},[X,o("span",null,_(n.$t("back")),1)])])):l(a).q?(s(),u("p",Y,[o("span",{innerHTML:l(d)},null,8,Z),o("button",{class:"btn-link",type:"button",onClick:c},_(n.$t("clear_filter")),1)])):m("",!0),L(B,{class:f([{"with-q":l(a).q!==""},"tokens"]),name:"list",tag:"div"},{default:$(()=>[(s(!0),u(g,null,v(l(a).items,p=>(s(),h(Q,{key:p.slug,active:p.slug===t.slug,item:p,class:"item"},null,8,["active","item"]))),128))]),_:1},8,["class"])]))}});export{te as default};
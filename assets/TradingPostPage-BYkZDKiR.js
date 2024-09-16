import{d as h,o as s,c as a,n as b,_ as $,g as S,k as p,p as M,a as n,F as I,r as E,e as g,t as c,b as k,h as T,E as L,u as N,f as P,G as z}from"./main-BlFvgC6Q.js";import{u as D,B as V}from"./core-space-tokens-BipMSmF2.js";const w=h({__name:"StockDot",props:{count:{},sold:{default:0}},setup(v){return(r,t)=>(s(),a("span",{class:b([{off:r.sold>=r.count},"stock"])},null,2))}}),F=$(w,[["__scopeId","data-v-cb3c5c74"]]),H={class:"stock"},K={class:"name"},A={key:0,class:"price"},G={class:"overlay"},U=h({__name:"MarketItem",props:{item:{},active:{type:Boolean}},emits:["activate"],setup(v,{emit:r}){const t=v,i=r,d=S(),_=e=>(i("activate",t.item.key),e),y=e=>(e.cancelBubble=!0,d.buy(t.item),i("activate"),e),f=e=>(e.cancelBubble=!0,d.sell(t.item),i("activate"),e),u=p(()=>{const e={},B=M[t.item.size];return e[t.item.product]=!0,e[B]=!0,e[t.item.slug]=!0,e}),o=p(()=>{let e=!1;return t.item.sold!=null&&(e=t.item.sold>=t.item.count),{soldout:e,active:t.active}}),l=p(()=>t.item.sold!=null&&t.item.sold<t.item.count),m=p(()=>!0);return(e,B)=>(s(),a("div",{class:b([o.value,"market-item"]),tabindex:"-1",onClick:_},[n("figure",{class:b([u.value,"token"])},null,2),n("div",H,[(s(!0),a(I,null,E(e.item.count,C=>(s(),g(F,{key:C,count:C,sold:e.item.sold},null,8,["count","sold"]))),128))]),n("h3",K,c(e.item.name),1),e.item.color!=="teal"?(s(),a("span",A,c(e.item.buy)+" → "+c(e.item.sell),1)):k("",!0),n("div",G,[l.value?(s(),a("button",{key:0,class:"btn",type:"button",onClick:y},c(e.$t("buy")),1)):k("",!0),m.value?(s(),a("button",{key:1,class:"btn",type:"button",onClick:f},c(e.$t("sell")),1)):k("",!0)])],2))}}),Z=$(U,[["__scopeId","data-v-41684333"]]),j={class:"details"},q=["innerHTML"],J={key:1,class:"empty"},O={key:2,class:"tokens"},Q=h({__name:"TradingPostPage",props:{slug:{}},setup(v){const r=o=>(_(),o),t=v,i=S(),d=T(""),_=(o="")=>{d.value=o};L(()=>{i.visit(t.slug)});const y=p(()=>`${t.slug}-info`),{loading:f}=D(),u=T();return u.value=i.market,(o,l)=>(s(),a("div",{class:"container",tabindex:"-1",onKeyup:z(r,["esc"])},[n("main",j,[n("header",null,[n("h1",null,c(o.$t(o.slug)),1),n("p",{class:"lead",innerHTML:o.$t(y.value)},null,8,q)]),N(f)?(s(),g(V,{key:0})):u.value&&u.value.length===0?(s(),a("p",J,[l[0]||(l[0]=n("em",null,"🥹",-1)),l[1]||(l[1]=n("br",null,null,-1)),l[2]||(l[2]=n("br",null,null,-1)),P(" "+c(o.$t("no_result")),1)])):k("",!0),u.value!==void 0?(s(),a("div",O,[(s(!0),a(I,null,E(u.value,m=>(s(),g(Z,{key:m.key,active:d.value===m.key,item:m,class:"item",onActivate:_},null,8,["active","item"]))),128))])):k("",!0)])],32))}}),X=$(Q,[["__scopeId","data-v-74f25174"]]);export{X as default};

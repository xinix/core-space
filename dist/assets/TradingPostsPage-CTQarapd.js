import{d,s as g,k as p,D as m,o,c as r,a as e,t as a,F as _,r as f,e as k,i as v,n as h,_ as P}from"./main-BAfX5vwi.js";const T={class:"container"},w={class:"box"},L=["innerHTML"],$=["innerHTML"],b=d({__name:"TradingPostsPage",setup(B){const l=g(),i=["bs-mart","ucp","claw-store","armourote","tech-noir","giger","workshop"],u=p(()=>i.filter(s=>s==="workshop"?l.active.indexOf("rogue")>=0:!0).map(s=>({slug:s,info:`${s}-info`})));return(s,t)=>{const c=m("router-link");return o(),r("div",T,[t[1]||(t[1]=e("div",{class:"bg-image"},null,-1)),e("div",w,[e("header",null,[e("h1",null,a(s.$t("trading-posts")),1),e("p",{innerHTML:s.$t("welcome-trader")},null,8,L)]),e("nav",null,[(o(!0),r(_,null,f(u.value,n=>(o(),k(c,{key:n.slug,class:h([n.slug,"post"]),to:{name:"trading-post",params:{slug:n.slug}}},{default:v(()=>[t[0]||(t[0]=e("figure",null,null,-1)),e("strong",null,a(s.$t(n.slug)),1),e("small",{innerHTML:s.$t(n.info)},null,8,$)]),_:2},1032,["class","to"]))),128))])])])}}}),H=P(b,[["__scopeId","data-v-67c6f83b"]]);export{H as default};
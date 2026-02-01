import{a as M,S as O,i as a}from"./assets/vendor-CbCxaUmV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function L(o,t){return(await M.get("https://pixabay.com/api/",{params:{key:"54467398-e3fbb77cd6756a94fed6b64f1",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const v=document.querySelector(".gallery"),x=new O(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),b=document.querySelector(".loader"),w=document.querySelector(".load-more-btn");function S(o){const t=[];o.forEach(r=>{const{webformatURL:n,largeImageURL:e,tags:s,likes:c,views:P,comments:B,downloads:$}=r,f=document.createElement("li"),l=document.createElement("a"),d=document.createElement("img"),m=document.createElement("div");m.classList.add("info"),m.innerHTML=`
  <div class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${c}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${P}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${B}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${$}</span>
  </div>
`,f.classList.add("gallery-item"),l.classList.add("gallery-link"),l.setAttribute("href",`${e}`),d.classList.add("gallery-image"),d.setAttribute("src",`${n}`),d.setAttribute("alt",`${s}`),l.append(d),f.append(l,m),t.push(f)}),v.append(...t),x.refresh()}function A(){v.innerHTML=""}function E(){b.classList.remove("is-hidden")}function q(){b.classList.add("is-hidden")}function u(){w.classList.add("is-hidden")}function h(){w.classList.remove("is-hidden")}function H(){const o=document.querySelector(".gallery-item");if(!o)return;const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}const p=document.querySelector(".form"),D=document.querySelector(".load-more-btn");let g="",i=1,y=0;const R=15;p.addEventListener("submit",async o=>{o.preventDefault();const t=p.elements["search-text"].value.trim();if(t===""){a.error({message:"The field is empty",position:"topRight"});return}g=t,i=1,A(),E(),u();try{const r=await L(g,i);y=r.totalHits;const n=r.hits;if(n.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(p.reset(),S(n),i+=1,(i-1)*R>=y){u(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}h()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{q()}});D.addEventListener("click",async()=>{u(),E();try{const t=(await L(g,i)).hits;if(S(t),H(),i+=1,(i-1)*R>=y){u(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}h()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"}),h()}finally{q()}});
//# sourceMappingURL=index.js.map

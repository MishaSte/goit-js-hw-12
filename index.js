import{a as L,S as v,i as u}from"./assets/vendor-BpmbF6Fh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function b(n){return L.get("https://pixabay.com/api/",{params:{key:"54467398-e3fbb77cd6756a94fed6b64f1",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const m=document.querySelector(".gallery"),w=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),p=document.querySelector(".loader");function E(n){const s=[];n.forEach(a=>{const{webformatURL:i,largeImageURL:e,tags:t,likes:r,views:g,comments:h,downloads:y}=a,c=document.createElement("li"),o=document.createElement("a"),l=document.createElement("img"),d=document.createElement("div");d.classList.add("info"),d.innerHTML=`
  <div class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${r}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${g}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${h}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${y}</span>
  </div>
`,c.classList.add("gallery-item"),o.classList.add("gallery-link"),o.setAttribute("href",`${e}`),l.classList.add("gallery-image"),l.setAttribute("src",`${i}`),l.setAttribute("alt",`${t}`),o.append(l),c.append(o,d),s.push(c)}),m.append(...s),w.refresh()}function S(){m.innerHTML=""}function q(){p.classList.remove("is-hidden")}function $(){p.classList.add("is-hidden")}const f=document.querySelector(".form");f.addEventListener("submit",n=>{n.preventDefault();const s=f.elements["search-text"].value;if(s.trim()===""){u.error({message:"The field is empty",position:"topRight"});return}S(),q(),b(s).then(a=>{const i=a.hits;if(i.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f.reset(),E(i)}).catch(()=>{u.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{$()})});
//# sourceMappingURL=index.js.map

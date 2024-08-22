import{a as p,S as m,i as l}from"./assets/vendor-d93b82f1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const u=t=>`
  <li class="gallery-card">
  <div class="container-el">
  <div class="container-img">
    <a href="${t.largeImageURL}"><img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" /></a>
  </div>  <div class="container-text">
      <p class="text-name">Likes <span class="span-numbers">${t.likes}</span></p>
      <p class="text-name">Views <span class="span-numbers">${t.views}</span></p>
      <p class="text-name">Comments <span class="span-numbers">${t.comments}</span></p>
      <p class="text-name">Downloads <span class="span-numbers">${t.downloads}</span></p>
    </div>
  </div>
</li>
  `;p.defaults.baseURL="https://pixabay.com";const f=async t=>{const r={params:{key:"45423395-a55c580a59309a3b931c40bb9",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}};return p.get("/api/",r)},n=document.querySelector(".js-form"),d=document.querySelector(".list-photo"),c=document.querySelector(".js-loader"),y=async t=>{try{t.preventDefault();const r=n.elements.img.value.trim();if(r===""){l.error({message:"Please enter a search term."});return}n.reset(),c.classList.remove("is-hidden");const a=await f(r);if(a.data.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),d.innerHTML="",n.reset();return}const o=a.data.hits.map(e=>u(e)).join("");d.innerHTML=o,h.refresh(),c.classList.add("is-hidden")}catch(r){console.log(r)}finally{c.classList.add("is-hidden")}};n.addEventListener("submit",y);const h=new m(".container-img a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),g=document.querySelector(".js-btn-load-more");g.addEventListener("click",()=>{});
//# sourceMappingURL=commonHelpers.js.map

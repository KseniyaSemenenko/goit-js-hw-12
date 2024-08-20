import{S as u,i as c}from"./assets/vendor-f33cd494.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const m=s=>`
  <li class="gallery-card">
  <div class="container-el">
  <div class="container-img">
    <a href="${s.largeImageURL}"><img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}" /></a>
  </div>  <div class="container-text">
      <p class="text-name">Likes <span class="span-numbers">${s.likes}</span></p>
      <p class="text-name">Views <span class="span-numbers">${s.views}</span></p>
      <p class="text-name">Comments <span class="span-numbers">${s.comments}</span></p>
      <p class="text-name">Downloads <span class="span-numbers">${s.downloads}</span></p>
    </div>
  </div>
</li>
  `,p="https://pixabay.com",d=s=>{const r=new URLSearchParams({key:"45423395-a55c580a59309a3b931c40bb9",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}/api/?${r}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})},o=document.querySelector(".js-form"),l=document.querySelector(".list-photo");function f(s){s.preventDefault();const r=o.elements.img.value.trim();if(r===""){c.error({message:"Please enter a search term."});return}o.reset();const a=document.querySelector(".js-loader");a.classList.remove("is-hidden"),d(r).then(n=>{if(n.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML="",o.reset();return}const e=n.hits.map(t=>m(t)).join("");l.innerHTML=e,h.refresh()}).catch(n=>{console.log(n)}).finally(()=>{a.classList.add("is-hidden")})}o.addEventListener("submit",f);const h=new u(".container-img a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),y=document.querySelector(".js-btn-load-more");y.addEventListener("click",()=>{});
//# sourceMappingURL=commonHelpers.js.map

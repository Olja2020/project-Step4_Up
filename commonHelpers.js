import{A as u,S as a,K as f,M as m}from"./assets/vendor-76166b21.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const p=document.querySelector(".accordeon-list");new u(p,{duration:600,showMultiple:!0,openOnInit:[0]});const y=document.querySelectorAll(".accordeon-title");y.forEach(t=>{t.addEventListener("click",function(){const r=t.querySelector(".title-icon"),i=t.nextElementSibling;console.log(i),r.classList.toggle("is-active"),i.classList.toggle("visually-hidden")})});const w=document.querySelector(".swiper-next"),l=new a(".about-me-skills",{modules:[f,m],speed:800,loop:!0,slidesPerView:2,slideActiveClass:"swiper-content-wrap-active",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},slideToClickedSlide:!0});w.addEventListener("click",()=>{l.slideNext()});document.addEventListener("keydown",function(t){t.preventDefault(),t.key==="Tab"?l.slideNext():l.slidePrev()});const s=document.querySelector(".modal-window"),g=document.querySelector(".modal-close");function L(){return s.classList.remove("is-open")}g.addEventListener("click",L);document.addEventListener("keydown",t=>{if(t.key==="Escape")return s.classList.remove("is-open")});s.addEventListener("click",t=>{const r=t.target;if(console.log(r),r===s)return s.classList.remove("is-open")});const v=document.querySelectorAll(".faq-card");v.forEach(t=>t.addEventListener("click",()=>{t.classList.toggle("active")}));let S=document.querySelector(":root"),n=document.querySelector("button");n.addEventListener("click",()=>{S.classList.toggle("light-theme"),console.log(n.textContent),n.textContent==="SUN"?n.textContent="NIGHT":n.textContent="SUN"});
//# sourceMappingURL=commonHelpers.js.map

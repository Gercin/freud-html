(()=>{"use strict";var e,t={845:(e,t,a)=>{var r=1280,n=768,o=window.matchMedia("(min-width: ".concat(r,"px)"));window.matchMedia("(min-width: ".concat(n,"px)"));function i(){var e=document.querySelectorAll("[data-header-btn]"),t=document.querySelectorAll("[data-header-modal]");e.length&&window.addEventListener("click",(function(e){var a=e.target.closest("[data-header-btn]"),r=document.querySelector(".active[data-header-modal]")&&!e.target.closest("[data-header-btn]")&&!e.target.closest("[data-header-modal]");a?function(e){t.forEach((function(e){e.classList.remove("active")}));var a=Number(e.getAttribute("data-header-btn"));document.querySelector("[data-header-modal='".concat(a,"']")).classList.add("active")}(a):r&&t.forEach((function(e){e.classList.remove("active")}))}));var a=document.querySelectorAll(".header__buttons-icon");a.length&&a.forEach((function(e){e.classList.contains("count")?e.hasAttribute("data-fav-btn")?e.setAttribute("data-header-btn","5"):e.hasAttribute("data-cart-btn")&&e.setAttribute("data-header-btn","6"):e.hasAttribute("data-fav-btn")?e.setAttribute("data-header-btn","3"):e.hasAttribute("data-cart-btn")&&e.setAttribute("data-header-btn","4")}))}var s=a(386);const c=function(){var e=document.querySelector(".js-badger-accordion");if(e)new s.Z(e)};const l=function(){var e=document.querySelector("[data-time-mask]");e&&(e.setAttribute("placeholder","Введите время"),e.addEventListener("focusin",(function(){e.setAttribute("placeholder","__:__")})),Maska.create(e,{mask:"hH:mM",tokens:{h:{pattern:/[1-2]/},H:{pattern:/[0-9]/},m:{pattern:/[0-5]/},M:{pattern:/[0-9]/}}}))};var d=a(820),u=a(656);const v=function(){Object.assign(d.Z.locales,u.Z);var e=document.querySelector("[data-datepicker]");e&&new d.Z(e,{format:"dd/mm/yyyy",autohide:!0,language:"ru",orientation:"top",prevArrow:'<svg class="datepicker-arrow" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M6 11L1 6L6 1" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>',nextArrow:'<svg class="datepicker-arrow next" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M6 11L1 6L6 1" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>'})};function f(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(s)throw o}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}const m=function(){var e,t=document.querySelectorAll('input[type="tel"]'),a=function(e){return e.value.replace(/\D/g,"")},r=function(e){var t=e.target,r=a(t),n=e.clipboardData||window.clipboardData;if(n){var o=n.getData("Text");if(/\D/g.test(o))return void(t.value=r)}},n=function(e){var t=e.target,r=a(t),n=t.selectionStart,o="";if(!r)return t.value="";if(t.value.length==n){if(["7","8","9"].indexOf(r[0])>-1){"9"==r[0]&&(r="7"+r);var i="8"==r[0]?"8":"+7";o=t.value=i+" ",r.length>1&&(o+="("+r.substring(1,4)),r.length>=5&&(o+=") "+r.substring(4,7)),r.length>=8&&(o+="-"+r.substring(7,9)),r.length>=10&&(o+="-"+r.substring(9,11))}else o="+"+r.substring(0,16);if(/^\+0+/g.test(o)){var s=o.replace(/^\+0+/g,"");s.length>0?t.value="+".concat(s):t.value=""}else t.value=o.replace(/^\+0+/g,"")}else e.data&&/\D/g.test(e.data)&&(t.value=r)},o=function(e){var t=e.target.value.replace(/\D/g,"");8==e.keyCode&&1==t.length&&(e.target.value="")},i=f(t);try{for(i.s();!(e=i.n()).done;){var s=e.value;s.addEventListener("keydown",o),s.addEventListener("input",n,!1),s.addEventListener("paste",r,!1)}}catch(e){i.e(e)}finally{i.f()}};const h=function(){var e=document.querySelectorAll("[data-select-context]");e.length&&e.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.closest("[data-select-context]"),a=e.target.closest("[data-select-input]"),r=e.target.closest("[data-select]"),n=e.target.closest("[data-select-option]"),o=t.querySelector(".select-label.active")&&e.target.closest("[data-select-context]")&&!e.target.closest("[data-select]");a?function(e){var t=document.querySelectorAll("[data-select-label]"),a=e.closest("[data-select-label]");a.classList.contains("active")?a.classList.remove("active"):(t.forEach((function(e){e.classList.remove("active")})),a.classList.add("active"))}(a):r?n&&function(e){var t=e.closest(".select-label.active");t.querySelector("input").value=e.getAttribute("data-select-option"),t.classList.remove("active")}(n):o&&t.querySelector(".select-label.active").classList.remove("active")}))}))};const g=function(){var e=document.querySelectorAll("form");e&&e.forEach((function(e){e.querySelectorAll("input").forEach((function(t){var a;function r(){t.validity.valueMissing?a.textContent="Обязательное поле":t.validity.typeMismatch&&(a.textContent="Введено некорректно"),a.className="form-error active"}t.hasAttribute("data-input-novalidate")||(t.insertAdjacentHTML("afterend","<span class='form-error'></>"),a=t.nextElementSibling,t.addEventListener("focusout",(function(e){t.validity.valid?(a.textContent="",a.className="form-error"):r()}))),e.addEventListener("submit",(function(e){t.validity.valid||(r(),e.preventDefault())}))}))}))};var w=a(6);const b=function(){new w.ZP("#restaurant-slider",{modules:[w.W_,w.tl],loop:!0,navigation:{nextEl:"#restaurant-slider-next",prevEl:"#restaurant-slider-prev"},pagination:{el:"#restaurant-slider-pagination"}}),new w.ZP("#reviews-slider",{modules:[w.W_,w.tl],slidesPerView:"auto",spaceBetween:30,navigation:{nextEl:"#reviews-slider-next",prevEl:"#reviews-slider-prev"},pagination:{el:"#reviews-slider-pagination"}}),new w.ZP("#shop-slider",{modules:[w.W_],slidesPerView:"auto",spaceBetween:30,loop:!0,navigation:{nextEl:"#shop-slider-next",prevEl:"#shop-slider-prev"}}),new w.ZP("#categories-slider",{modules:[w.W_],slidesPerView:"auto",spaceBetween:30,loop:!0,navigation:{nextEl:"#categories-slider-next",prevEl:"#categories-slider-prev"}}),new w.ZP("#recommend-slider",{modules:[w.W_,w.tl],slidesPerView:4,spaceBetween:30,loop:!0,navigation:{nextEl:"#recommend-slider-next",prevEl:"#recommend-slider-prev"},pagination:{el:"#recommend-slider-pagination"}}),new w.ZP("#humidor-slider",{modules:[w.Gk],mousewheel:!0,slidesPerView:"auto",spaceBetween:30});var e=new w.ZP("#gallery-slider",{modules:[w.Gk],direction:"vertical",slidesPerView:"auto",mousewheel:!0,slideToClickedSlide:!0});new w.ZP("#product-slider",{modules:[w.o3],thumbs:{swiper:e}})};const y=function(){var e=document.querySelector("[data-tabs]");if(e){var t=document.querySelector("[data-tabs-content]"),a=t.querySelectorAll("[data-content-item]");e.querySelectorAll("[data-tabs-item]").forEach((function(r,n){r.addEventListener("click",(function(){e.querySelector(".active").classList.remove("active"),r.classList.add("active"),t.querySelector(".active").classList.remove("active"),a[n].classList.add("active")}))}))}};const L=function(){var e=document.querySelectorAll("[data-popup-button]"),t=document.querySelectorAll("[data-popup]"),a=document.querySelector(".modals-container");if(e.length){window.addEventListener("click",(function(e){var r=e.target.closest("[data-popup-button]"),n=a.classList.contains("active")&&!e.target.closest("[data-popup]")&&!e.target.closest("[data-popup-button]")&&!e.target.closest(".datepicker-view")||e.target.closest(".modal__close");r?function(e){t.forEach((function(e){e.classList.remove("active")}));var r=Number(e.getAttribute("data-popup-button"));a.classList.add("active"),document.querySelector(".body").classList.add("modal-open"),document.querySelector("[data-popup='".concat(r,"']")).classList.add("active")}(r):n&&(t.forEach((function(e){e.classList.remove("active")})),a.classList.remove("active"),document.querySelector(".body").classList.remove("modal-open"))}))}};document.addEventListener("DOMContentLoaded",(function(){o.matches&&i(),L(),b(),y(),v(),l(),m(),h(),g()})),window.addEventListener("load",(function(){document.querySelector("body").classList.remove("no-transition"),o.matches&&function(){var e=document.querySelector(".header"),t=window.pageYOffset;function a(){var a=window.pageYOffset;Math.abs(t-a)>=1&&(a>t?e.classList.add("header--short"):e.classList.remove("header--short")),t<1&&e.classList.remove("header--short"),t=a}window.addEventListener("scroll",(function e(){a(),setTimeout((function(){a(),window.addEventListener("scroll",e,{once:!0})}),1e3/120)}),{once:!0})}(),c()}))}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,a,n,o)=>{if(!a){var i=1/0;for(d=0;d<e.length;d++){for(var[a,n,o]=e[d],s=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,n,o]},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[i,s,c]=a,l=0;if(i.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var d=c(r)}for(t&&t(a);l<i.length;l++)o=i[l],r.o(e,o)&&e[o]&&e[o][0](),e[i[l]]=0;return r.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=r.O(void 0,[59,532],(()=>r(845)));n=r.O(n)})();
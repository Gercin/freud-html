(()=>{"use strict";var e,t={845:(e,t,r)=>{var a=1280,n=768,o=window.matchMedia("(min-width: ".concat(a,"px)"));window.matchMedia("(min-width: ".concat(n,"px)"));var i=r(386);const s=function(){var e=document.querySelector(".js-badger-accordion");if(e)new i.Z(e)};const c=function(){var e=document.querySelector("[data-time-mask]");e&&(e.setAttribute("placeholder","Введите время"),e.addEventListener("focusin",(function(){e.setAttribute("placeholder","__:__")})),Maska.create(e,{mask:"hH:mM",tokens:{h:{pattern:/[1-2]/},H:{pattern:/[0-9]/},m:{pattern:/[0-5]/},M:{pattern:/[0-9]/}}}))};var l=r(820),d=r(656);const u=function(){Object.assign(l.Z.locales,d.Z);var e=document.querySelector("[data-datepicker]");e&&new l.Z(e,{format:"dd/mm/yyyy",autohide:!0,language:"ru",orientation:"top",prevArrow:'<svg class="datepicker-arrow" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M6 11L1 6L6 1" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>',nextArrow:'<svg class="datepicker-arrow next" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M6 11L1 6L6 1" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>'})};function v(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const f=function(){var e,t=document.querySelectorAll('input[type="tel"]'),r=function(e){return e.value.replace(/\D/g,"")},a=function(e){var t=e.target,a=r(t),n=e.clipboardData||window.clipboardData;if(n){var o=n.getData("Text");if(/\D/g.test(o))return void(t.value=a)}},n=function(e){var t=e.target,a=r(t),n=t.selectionStart,o="";if(!a)return t.value="";if(t.value.length==n){if(["7","8","9"].indexOf(a[0])>-1){"9"==a[0]&&(a="7"+a);var i="8"==a[0]?"8":"+7";o=t.value=i+" ",a.length>1&&(o+="("+a.substring(1,4)),a.length>=5&&(o+=") "+a.substring(4,7)),a.length>=8&&(o+="-"+a.substring(7,9)),a.length>=10&&(o+="-"+a.substring(9,11))}else o="+"+a.substring(0,16);if(/^\+0+/g.test(o)){var s=o.replace(/^\+0+/g,"");s.length>0?t.value="+".concat(s):t.value=""}else t.value=o.replace(/^\+0+/g,"")}else e.data&&/\D/g.test(e.data)&&(t.value=a)},o=function(e){var t=e.target.value.replace(/\D/g,"");8==e.keyCode&&1==t.length&&(e.target.value="")},i=v(t);try{for(i.s();!(e=i.n()).done;){var s=e.value;s.addEventListener("keydown",o),s.addEventListener("input",n,!1),s.addEventListener("paste",a,!1)}}catch(e){i.e(e)}finally{i.f()}};const p=function(){var e=document.querySelectorAll("[data-select-context]");e.length&&e.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.closest("[data-select-context]"),r=e.target.closest("[data-select-input]"),a=e.target.closest("[data-select]"),n=e.target.closest("[data-select-option]"),o=t.querySelector(".select-label.active")&&e.target.closest("[data-select-context]")&&!e.target.closest("[data-select]");r?function(e){var t=document.querySelectorAll("[data-select-label]"),r=e.closest("[data-select-label]");r.classList.contains("active")?r.classList.remove("active"):(t.forEach((function(e){e.classList.remove("active")})),r.classList.add("active"))}(r):a?n&&function(e){var t=e.closest(".select-label.active");t.querySelector("input").value=e.getAttribute("data-select-option"),t.classList.remove("active")}(n):o&&t.querySelector(".select-label.active").classList.remove("active")}))}))};const g=function(){var e=document.querySelectorAll("form");e&&e.forEach((function(e){e.querySelectorAll("input").forEach((function(t){t.insertAdjacentHTML("afterend","<span class='form-error'></>");var r=t.nextElementSibling;function a(){t.validity.valueMissing?r.textContent="Обязательное поле":t.validity.typeMismatch&&(r.textContent="Введено некорректно"),r.className="form-error active"}t.hasAttribute("data-select-input")||t.addEventListener("focusout",(function(e){t.validity.valid?(r.textContent="",r.className="form-error"):a()})),e.addEventListener("submit",(function(e){t.validity.valid||(a(),e.preventDefault())}))}))}))};var h=r(6);const w=function(){new h.ZP("#restaurant-slider",{modules:[h.W_,h.tl],loop:!0,navigation:{nextEl:"#restaurant-slider-next",prevEl:"#restaurant-slider-prev"},pagination:{el:"#restaurant-slider-pagination"}}),new h.ZP("#reviews-slider",{modules:[h.W_,h.tl],slidesPerView:"auto",spaceBetween:30,navigation:{nextEl:"#reviews-slider-next",prevEl:"#reviews-slider-prev"},pagination:{el:"#reviews-slider-pagination"}}),new h.ZP("#shop-slider",{modules:[h.W_],slidesPerView:"auto",spaceBetween:30,loop:!0,navigation:{nextEl:"#shop-slider-next",prevEl:"#shop-slider-prev"}}),new h.ZP("#categories-slider",{modules:[h.W_],slidesPerView:"auto",spaceBetween:30,loop:!0,navigation:{nextEl:"#categories-slider-next",prevEl:"#categories-slider-prev"}}),new h.ZP("#recommend-slider",{modules:[h.W_,h.tl],slidesPerView:4,spaceBetween:30,loop:!0,navigation:{nextEl:"#recommend-slider-next",prevEl:"#recommend-slider-prev"},pagination:{el:"#recommend-slider-pagination"}}),new h.ZP("#humidor-slider",{modules:[h.Gk],mousewheel:!0,slidesPerView:"auto",spaceBetween:30});var e=new h.ZP("#gallery-slider",{modules:[h.Gk],direction:"vertical",slidesPerView:"auto",mousewheel:!0,slideToClickedSlide:!0});new h.ZP("#product-slider",{modules:[h.o3],thumbs:{swiper:e}})};const y=function(){var e=document.querySelector("[data-tabs]");if(e){var t=document.querySelector("[data-tabs-content]"),r=t.querySelectorAll("[data-content-item]");e.querySelectorAll("[data-tabs-item]").forEach((function(a,n){a.addEventListener("click",(function(){e.querySelector(".active").classList.remove("active"),a.classList.add("active"),t.querySelector(".active").classList.remove("active"),r[n].classList.add("active")}))}))}};const b=function(){var e=document.querySelectorAll("[data-popup-button]"),t=document.querySelector(".modals-container");e.length&&(e.forEach((function(e){e.addEventListener("click",(function(r){var a=Number(e.getAttribute("data-popup-button"));t.classList.add("active"),document.querySelector(".body").classList.add("modal-open"),document.querySelector("[data-popup='".concat(a,"']")).classList.add("active")}))})),document.addEventListener("click",(function(e){(t.classList.contains("active")&&!e.target.closest(".modal")&&!e.target.closest("[data-popup-button]")&&!e.target.closest(".datepicker-view")||e.target.closest(".modal__close"))&&(t.classList.remove("active"),document.querySelector(".body").classList.remove("modal-open"),t.querySelector(".active").classList.remove("active"))})))};document.addEventListener("DOMContentLoaded",(function(){o.matches&&(document.querySelectorAll("[data-header-btn]").forEach((function(e){e.addEventListener("click",(function(){var t=Number(e.getAttribute("data-header-btn"));document.querySelector(".header-modals__item.active")&&document.querySelector(".header-modals__item.active").classList.remove("active"),document.querySelector("[data-header-modal='".concat(t,"']")).classList.add("active")}))})),window.addEventListener("click",(function(e){e.target.closest(".header__item")||e.target.closest("[data-header-btn]")||!document.querySelector(".header-modals__item.active")||document.querySelector(".header-modals__item.active").classList.remove("active")}))),b(),w(),y(),u(),c(),f(),p(),g()})),window.addEventListener("load",(function(){document.querySelector("body").classList.remove("no-transition"),o.matches&&function(){var e=document.querySelector(".header"),t=window.pageYOffset;function r(){var r=window.pageYOffset;Math.abs(t-r)>=1&&(r>t?e.classList.add("header--short"):e.classList.remove("header--short")),t<1&&e.classList.remove("header--short"),t=r}window.addEventListener("scroll",(function e(){r(),setTimeout((function(){r(),window.addEventListener("scroll",e,{once:!0})}),1e3/120)}),{once:!0})}(),s()}))}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,n,o]=e[d],s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[i,s,c]=r,l=0;if(i.some((t=>0!==e[t]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(c)var d=c(a)}for(t&&t(r);l<i.length;l++)o=i[l],a.o(e,o)&&e[o]&&e[o][0](),e[i[l]]=0;return a.O(d)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=a.O(void 0,[59,532],(()=>a(845)));n=a.O(n)})();
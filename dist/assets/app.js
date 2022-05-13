(()=>{"use strict";var e,t={854:(e,t,r)=>{var a=1280,n=768,o=window.matchMedia("(min-width: ".concat(a,"px)"));window.matchMedia("(min-width: ".concat(n,"px)"));function c(e,t,r,a,n,o,c){o&&document.querySelector(".body").classList.add("modal-open"),c&&c.classList.add("active"),t.forEach((function(e){e.classList.remove("active")})),r.forEach((function(e){e.classList.remove("active")}));var i,l=Number(e.getAttribute(a)),s=document.querySelector("[".concat(n,"='").concat(l,"']"));e.classList.add("active"),s.classList.add("active"),s.querySelector("[data-focus-input]")&&s.querySelector("[data-focus-input]").focus(),(i=s).querySelectorAll("input").forEach((function(e){e.setAttribute("tabindex","0")})),i.querySelectorAll("button").forEach((function(e){e.setAttribute("tabindex","0")})),i.querySelectorAll("a").forEach((function(e){e.setAttribute("tabindex","0")}))}function i(e,t,r,a){r&&document.querySelector(".body").classList.remove("modal-open"),a&&a.classList.remove("active"),e.forEach((function(e){e.classList.remove("active")})),t.forEach((function(e){e.classList.remove("active")})),t.forEach((function(e){e.querySelectorAll("input").forEach((function(e){e.setAttribute("tabindex","-1")})),e.querySelectorAll("button").forEach((function(e){e.setAttribute("tabindex","-1")})),e.querySelectorAll("a").forEach((function(e){e.setAttribute("tabindex","-1")}))}))}const l=function(){var e=document.querySelector("[data-time-mask]");e&&(e.setAttribute("placeholder","Введите время"),e.addEventListener("focusin",(function(){e.setAttribute("placeholder","__:__")})),Maska.create(e,{mask:"hH:mM",tokens:{h:{pattern:/[1-2]/},H:{pattern:/[0-9]/},m:{pattern:/[0-5]/},M:{pattern:/[0-9]/}}}))};var s=r(820),u=r(656);const d=function(){Object.assign(s.Z.locales,u.Z);var e=document.querySelector("[data-datepicker]");if(e){var t=new Date,r=t.toLocaleDateString("en-GB").replace(/\D/g,"/"),a="31/12/"+String(t.getFullYear()+1);new s.Z(e,{format:"dd/mm/yyyy",autohide:!0,language:"ru",orientation:"top",maxView:2,minDate:r,maxDate:a,prevArrow:'<svg class="datepicker-arrow" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M6 11L1 6L6 1" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>',nextArrow:'<svg class="datepicker-arrow next" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M6 11L1 6L6 1" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>'})}};function v(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const m=function(){var e,t=document.querySelectorAll('input[type="tel"]'),r=function(e){return e.value.replace(/\D/g,"")},a=function(e){var t=e.target,a=r(t),n=e.clipboardData||window.clipboardData;if(n){var o=n.getData("Text");if(/\D/g.test(o))return void(t.value=a)}},n=function(e){var t=e.target,a=r(t),n=t.selectionStart,o="";if(!a)return t.value="";if(t.value.length==n){if(["7","8","9"].indexOf(a[0])>-1){"9"==a[0]&&(a="7"+a);var c="8"==a[0]?"8":"+7";o=t.value=c+" ",a.length>1&&(o+="("+a.substring(1,4)),a.length>=5&&(o+=") "+a.substring(4,7)),a.length>=8&&(o+="-"+a.substring(7,9)),a.length>=10&&(o+="-"+a.substring(9,11))}else o="+"+a.substring(0,16);if(/^\+0+/g.test(o)){var i=o.replace(/^\+0+/g,"");i.length>0?t.value="+".concat(i):t.value=""}else t.value=o.replace(/^\+0+/g,"")}else e.data&&/\D/g.test(e.data)&&(t.value=a)},o=function(e){var t=e.target.value.replace(/\D/g,"");8==e.keyCode&&1==t.length&&(e.target.value="")},c=v(t);try{for(c.s();!(e=c.n()).done;){var i=e.value;i.addEventListener("keydown",o),i.addEventListener("input",n,!1),i.addEventListener("paste",a,!1)}}catch(e){c.e(e)}finally{c.f()}};const g=function(){var e=document.querySelectorAll("[data-select-context]");e.length&&e.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.closest("[data-select-context]"),r=e.target.closest("[data-select-input]"),a=e.target.closest("[data-select]"),n=e.target.closest("[data-select-option]"),o=t.querySelector(".select-label.active")&&e.target.closest("[data-select-context]")&&!e.target.closest("[data-select]");r?function(e){var t=document.querySelectorAll("[data-select-label]"),r=e.closest("[data-select-label]");r.classList.contains("active")?r.classList.remove("active"):(t.forEach((function(e){e.classList.remove("active")})),r.classList.add("active"))}(r):a?n&&function(e){var t=e.closest(".select-label.active");t.querySelector("input").value=e.getAttribute("data-select-option"),t.classList.remove("active")}(n):o&&t.querySelector(".select-label.active").classList.remove("active")}))}))};const p=function(){var e=document.querySelectorAll("form");e&&e.forEach((function(e){e.querySelectorAll("input").forEach((function(t){var r;function a(){t.validity.valueMissing?r.textContent="Обязательное поле":t.validity.typeMismatch&&(r.textContent="Введено некорректно"),r.className="form-error active"}t.hasAttribute("data-input-novalidate")||(t.insertAdjacentHTML("afterend","<span class='form-error'></>"),r=t.nextElementSibling,t.addEventListener("focusout",(function(e){t.validity.valid?(r.textContent="",r.className="form-error"):a()}))),e.addEventListener("submit",(function(e){t.validity.valid||(a(),e.preventDefault())}))}))}))};var h=r(6);const y=function(){new h.ZP("#restaurant-slider",{modules:[h.W_,h.tl],loop:!0,navigation:{nextEl:"#restaurant-slider-next",prevEl:"#restaurant-slider-prev"},pagination:{el:"#restaurant-slider-pagination"}}),new h.ZP("#reviews-slider",{modules:[h.W_,h.tl],slidesPerView:"auto",spaceBetween:30,navigation:{nextEl:"#reviews-slider-next",prevEl:"#reviews-slider-prev"},pagination:{el:"#reviews-slider-pagination"}}),new h.ZP("#shop-slider",{modules:[h.W_],slidesPerView:"auto",spaceBetween:30,navigation:{nextEl:"#shop-slider-next",prevEl:"#shop-slider-prev"}}),new h.ZP("#categories-slider",{modules:[h.W_],slidesPerView:3,spaceBetween:30,loop:!0,navigation:{nextEl:"#categories-slider-next",prevEl:"#categories-slider-prev"}}),new h.ZP("#recommend-slider",{modules:[h.W_,h.tl],slidesPerView:3,spaceBetween:30,loop:!0,navigation:{nextEl:"#recommend-slider-next",prevEl:"#recommend-slider-prev"},pagination:{el:"#recommend-slider-pagination"}}),new h.ZP("#humidor-slider",{modules:[h.Gk],mousewheel:!0,slidesPerView:"auto",spaceBetween:30});var e=new h.ZP("#gallery-slider",{modules:[h.Gk],direction:"vertical",slidesPerView:"auto",mousewheel:!0,slideToClickedSlide:!0});new h.ZP("#product-slider",{modules:[h.o3],thumbs:{swiper:e}})};var b=r(386);const S=function(){var e=document.querySelectorAll(".js-badger-accordion");Array.from(e).forEach((function(e){new b.Z(e)}))};const q=function(){var e=document.querySelector("[data-tabs]");if(e){var t=document.querySelector("[data-tabs-content]"),r=t.querySelectorAll("[data-content-item]");e.querySelectorAll("[data-tabs-item]").forEach((function(a,n){a.addEventListener("click",(function(){e.querySelector(".active").classList.remove("active"),a.classList.add("active"),t.querySelector(".active").classList.remove("active"),r[n].classList.add("active")}))}))}};const w=function(e,t,r){var a=document.querySelector(".modals-container"),n=document.querySelectorAll("[".concat(t,"]")),o=document.querySelectorAll("[".concat(r,"]"));if(n&&o){var l=e.target.closest("[".concat(t,"]")),s=a.classList.contains("active")&&!e.target.closest("[".concat(r,"]"))&&!e.target.closest("[".concat(t,"]"))&&!e.target.closest(".datepicker-view")||e.target.closest("[data-modal-close]");l?c(l,n,o,t,r,true,a):s&&i(n,o,true,a)}};const L=function(e,t,r,a){var n=document.querySelectorAll("[".concat(t,"]")),o=document.querySelectorAll("[".concat(r,"]")),l=!1;if(n&&o){var s,u=e.target.closest("[".concat(t,"]"));"mouseover"==e.type&&u?(c(u,n,o,t,r,a,l),document.querySelector(".header__top").addEventListener("mouseover",(function(e){e.relatedTarget==document.querySelector(".header__bottom")&&i(n,o,a,l)})),document.addEventListener("click",(function(e){(s=document.querySelector(".active[".concat(r,"]"))&&!e.target.closest("[".concat(t,"]"))&&!e.target.closest("[".concat(r,"]")))&&i(n,o,a,l)}))):"click"==e.type&&(s=document.querySelector(".active[".concat(r,"]"))&&!u&&!e.target.closest("[".concat(r,"]")),u&&!u.classList.contains("active")?c(u,n,o,t,r,a,l):(u&&u.classList.contains("active")||s)&&i(n,o,a,l))}};var A=r(344),E=r.n(A);const x=function(){var e=document.querySelectorAll("#range-slider");e.length&&e.forEach((function(e){var t=Number(e.getAttribute("data-range-min")),r=Number(e.getAttribute("data-range-max")),a=e.closest("#range-slider-container"),n=a.querySelector("#range-from"),o=a.querySelector("#range-to");E().create(e,{start:[t,r],connect:!0,range:{min:t,max:r}}),e.noUiSlider.on("update",(function(e,t){var r=e[t];t?o.value=Math.round(r):n.value=Math.round(r)})),n.addEventListener("change",(function(){e.noUiSlider.set([this.value,null])})),o.addEventListener("change",(function(){e.noUiSlider.set([null,this.value])}))}))};document.addEventListener("DOMContentLoaded",(function(){var e,t;y(),(e=document.querySelectorAll(".header__buttons-icon")).length&&e.forEach((function(e){e.classList.contains("count")?e.hasAttribute("data-fav-btn")?e.setAttribute("data-header-btn","5"):e.hasAttribute("data-cart-btn")&&e.setAttribute("data-header-btn","6"):e.hasAttribute("data-fav-btn")?e.setAttribute("data-header-btn","3"):e.hasAttribute("data-cart-btn")&&e.setAttribute("data-header-btn","4")})),q(),d(),l(),m(),g(),p(),x(),document.querySelector(".sorting-filter")&&document.querySelector(".sorting-filter").addEventListener("change",(function(e){document.querySelector("[data-sort-filter]").innerHTML=e.target.closest(".sorting-filter__label").querySelector(".sorting-filter__txt").innerHTML})),(t=document.querySelector("[data-active-filters]"))&&t.querySelectorAll(".active-filter").length&&window.addEventListener("scroll",(function(){var e=document.querySelector(".active-filters-row"),r=document.querySelector(".header__bottom").offsetHeight;t.getBoundingClientRect().top-20-r<=0?e.classList.add("active"):e.classList.remove("active")})),function(){var e=document.querySelectorAll("[data-header-modal]"),t=document.querySelectorAll("[data-filter-drop]"),r=document.querySelectorAll("[data-popup]");e.forEach((function(e){e.querySelectorAll("a").forEach((function(e){e.setAttribute("tabindex","-1")})),e.querySelectorAll("input").forEach((function(e){e.setAttribute("tabindex","-1")})),e.querySelectorAll("button").forEach((function(e){e.setAttribute("tabindex","-1")}))})),t.forEach((function(e){e.querySelectorAll("a").forEach((function(e){e.setAttribute("tabindex","-1")})),e.querySelectorAll("input").forEach((function(e){e.setAttribute("tabindex","-1")})),e.querySelectorAll("button").forEach((function(e){e.setAttribute("tabindex","-1")}))})),r.forEach((function(e){e.querySelectorAll("input").forEach((function(e){e.setAttribute("tabindex","-1")})),e.querySelectorAll("a").forEach((function(e){e.setAttribute("tabindex","-1")})),e.querySelectorAll("button").forEach((function(e){e.setAttribute("tabindex","-1")}))}))}(),document.addEventListener("keydown",(function(e){"Escape"==e.code&&(document.querySelector(".modals-container.active")?(document.querySelector(".body.modal-open").classList.remove("modal-open"),document.querySelector(".modals-container.active").classList.remove("active"),document.querySelector(".active[data-popup]").classList.remove("active")):document.querySelector(".active[data-filter-drop]")?document.querySelector(".active[data-filter-drop]").classList.remove("active"):document.querySelector(".active[data-header-modal]")&&(document.querySelector(".active[data-header-modal]").classList.remove("active"),document.querySelector(".body.modal-open").classList.remove("modal-open")))})),document.addEventListener("click",(function(e){w(e,"data-popup-button","data-popup"),L(e,"data-filter-btn","data-filter-drop"),function(e){e.target.closest(".catalog-card__fav")&&e.target.closest(".catalog-card__fav").classList.toggle("active")}(e),function(e){e.target.closest(".catalog-card__btn")&&(e.target.closest(".catalog-card.in-cart")?(e.target.closest(".catalog-card").classList.remove("in-cart"),e.target.closest(".catalog-card__btn").innerHTML="Добавить в корзину"):(e.target.closest(".catalog-card").classList.add("in-cart"),e.target.closest(".catalog-card__btn").innerHTML="В корзине",document.querySelector(".body").classList.add("modal-open"),document.querySelector(".modals-container").classList.add("active"),document.querySelector('[data-popup="5"]').classList.add("active")))}(e),function(e){(e.target.closest("[data-filter-drop]")||e.target.closest(".filters-popup"))&&e.target.closest(".category-filter-btn")&&e.target.closest(".category-filter-btn").classList.toggle("active"),e.target.closest(".drinks-filters-item")&&e.target.closest(".drinks-filters-item").classList.toggle("active")}(e),document.querySelectorAll("[data-number-goods]").forEach((function(e){e.addEventListener("click",(function(t){t.stopPropagation();var r=Number(e.querySelector("[data-number-goods-count]").innerHTML);t.target.closest("[data-number-goods-minus]")&&r>0?e.querySelector("[data-number-goods-count]").innerHTML=r-1:t.target.closest("[data-number-goods-plus]")&&(e.querySelector("[data-number-goods-count]").innerHTML=r+1)}))}))})),o.matches&&document.querySelector(".header__bottom-inner").addEventListener("mouseover",(function(e){L(e,"data-header-btn","data-header-modal",!0)}))})),window.addEventListener("load",(function(){document.querySelector("body").classList.remove("no-transition"),o.matches&&function(){var e=document.querySelector(".header"),t=window.pageYOffset;function r(){var r=window.pageYOffset;Math.abs(t-r)>=1&&(r>t?e.classList.add("header--short"):e.classList.remove("header--short")),t<1&&e.classList.remove("header--short"),t=r}window.addEventListener("scroll",(function e(){r(),setTimeout((function(){r(),window.addEventListener("scroll",e,{once:!0})}),1e3/120)}),{once:!0})}(),S()}))}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,r,n,o)=>{if(!r){var c=1/0;for(u=0;u<e.length;u++){for(var[r,n,o]=e[u],i=!0,l=0;l<r.length;l++)(!1&o||c>=o)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(i=!1,o<c&&(c=o));if(i){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[c,i,l]=r,s=0;if(c.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var u=l(a)}for(t&&t(r);s<c.length;s++)o=c[s],a.o(e,o)&&e[o]&&e[o][0](),e[c[s]]=0;return a.O(u)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=a.O(void 0,[809,532],(()=>a(854)));n=a.O(n)})();
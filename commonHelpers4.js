var x=(t,i,e)=>{if(!i.has(t))throw TypeError("Cannot "+e)};var s=(t,i,e)=>(x(t,i,"read from private field"),e?e.call(t):i.get(t)),l=(t,i,e)=>{if(i.has(t))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(t):i.set(t,e)},r=(t,i,e,o)=>(x(t,i,"write to private field"),o?o.call(t,e):i.set(t,e),e);import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{b as y}from"./assets/vendor-c279a850.js";import{K as C}from"./assets/constants-831014a6.js";import{c as k,i as w}from"./assets/gallery-images-d2b92588.js";import{S}from"./assets/slider-12493aa4.js";var n,c,h,a,u,d;class B{constructor(i,e,o){l(this,n,void 0);l(this,c,void 0);l(this,h,void 0);l(this,a,void 0);l(this,u,void 0);l(this,d,void 0);r(this,n,new S(i,1,e.length)),r(this,c,o.element().querySelector("#prev-lightbox-button")),r(this,h,o.element().querySelector("#next-lightbox-button")),r(this,a,o.element().querySelector(".lightbox-image")),r(this,u,o.element().querySelector(".lightbox-counter")),r(this,d,e),this.initBtnsFunction(),this.update()}update(){this.updateContent(),this.updateButtons(),this.updateCounter()}destroy(){s(this,c).removeEventListener("click",this.onPrevBtnClick.bind(this)),s(this,h).removeEventListener("click",this.onNextBtnClick.bind(this))}initBtnsFunction(){s(this,c).addEventListener("click",this.onPrevBtnClick.bind(this)),s(this,h).addEventListener("click",this.onNextBtnClick.bind(this))}updateContent(){const i=s(this,n).currentSlide,e=s(this,d)[i].querySelector("img");s(this,a).src=e.dataset.source,s(this,a).alt=e.alt}updateButtons(){s(this,c).disabled=s(this,n).isExistPrev(),s(this,h).disabled=s(this,n).isExistNext()}updateCounter(){s(this,u).textContent=`${s(this,n).currentSlide+1+"/"+s(this,d).length}`}onPrevBtnClick(){s(this,n).onPrevSlide(),this.update()}onNextBtnClick(){s(this,n).onNextSlide(),this.update()}}n=new WeakMap,c=new WeakMap,h=new WeakMap,a=new WeakMap,u=new WeakMap,d=new WeakMap;const g="/goit-js-homework-09/assets/icons-8ee028ff.svg",p=document.querySelector(".gallery");k(w,p);p.addEventListener("click",E);let b=null;function E(t){const i=t.target;if(!i.classList.contains("gallery-img"))return;t.preventDefault();const o=i.closest(".gallery-item"),m=t.currentTarget.children,f=Array.from(m).indexOf(o);L(m,f)}function L(t,i){b=y.create(q(),{onShow:e=>{document.addEventListener("keydown",v),e.element().querySelector(".lightbox-close").addEventListener("click",e.close),new B(i,t,e)},onClose:e=>{document.removeEventListener("keydown",v)},closable:!0}),b.show()}function v(t){t.code===C&&b.close()}function q(){return`
  <div class="lightbox-modal">
      <p class="lightbox-counter"></p>  
      <button
        class="lightbox-close"
        type="button"
        id="id-lightbox-close"
      >
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${g}#close-form"></use>
        </svg>
      </button>
      <div class="lightbox-slider">

        <button
          class="lightbox-button"
          id="prev-lightbox-button"
          type="button">
          <svg
            class="lightbox-button-icon-prev"
            width="24"
            height="24"
            aria-label="icon arrow left"
          >
            <use href="${g}#icon-chevron-left"></use>
          </svg>
        </button>

        <img class="lightbox-image" src="" alt="" width="1112" height="640"/>           
          
        <button
          class="lightbox-button"
          id="next-lightbox-button"
          type="button">
          <svg
            class="lightbox-button-icon-next"
            width="24"
            height="24"
            aria-label="icon arrow right"
          >
            <use href="${g}#icon-chevron-right"></use>
          </svg> 
        </button>
      </div>
    </div>`}
//# sourceMappingURL=commonHelpers4.js.map

import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{S as r}from"./assets/vendor-c279a850.js";import{i}from"./assets/icons-aa1fc6ea.js";import{i as a}from"./assets/gallery-images-8dc32416.js";const l=({preview:e,description:t,original:o})=>`<li class="gallery-item">
              <a class="gallery-link" href="${o}">
                <img class="gallery-img"
                    src="${e}"
                    alt="${t}"                    
                 />
              </a>
            </li>`;function s(e,t){const o=e.map(l).join("");t.insertAdjacentHTML("beforeend",o)}const n=document.querySelector(".gallery");s(a,n);new r(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionsDelay:250,nav:!0,navText:[`<svg
    class="lightbox-button-icon-prev"
    width="24"
    height="24"
    aria-label="icon arrow left">
      <use href="${i}#icon-chevron-left"></use>
  </svg>`,`<svg
    class="lightbox-button-icon-next"
    width="24"
    height="24"
    aria-label="icon arrow right">
    <use href="${i}#icon-chevron-right"></use>
  </svg>`],close:!0,closeText:`
  <svg class="lightbox-close-icon" width="16" height="16">
    <use href="${i}#close-form"></use>
  </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});
//# sourceMappingURL=commonHelpers5.js.map

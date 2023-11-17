import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import createGallery from '../common/create-gallery.js';
import images from "../data/gallery-images.js";

const galleryRef = document.querySelector('.gallery');
createGallery(images, galleryRef);

new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionPosition: "bottom",
  captionsDelay: 250,
  captionType: "attr",
  showCounter: true,
  disableScroll: false,
  disableZoom: false,
  history: true,
  swipeClose: true,
  });


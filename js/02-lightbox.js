import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const blokGalleri = document.querySelector("ul.gallery");

const makeGalleri = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <li class="gallery__link"><a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a></li>`
  )
  .join("");
blokGalleri.insertAdjacentHTML("afterbegin", makeGalleri);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

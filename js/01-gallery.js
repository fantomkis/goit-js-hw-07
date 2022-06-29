import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const blokGalleri = document.querySelector(".gallery");

const makeGalleri = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
     <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`;
  })
  .join("");

blokGalleri.insertAdjacentHTML("afterbegin", makeGalleri);

blokGalleri.addEventListener("click", (event) => {
  event.preventDefault();
  const element = event.target.dataset.source;
  if (event.target.classList.contains("gallery")) return;

  const instance = basicLightbox.create(`
    <img src="${element}" width="800" height="600">
`);

  instance.show();
});

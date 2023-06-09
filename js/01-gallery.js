import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ulList = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
  })
  .join("");
ulList.insertAdjacentHTML("beforeend", markup);

ulList.addEventListener("click", onImageClick);
function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const source = e.target.dataset.source;
  const modalWindow = basicLightbox.create(
    `<img src="${source}" width="800" height="600">`
  );
  modalWindow.show();
}

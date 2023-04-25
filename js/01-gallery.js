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
  if (e.target.nodeName !== "IMG") {
    return;
  }
  console.log("hello");
}

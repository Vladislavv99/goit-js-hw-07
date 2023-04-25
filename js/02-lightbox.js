import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ulList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (img) =>
      `
  <li class="gallery__item">
   <a class="gallery__link" href="${img.original}">
      <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
   </a>
</li>
    `
  )
  .join("");
ulList.insertAdjacentHTML("afterbegin", markup);

ulList.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  let lightbox = new SimpleLightbox(".gallery a", {
    spinner: true,
    captionsData: "alt",
    animationSpeed: 250,
  });
}

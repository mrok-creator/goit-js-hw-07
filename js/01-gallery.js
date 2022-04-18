import { galleryItems } from './gallery-items.js';
// Change code below this line

const ref = {
  gallery: document.querySelector('.gallery'),
};

ref.gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

ref.gallery.addEventListener('click', onGalleryImageClick);

function createGalleryMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
    )
    .join('');
}

function onGalleryImageClick(event) {
  const evt = event.target;

  const galleryImage = evt.classList.contains('gallery__image');
  event.preventDefault();
  if (!galleryImage) return;

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}

function clickDelegateAction(event) {}

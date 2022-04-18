import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
console.log(galleryItems);

function createGalleryMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
     </a>
  `,
    )
    .join('');
}
galleryRef.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));
пше;

var lightbox = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
  captionClass: 'qwer',
});

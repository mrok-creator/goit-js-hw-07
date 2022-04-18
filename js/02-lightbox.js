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
galleryRef.addEventListener('click', onGalleryImageClick);

function onGalleryImageClick(event) {
  const evt = event.target;
  event.preventDefault();
  const galleryImage = evt.classList.contains('gallery__image');

  if (!galleryImage) return;

  var lightbox = new SimpleLightbox('.gallery a', {
    captionSelector: evt.getAttribute('alt'),
    captionType: 'attr',
    captionDelay: 300,
    animationSpeed: 300,
  });
}

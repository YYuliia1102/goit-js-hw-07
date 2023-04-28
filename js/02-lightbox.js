import { galleryItems } from './gallery-items.js';
// Change code below this line
const liArray = [];

// Звернаємось до классу gallery
const galleryMarkup = galleryItems.map(item => `
<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
</a>
</div>
`).join('');

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

let lightbox = new SimpleLightbox('.gallery a',{
    captionDelay: 250,
    captionsData: 'alt',
});
lightbox.on('show.simpleLightbox')

console.log(galleryItems);

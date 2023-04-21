import { galleryItems } from './gallery-items.js';
// Change code below this line
const liArray = [];

// Звернаємось до классу gallery
const ul = document.querySelector('.gallery');
galleryItems.forEach(item => {
    const li = document.createElement('li');

    const link = document.createElement('a')
    link.className = "gallery__link";
    link.setAttribute('href', item.original)

    const img = document.createElement('img')
    img.className = "gallery__image";
    img.setAttribute('src', item.preview)
    img.setAttribute('alt', item.description)

    link.appendChild(img)

    li.appendChild(link)

    liArray.push(li);
})

ul.append(...liArray);

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', (e) => {
        e.preventDefault(); //відміняє стандартну дію браузера
        let lightbox = new SimpleLightbox('.gallery a');
        lightbox.on('show.simpleLightbox')

    })
})

console.log(galleryItems);


// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });
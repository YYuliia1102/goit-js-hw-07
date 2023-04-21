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
    img.setAttribute('data-source', item.original)
    img.setAttribute('alt', item.description)
    img.setAttribute('width', "800")
    img.setAttribute('height', "600")

    link.appendChild(img)

    li.appendChild(link)

    liArray.push(li);
})

ul.append(...liArray);

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', (e) => {
        e.preventDefault(); //відміняє стандартну дію браузера
        const bigSrc = image.attributes['data-source'].value;
        basicLightbox.create(`
        <img width="1400" height="900" src="${bigSrc}">
    `).show()
    })
})

console.log(galleryItems);

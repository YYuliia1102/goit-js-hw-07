import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkup = galleryItems.map(item => `
<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
</a>
</div>
`).join('');

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);


console.log(galleryItems);

const image = document.querySelector('.gallery');

image.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('gallery__image')) {
        const bigSrc = event.target.getAttribute('data-source');
        basicLightbox.create(`
            <img width="1400" height="900" src="${bigSrc}">
        `).show();
    }
});



// ====== Version 1

// const liArray = [];
// Звернаємось до классу gallery
// const ul = document.querySelector('.gallery');
// galleryItems.forEach(item => {
//     const li = document.createElement('li');
//     const link = document.createElement('a')
//     link.className = "gallery__link";
//     link.setAttribute('href', item.original)
//     const img = document.createElement('img')
//     img.className = "gallery__image";
//     img.setAttribute('src', item.preview)
//     img.setAttribute('data-source', item.original)
//     img.setAttribute('alt', item.description)

//     link.appendChild(img)

//     li.appendChild(link)

    // liArray.push(li);
// })

// ul.append(...liArray);

// const images = document.querySelectorAll('img')
// images.forEach(image => {
//     image.addEventListener('click', (e) => {
//         e.preventDefault(); //відміняє стандартну дію браузера
//         const bigSrc = image.attributes['data-source'].value;
//         basicLightbox.create(`
//         <img width="1400" height="900" src="${bigSrc}">
//     `).show()
//     })
// })
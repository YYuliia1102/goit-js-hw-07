import { galleryItems } from './gallery-items.js';
// Change code below this line

// import * as basicLightbox from 'basiclightbox'

const liArray = [];

const ul = document.querySelector('.gallery');
galleryItems.forEach(item => {
    const li = document.createElement('li');
    
    li.innerHTML = (`
    <a class="gallery__link" href="${item.original}">
    <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
    width = "800"
    height = "600"
    />
    </a>
    `)
    liArray.push(li);
})
ul.append(...liArray);

// document.querySelector('a.gallery_image').onclick = () => {

// 	basicLightbox.create(`
// 		<img width="1400" height="900" src="${item.preview}">
// 	`).show()

// }


// const images = document.querySelectorAll('img')
// images.forEach(image => {
//   image.addEventListener('click', e => {
//     lightbox.classList.add('active')
//     const img = document.createElement('img')
//     img.src = image.src
//     while (lightbox.firstChild) {
//       lightbox.removeChild(lightbox.firstChild)
//     }
//     lightbox.appendChild(img)
//   })
// })

// lightbox.addEventListener('click', e => {
//   if (e.target !== e.currentTarget) return
//   lightbox.classList.remove('active')
// })

// const instance = basicLightbox.create(ul)
console.log(galleryItems);

// instance.show()
const bannatyneImages = ['<img src="images/bannatynes/28-06-19/IMG_0316.jpg" data-imagesrc="images/bannatynes/28-06-19/IMG_0316.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0317.jpg" data-imagesrc="images/bannatynes/28-06-19/IMG_0317.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0318.jpg" data-imagesrc="images/bannatynes/28-06-19/IMG_0318.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0319.jpg" data-imagesrc="images/bannatynes/28-06-19/IMG_0318.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0320.jpg" data-imagesrc="images/bannatynes/28-06-19/IMG_0318.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0321.jpg" data-imagesrc="images/bannatynes/28-06-19/IMG_0318.jpg" class="gallery" alt="#">',]

const bannatyneGallery = document.querySelector('.bannatyne');
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxImage = document.querySelector('.lightbox-image');
const lastImage = bannatyneImages.length -1;

const lightboxBtns = document.querySelectorAll('.lightbox-btn');
const lightboxBtnRight = document.querySelector('#right');
const lightboxBtnLeft = document.querySelector('#left');
let activeImage

const showLightbox = () => {lightboxContainer.classList.add('active')}

const hideLightbox = () => {lightboxContainer.classList.remove('active')}

const setActiveImage = (image) => {
    lightboxImage.src = image.dataset.imagesrc;
    activeImage = bannatyneImages.indexOf(image);
    console.log(activeImage);
}

const transitionSlidesLeft = () => {
    lightboxBtnLeft.focus();
    if (activeImage === 0) {
        setActiveImage(bannatyneImages[lastImage]);
    } else {
        setActiveImage(bannatyneImages[activeImage].previousElementSibling);
    }
}

const transitionSlidesRight = () => {
    console.log('right');
}

const transitionSliderHandler = (moveItem) => {
    if (moveItem.includes('left')) {
        transitionSlidesLeft();
    } else {
        transitionSlidesRight();
    }
}

bannatyneImages.forEach(function(image) {

    let divElement = document.createElement('div');
    divElement.classList.add('gallery-image');
    divElement.innerHTML = image;

    bannatyneGallery.appendChild(divElement);
    
})

const lightboxEnabled = document.querySelectorAll('.gallery');

lightboxEnabled.forEach(image => {
    image.addEventListener('click', e => {
        showLightbox();
        setActiveImage(image);
    })
})

lightboxContainer.addEventListener('click', e => {hideLightbox()})

lightboxBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        transitionSliderHandler(e.currentTarget.id);
    })
})
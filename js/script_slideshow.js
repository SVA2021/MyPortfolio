'use strict';

//*******************PROJECT **********************/

const showGallery = (galleryWrapper) => {

	const incLimited = () => {
		(counter === imageArray.length - 1) ? counter = 0 : counter++;
	}

	const decLimited = () => {
		(counter === 0) ? counter = imageArray.length - 1 : counter--;
	}

	const nextSlide = () => {
		imageArray[counter].classList.remove('showSlide');
		incLimited();
		imageArray[counter].classList.add('showSlide');
	}

	const prevSlide = () => {
		imageArray[counter].classList.remove('showSlide');
		decLimited();
		imageArray[counter].classList.add('showSlide');
	}

	const slideShow = () => {
		if (!isActiveSlideShow) return false;
		nextSlide();
		setTimeout(slideShow, 3000);
	}

	let navigation = galleryWrapper.querySelector('.gallery__navigation');
	let imageArray = galleryWrapper.querySelectorAll('.gallery__pic');
	let prevBtn = galleryWrapper.querySelector('.gallery__prev');
	let fullScreenBtn = galleryWrapper.querySelector('.gallery__fullscreen');
	let slideShowBtn = galleryWrapper.querySelector('.gallery__slideshow');
	let nextBtn = galleryWrapper.querySelector('.gallery__next');

	let counter = 0;
	let isActiveSlideShow = false;

	galleryWrapper.addEventListener('click', () => {
		navigation.classList.toggle('gallery__navigation--active');
	})

	fullScreenBtn.addEventListener('click', () => {
		galleryWrapper.classList.toggle('showFull');
		fullScreenBtn.classList.toggle('gallery__btn--active');
	});

	imageArray[counter].classList.add('showSlide');

	prevBtn.addEventListener('click', () => prevSlide());
	nextBtn.addEventListener('click', () => nextSlide());

	slideShowBtn.addEventListener('click', () => {
		isActiveSlideShow = !isActiveSlideShow;
		prevBtn.hidden = isActiveSlideShow;
		nextBtn.hidden = isActiveSlideShow;
		slideShowBtn.classList.toggle('gallery__btn--active');
		slideShow();
	});
}

const galleriesList = document.body.querySelectorAll('.gallery');

for (const gallery of galleriesList) {
	showGallery(gallery);
}

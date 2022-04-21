'use strict';

//*******************HEADER **********************/

const headerMenu = document.querySelector('.menu');
const headerMenuBtn = document.body.querySelector('.menu__btn');

headerMenuBtn.addEventListener('click', (e) => {
	e.preventDefault();
	headerMenu.classList.toggle('menu__modal');
});

//*******************PROJECT **********************/

const galleryArray = document.body.querySelectorAll('.project__gallery');
// const gallery = document.body.querySelector('.project__gallery');

// gallery.addEventListener('click', () => gallery.classList.toggle('showFull'));

const slideShow = async (array) => {

	for (let i = 0; i < array.length;) {
		let item = array[i];

		item.classList.add('showSlide');
		let promise = new Promise((resolve, reject) => {
			setTimeout(() => resolve(item), 5000);
		});
		let result = await promise;
		result.classList.remove('showSlide');

		(i === array.length - 1) ? i = 0 : i++;
	}

}

// const imageArray = gallery.querySelectorAll('.project__pic');

for (const gallery of galleryArray) {
	gallery.addEventListener('click', () => gallery.classList.toggle('showFull'));
	const imageArray = gallery.querySelectorAll('.project__pic');
	slideShow(imageArray);
}
// slideShow(imageArray);
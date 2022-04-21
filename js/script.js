'use strict';

//*******************HEADER **********************/

const headerMenu = document.querySelector('.menu');
const headerMenuBtn = document.body.querySelector('.menu__btn');

headerMenuBtn.addEventListener('click', (e) => {
	e.preventDefault();
	headerMenu.classList.toggle('menu__modal');
});

//*******************PROJECT **********************/

const gallery = document.body.querySelector('.project__gallery');
const imageArray = gallery.querySelectorAll('.project__pic');

const intervalLog = async (array) => {

	for (let i = 0; i < array.length;) {
		let item = array[i];

		item.classList.add('show');
		let promise = new Promise((resolve, reject) => {
			setTimeout(() => resolve(item), 5000);
		});
		let result = await promise;
		result.classList.remove('show');

		(i === array.length - 1) ? i = 0 : i++;
	}

}

intervalLog(imageArray);
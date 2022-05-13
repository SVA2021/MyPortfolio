'use strict';

//*******************HEADER **********************/

const headerMenu = document.querySelector('.menu');
const headerMenuBtn = document.body.querySelector('.menu__btn');
const menuItemList = headerMenu.querySelectorAll('.menu__item');

headerMenuBtn.addEventListener('click', (e) => {
	e.preventDefault();
	headerMenu.classList.toggle('menu__modal');
});

for (const item of menuItemList) {
	item.addEventListener('click', (e) => {
		headerMenu.classList.remove('menu__modal');
	});
}
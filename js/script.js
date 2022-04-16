'use strict';

//*******************HEADER **********************/

const headerMenu = document.querySelector('.menu');
const headerMenuBtn = document.body.querySelector('.menu__btn');

headerMenuBtn.addEventListener('click', (e) => {
	e.preventDefault();
	headerMenu.classList.toggle('menu__modal');
});

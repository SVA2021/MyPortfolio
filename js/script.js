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

//! shake order animation tryouts

const setArray = (length) => {
	if (!length || typeof (length) !== 'number') {
		return false;
	}

	let result = [];

	for (let i = 0; i < length; i++) {
		result.push(i);
	}
	return result;
};

const shakeArray = (array) => {
	if (!Array.isArray(array)) { return false; }
	let result = [];

	while (array.length > 0) {
		let index = Math.floor(Math.random() * array.length);
		result.push(array[index]);
		array.splice(index, 1);
	}

	return result;
};

const projectTechno = document.body.querySelector('.project__technologies');
const icons = projectTechno.querySelectorAll('.project__icon');

const shakeIconsOrder = (array) => {
	if (array.length == 0) { return false; }

	const orderList = shakeArray(setArray(array.length));

	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		element.style.order = String(orderList[i]);
	}

};

setInterval(() => shakeIconsOrder(icons) , 15000);

//*******************FORM VALIDATION **********************/

const contactForm = document.forms.contacts;
// const nameInput = contactForm.elements.name;
// const messageInput = contactForm.elements.message;
// const emailInput = contactForm.elements.email;
const emailInput = contactForm.elements.eMail;
const emailTip = contactForm.querySelector('.form__tooltip');
// console.log(emailTip);
// console.log(nameInput.validity.valid);
// console.log(emailInput.value === " ");
// console.log(messageInput.value.length);

const checkEmail = () => {
	let eMail = emailInput.value;
	let index = eMail.indexOf('@');
	let domen = eMail.slice(++index);
	let isValid = domen.includes('.') && !domen.endsWith('.');
	return isValid;
}

emailInput.addEventListener('blur', (e) => {
	let isValid = checkEmail();
	if (!isValid) {
		emailTip.classList.add('form__error');
		emailInput.classList.add('form__invalid');
		return false;
	}
	emailInput.classList.remove('form__invalid');
	emailTip.classList.remove('form__error');
	return false;
})

contactForm.addEventListener('submit', (e) => {
	let eMail = emailInput.value;
	let index = eMail.indexOf('@');
	let domen = eMail.slice(++index);
	let isValid = domen.includes('.');
	if (!isValid) {
		console.log('mail=', eMail, ' i=', index, ' d=', domen, 'valid=', isValid);
		e.preventDefault();
		emailInput.focus();
		return false;
	}
})
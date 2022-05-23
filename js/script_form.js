'use strict';

//*******************FORM VALIDATION **********************/

const contactForm = document.forms.contacts;
const emailInput = contactForm.elements.eMail;
const emailTip = contactForm.querySelector('.form__tooltip');

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
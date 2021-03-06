'use strict'
//*******************PROJECT ACTUAL**********************/

const LANGUAGE = document.documentElement.lang;

const PARAMETER = {
	en: {
		navigation: ['prev', 'fullscreen', 'slideshow', 'next'],
		description: [`project test results`, `project main screen`, `project additional screenshot`]
	},
	ru: {
		navigation: ['сюда', 'полный экран', 'слайдшоу', 'туда'],
		description: [`результаты теста проекта`, `главный экран проекта`, `дополнительный скриншот проекта`]
	},
}

let langSet = PARAMETER[LANGUAGE] || 'en';

const WEB_SKILLS_FULL = ['html5', 'css3', 'js', 'git', 'markdown', 'cssModules', 'github', 'react', 'redux', 'sass', 'typescript'];

//! update this array to add new project
const PROJECT_ACTUAL = [
	{
		name: 'css_edu',
		imgQty: 9,
		webSkills: ['html5', 'git', 'cssModules', 'github', 'react', 'redux', 'sass', 'typescript',]
	},
	{
		name: 'raw',
		imgQty: 6,
		webSkills: ['html5', 'git', 'cssModules', 'github', 'react', 'redux', 'sass', 'typescript',]
	},
	{
		name: 'galeoncar',
		imgQty: 17,
		webSkills: ['html5', 'css3', 'js', 'git', 'markdown', 'github', 'sass',]
	},
	{
		name: 'portfolio',
		imgQty: 2,
		webSkills: ['html5', 'css3', 'js', 'git', 'markdown', 'github', 'sass',]
	},
]

const setProject = (project) => {
	let name = project.name;
	let qty = project.imgQty;
	let webSkills = project.webSkills;

	let wrapper = document.getElementById(name);
	let gallery = wrapper.querySelector('.project__gallery');
	let skills = wrapper.querySelector('.project__technologies');

	gallery.classList.add('gallery');
	gallery.insertAdjacentHTML('afterbegin',
		`<div class="gallery__navigation" aria-hidden="true">
		<button class="gallery__btn gallery__prev" aria-hidden="true">${langSet.navigation[0]}</button>
		<button class="gallery__btn gallery__fullscreen" aria-hidden="true">${langSet.navigation[1]}</button>
		<button class="gallery__btn gallery__slideshow" aria-hidden="true">${langSet.navigation[2]}</button>
		<button class="gallery__btn gallery__next" aria-hidden="true">${langSet.navigation[3]}</button>
		</div>`
	);

	for (let i = 0; i < qty; i++) {

		let alt = (i === 0) ? langSet.description[0] :
			(i === 1) ? langSet.description[1] : langSet.description[2];

		gallery.insertAdjacentHTML('beforeend',
			`<picture class="gallery__pic">
			<source media="(max-width: 420px)" srcset="./img/${name}/360/${name}_${i}_360.webp" type="image/webp">
			<source media="(max-width: 420px)" srcset="./img/${name}/360/${name}_${i}_360.png" type="image/png">
			<source media="(max-width: 1200px)" srcset="./img/${name}/720/${name}_${i}_720.webp" type="image/webp">
			<source media="(max-width: 1200px)" srcset="./img/${name}/720/${name}_${i}_720.png" type="image/png">
			<source srcset="./img/${name}/origin/${name}_${i}.webp" type="image/webp">
			<img class="gallery__img" alt="${alt}" loading="lazy"
				src="./img/${name}/origin/${name}_${i}.png">`);
	}

	skills.classList.add('icon__set');
	for (const item of webSkills) {
		skills.insertAdjacentHTML('beforeend',
			`<svg class="icon__svg" role="img" aria-label="js"><use href="#${item}"></use></svg>`
		);
	}
}

for (const item of PROJECT_ACTUAL) {
	setProject(item);
}

//***My Skills icons loading */

const about = document.getElementById('about');
const mySkills = about.querySelector('.skills__set');

for (const item of WEB_SKILLS_FULL) {
	mySkills.classList.add('icon__set');
	mySkills.insertAdjacentHTML('beforeend',
		`<svg class="icon__svg" role="img" aria-label="js"><use href="#${item}"></use></svg>`
	);
}
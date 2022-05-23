'use strict'
//*******************PROJECT ACTUAL**********************/

const WEB_SKILLS_FULL = ['html5', 'css3', 'js', 'git', 'markdown', 'cssModules', 'github', 'react', 'redux', 'sass', 'typescript'];

//! update this array below to add new project
const PROJECT_ACTUAL = [
	{ name: 'css_edu', imgQty: 9, webSkills: ['html5', 'git', 'cssModules', 'github', 'react', 'redux', 'sass', 'typescript',] },
	{ name: 'raw', imgQty: 6, webSkills: ['html5', 'git', 'cssModules', 'github', 'react', 'redux', 'sass', 'typescript',] },
	{ name: 'galeoncar', imgQty: 17, webSkills: ['html5', 'css3', 'js', 'git', 'markdown', 'github', 'sass',] },
]

const setProject = (project) => {
	let name = project.name;
	let qty = project.imgQty;
	let webSkills = project.webSkills;

	let wrapper = document.getElementById(name);
	let gallery = wrapper.querySelector('.project__gallery');
	let skills = wrapper.querySelector('.project__technologies');

	for (let i = 0; i < qty; i++) {

		let alt = (i === 0) ? `test results` :
			(i === 1) ? `main screen` : `additional screenshot`;

		gallery.insertAdjacentHTML('beforeend',
			`<picture class="project__pic">
			<source media="(max-width: 420px)" srcset="./img/${name}/360/${name}_${i}_360.webp" type="image/webp">
			<source media="(max-width: 420px)" srcset="./img/${name}/360/${name}_${i}_360.png" type="image/png">
			<source media="(max-width: 1200px)" srcset="./img/${name}/720/${name}_${i}_720.webp" type="image/webp">
			<source media="(max-width: 1200px)" srcset="./img/${name}/720/${name}_${i}_720.png" type="image/png">
			<source srcset="./img/${name}/origin/${name}_${i}.webp" type="image/webp">
			<img class="project__img" alt="project ${alt}" loading="lazy"
				src="./img/${name}/origin/${name}_${i}.png">`);
	}

	for (const item of webSkills) {
		skills.insertAdjacentHTML('beforeend',
			`<svg class="icon__svg" role="img" aria-label="js"><use href="#${item}"></use></svg>`
		);
	}
}

for (const item of PROJECT_ACTUAL) {
	setProject(item);
}
'use strict'
//*******************PROJECT ACTUAL**********************/

/**
 * @param {set qty of pictures} qty 
 * @param {name of folder where files placed} name 
 * @param {ID of div where will be places all pictures} wrapperDivID 
 * @returns {fullfilled div with gallery or pictures of project}
 * @NB_1 pictures must be in placed as in template folder 
 * @NB_2 this script must be placed BEFORE main script 
 * @NB_3 "0" picture recomment be with performance test result
 * @NB_4 "1" picture recomment be main screen of project
 */
const setGallery = (qty, name, wrapperDivID) => {

	if (!qty) return false;
	let wrapper = document.getElementById(wrapperDivID);

	for (let i = 0; i < qty; i++) {

		let alt = (i === 0) ? `test results` :
			(i === 1) ? `main screen` : `additional screenshot`;

		wrapper.insertAdjacentHTML('beforeend',
			`<picture class="project__pic">
			<source media="(max-width: 420px)" srcset="./img/${name}/360/${name}_${i}_360.webp" type="image/webp">
			<source media="(max-width: 420px)" srcset="./img/${name}/360/${name}_${i}_360.png" type="image/png">
			<source media="(max-width: 1200px)" srcset="./img/${name}/720/${name}_${i}_720.webp" type="image/webp">
			<source media="(max-width: 1200px)" srcset="./img/${name}/720/${name}_${i}_720.png" type="image/png">
			<source srcset="./img/${name}/origin/${name}_${i}.webp" type="image/webp">
			<img class="project__img" alt="project ${alt}" loading="lazy"
				src="./img/${name}/origin/${name}_${i}.png">`);
	}
}

setGallery(9, 'css_edu', 'css_edu');
setGallery(6, 'raw', 'raw');
setGallery(17, 'galeoncar', 'galeoncar');
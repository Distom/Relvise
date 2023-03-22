'use strict'

let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu__button');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	menu.classList.toggle('menu_active');
	menuBtn.classList.toggle('menu__button_active');
	document.body.classList.toggle('lock');
}

menu.addEventListener('click', menuScrollTo);

function menuScrollTo(event) {
	let menuLink = event.target.closest('.menu__link');
	if (!menuLink) return;
	toggleMenu();
}

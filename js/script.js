'use strict'

let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu__button');
let menuBurgerActive = false;

menuBtn.addEventListener('click', toggleMenu);
menu.addEventListener('click', menuScrollTo);
window.addEventListener('resize', removeMenuBurger);

function removeMenuBurger() {
	if (window.innerWidth > 768 && menuBurgerActive) {
		menuBurgerActive = false;
		menu.classList.remove('menu_active');
		menuBtn.classList.remove('menu__button_active');
		document.body.classList.remove('lock');
	}
}

function toggleMenu() {
	menu.classList.toggle('menu_active');
	menuBtn.classList.toggle('menu__button_active');
	document.body.classList.toggle('lock');
	menuBurgerActive = !menuBurgerActive;
}

function menuScrollTo(event) {
	let menuLink = event.target.closest('.menu__link');
	if (!menuLink) return;
	toggleMenu();
}

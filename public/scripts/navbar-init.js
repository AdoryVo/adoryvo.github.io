/* global $ */ // Tell ESLint to ignore undefined globals.

$(function () {
	const hamburger = $('.hamburger');
	const navLinks = $('#navLinks');
	hamburger.on('click', function () {
		navLinks.toggleClass('invisible h-40 opacity-0');
		hamburger.toggleClass('is-active');
	});
});

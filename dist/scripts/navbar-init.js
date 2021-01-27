const hamburger = $('.hamburger');
const navLinks = $('#navLinks');
hamburger.click(() => {
    navLinks.toggleClass('invisible');
    navLinks.toggleClass('h-40');
    navLinks.toggleClass('opacity-0');
    hamburger.toggleClass('is-active');
});
$(document).ready(function () {
    const hamburger = $('.hamburger');
    const navLinks = $('#navLinks');
    hamburger.click(function () {
        navLinks.toggleClass('invisible');
        navLinks.toggleClass('h-40');
        navLinks.toggleClass('opacity-0');
        hamburger.toggleClass('is-active');
    });
});
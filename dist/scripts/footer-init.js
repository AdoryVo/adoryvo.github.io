const footer = $('footer');
if ($('body').get(0).scrollHeight <= window.innerHeight) {
    footer.toggleClass('relative');
    footer.addClass('absolute');
    footer.addClass('bottom-0');
}
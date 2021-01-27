$(document).ready(() => {
    const footer = $('footer');

    function toggleFooterPosition() {
        if ($('body').get(0).scrollHeight <= window.innerHeight) {
            footer.removeClass('relative');
            footer.addClass('absolute');
            footer.addClass('bottom-0');
        }
        else {
            footer.addClass('relative');
            footer.removeClass('absolute');
            footer.removeClass('bottom-0');
        }
    }

    toggleFooterPosition();

    $(window).resize(() => {
        toggleFooterPosition();
    });
});
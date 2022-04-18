/* global $ */ // Tell ESLint to ignore undefined globals.

$(function () {
	const footer = $('footer');

	function toggleFooterPosition() {
		if ($('main').get(0).scrollHeight <= window.innerHeight * 0.5) {
			footer.removeClass('relative');
			footer.addClass('absolute bottom-0');
		} else {
			footer.addClass('relative');
			footer.removeClass('absolute bottom-0');
		}
	}

	toggleFooterPosition();

	$(window).on('resize', function () {
		toggleFooterPosition();
	});
});
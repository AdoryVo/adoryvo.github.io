/* global $ */ // Tell ESLint to ignore undefined globals.

$(document).ready(function () {
	const footer = $('footer');

	function toggleFooterPosition() {
		if ($('body').get(0).scrollHeight <= window.innerHeight) {
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
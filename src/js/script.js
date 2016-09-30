var setExplicitHeightOfNavbar = function() {
	$('.navbar').height($('.navbar').height());
}

$(document).ready(function () {
	$('section').on('click', '.expand', function (e) {
		var $section = $(this).closest('section');
		if ($section.length) {
			$section.data('collapsed-height', $section.outerHeight()).css('max-height', $section[0].scrollHeight).addClass('expanded');
		}
	});
	$('section').on('click', '.contract', function (e) {
		var $section = $(this).closest('section');
		if ($section.length) {
			$section.css('max-height', $section.data('collapsed-height')).removeClass('expanded');
		}
	});
	$('.button-collapse').sideNav({closeOnClick:true});
	setExplicitHeightOfNavbar();

	$('.navbar nav').pushpin({ top: $('.navbar nav').offset().top });
});

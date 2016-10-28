var initPushpinMenu = function() {
	$('.navbar').height($('.navbar').height());
	$('.navbar nav').pushpin({ top: $('#logo').outerHeight() });
}

var expandSection = function (e) {
	var $section = $(this).closest('section');
	if ($section.length) {
		$section.data('collapsed-height', $section.outerHeight()).css('max-height', $section[0].scrollHeight).addClass('expanded');
	}
}

var contractSection = function (e) {
	var $section = $(this).closest('section');
	if ($section.length) {
		$section.css('max-height', $section.data('collapsed-height')).removeClass('expanded');
	}
}

var navToSection = function (e) {
	e.preventDefault();
	var $section = $($(this).attr('href'));
	console.log($(this).attr('href'));
	$('html,body').animate({scrollTop: $section.offset().top-66},'slow');
	$section.not('.expanded').data('collapsed-height', $section.outerHeight()).css('max-height', $section[0].scrollHeight).addClass('expanded');
}

$(document).ready(function () {
	$('section').on('click', '.expand', expandSection);
	$('section').on('click', '.contract', contractSection);
	$('.button-collapse').sideNav({closeOnClick:true});

	$('.navbar').on('click', 'li a', navToSection);

	setTimeout(initPushpinMenu,1000);
});

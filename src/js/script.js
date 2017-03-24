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

//############################################
// 	FellowsController
//############################################
var fellowsController = (function() {
	var dragSrc = null;
	
	var shuffle = function(o) {
		for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};

	var layoutFellows = function(fellows) {
		var fellowTemplate = Handlebars.compile($("#fellow-template").html()),
			layoutDiv = $("#fellow-list");

		shuffle(fellows);
		fellows.forEach(function(fellow, index) {
			layoutDiv.append(fellowTemplate(fellow));
		});
	}

	var safeUpEmailAddresses = function() {
		$('a[rel=email]').each(function() {
			// Modify the mailto: value
			var mailtoVal = $(this).attr('href')
				.toLowerCase()
				.replace(' ', '.')
				.replace('[email]', 'mailto:')
				.replace('å', 'a')
				.replace('ä', 'a')
				.replace('ö', 'o')
				.replace('ü', 'u');
			mailtoVal += '@aptitud.se';

			// onClick Event
			$(this).click(function(e) {
				e.preventDefault();
				location.href = mailtoVal;
			});
		});
	};

	var addDnDSupport = function() {
		$(".fellow").each(function(index) {
			$(this).attr('draggable', 'true');
			$(this).bind('dragstart', function(e) {
				$(this).fadeTo("slow", 0.4);
				dragSrc = this;
				e.originalEvent.dataTransfer.effectAllowed = 'move';
				e.originalEvent.dataTransfer.setData('text/html', $(this).html());
			});
			$(this).bind('dragover', function(e) {
				if (e.preventDefault) e.preventDefault();
				return false;
			});
			$(this).bind('dragenter', function(e) {});
			$(this).bind('dragleave', function(e) {});
			$(this).bind('drop', function(e) {
				if (e.stopPropagation) e.stopPropagation();
				if (dragSrc != this) {
					dragSrc.innerHTML = this.innerHTML;
					this.innerHTML = e.originalEvent.dataTransfer.getData('text/html');
					$(dragSrc).fadeTo("slow", 1.0);
					$(this).fadeTo("slow", 1.0);
				}
				return false;
			});
			$(this).bind('dragend', function(e) {});
		})
	};

	return {
		init : function() {   
			$.getJSON('fellows.json').done(function(fellows) {
				layoutFellows(fellows);
				safeUpEmailAddresses();
				addDnDSupport();
			});
		}
	}
})();


$(document).ready(function () {
	fellowsController.init();

	$('section').on('click', '.expand', expandSection);
	$('section').on('click', '.contract', contractSection);
	$('.button-collapse').sideNav({closeOnClick:true});

	$('.navbar').on('click', 'li a', navToSection);

	$(window).on('scroll',function(){
		$('.parallax img').css('transform', 'translate(-50%,-'+(Math.floor(window.pageYOffset/2)+'px')+')');
	});

	setTimeout(initPushpinMenu,1000);
});

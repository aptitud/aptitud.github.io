$(document).ready(function() {
  $('section').on('click', '.expand', function(e) {
    var $section = $(this).closest('section');
    $section.data('init-height', $section.height());
    $section.css('max-height', $section[0].scrollHeight);
    $section.addClass('expanded');
  })
  $('section').on('click', '.contract', function(e) {
    var $section = $(this).closest('section');
    $section.css('max-height', $section.data('init-height'));
    $section.removeClass('expanded');
  })
});

$(document).ready(function() {
  $('section').on('click', '.expand', function(e) {
    var $section = $(this).closest('section');
    $section.css('max-height',$section[0].scrollHeight);
    $section.addClass('expanded');
  })
  $('section').on('click', '.contract', function(e) {
    var $section = $(this).closest('section');
    $section.prop('style','');
    $section.removeClass('expanded');
  })
});

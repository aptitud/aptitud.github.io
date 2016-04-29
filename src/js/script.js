$(document).ready(function() {
  $('section').on('click', '.expand', function(e) {
    $(this).closest('section').addClass('expanded');
  })
});

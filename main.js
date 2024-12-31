$(document).ready(function() {
  $(document).on('click', '.menu-button', function() {
  $(this).toggleClass('open');
  $('.menu').toggleClass('open');
    $('.page').toggleClass('gcover');
	});
});
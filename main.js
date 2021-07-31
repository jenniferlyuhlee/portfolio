$(document).ready(function() {
  $('.menu-button').click(function() {
  $(this).toggleClass('open');
  $('.menu').toggleClass('open');
    $('.page').toggleClass('gcover');
	});
});
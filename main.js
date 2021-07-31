$(document).ready(function() {
  $('.menu-button').click(function() {
  $(this).toggleClass('open');
  $('.menu').toggleClass('open');
    $('.menu').toggleClass('omenu');
    $('.poot').toggleClass('gcover');
	});
});
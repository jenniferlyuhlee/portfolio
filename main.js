fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    const menuContainer = document.getElementById('menu-container'); 
    menuContainer.innerHTML = data; 
  });

$(document).ready(function() {
  $('.menu-button').click(function() {
  $(this).toggleClass('open');
  $('.menu').toggleClass('open');
    $('.page').toggleClass('gcover');
	});
});
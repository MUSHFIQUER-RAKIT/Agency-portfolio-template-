// Mobile Menu Script

const mobile_menu = document.querySelector('.header_bars');
mobile_menu.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('open');
});

//bx slider
$(document).ready(function () {
  $('.slider').bxSlider({
    auto: true,
  });
});

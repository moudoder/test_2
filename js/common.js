$(document).ready(function () {
  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".phone").mask("+7 (999) 999-9999");


  $('.map-item__cursor').on('')


  $('.map-item__cursor').on('mouseenter', function() {
    let index_elem = $('.map-item__cursor').index(this);
    let elements__arr = $('.map-item');
    let now_element = $(elements__arr)[index_elem];

    $(now_element).addClass('visible');
    $(this).on('mouseleave', function() {
      $(now_element).removeClass('visible');
    })
  })
})
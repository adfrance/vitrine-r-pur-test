$(document).ready(function($) {
  $('#accordion').find('.accordion-toggle').click(function(){

    //Expand or collapse this panel
    $(this).next().slideToggle('fast');

    //Hide the other panels
    $(".accordion-content").not($(this).next()).slideUp('fast');

  });
});

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
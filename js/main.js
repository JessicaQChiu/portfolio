$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });

$(document).ready(function(){
    //Make the <header> element stretch across the entire screen*/
    $('.header').height($(window).height());
  })


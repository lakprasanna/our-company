$(document).ready(function () {
  var previousScroll = 0;
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll < 100) {
      showTopNav();
    } else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
      if (currentScroll > previousScroll) {
        hideNav();
      } else {
        showNav();
      }
      previousScroll = currentScroll;
    }
  });
  function hideNav() {
    $(".navbar").removeClass("is-visible").addClass("is-hidden");
  }
  function showNav() {
    $(".navbar").removeClass("is-hidden").addClass("is-visible").addClass("scrolling");
  }






  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });






  });



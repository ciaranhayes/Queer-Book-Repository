$(function () {
    const path = window.location.pathname;
    
    $('.nav-link').each(function () {
      var href = $(this).attr('href');

      if (path === href) {
        $(this).addClass('activeNav');
      }
    });

    $('.nav-link').on('click', function () {
      $('.nav-link').removeClass('activeNac');
      $(this).addClass('activeNav');
    });
  });
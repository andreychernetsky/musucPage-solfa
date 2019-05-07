$(document).ready(function () {


  /* Кнопка наверх */
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0)
      $('#toTop').fadeIn();
    else
      $('#toTop').fadeOut();
  });
  $('#toTop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
  });
});

var btn = document.querySelectorAll('button');
for (var i =0; i<btn.length; i++) {
  btn[i].style.outline = 'none';
}

$(document).ready(function() {

  // Hidden menu
  $( '.menu-btn, .hidden-menu__item a' ).click( function() {
    if ( $( '.hidden-menu' ).is( ':hidden' ) ) {
      $( '.hidden-menu' ).show();
    } else {
      $( '.hidden-menu' ).hide();
    }
  });

  // Page scroll
  $("a[rel='m_PageScroll2id']").mPageScroll2id({
    offset:30
  });


});

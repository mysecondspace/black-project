// initialize animation
new WOW().init();

var $root = $("html, body");

// check and open modal window
$(document).on("click", "a[href='#modal']", function(event) {
  $("body").css("overflow", "hidden");
  $("#" + $(this).data("name")).fadeIn(300);

  // only for mobile version
  $(".open").css("display", "none");
  $(".close").css("display", "block");
  $(".header__cellar").css("display", "none");
});

// close modal window
function hide() {
  $("body").css("overflow", "auto");
  $("#menu, .modal").css("display", "none");

  // only for mobile version
  $(".open").css("display", "block");
  $(".close").css("display", "none");
  $(".header__cellar").css("display", "block");
}

// smooth scroll anchors
$('a[href^="#"]').click(function() {
  var href = $.attr(this, "href");

  if ($(window).width() < 768) {
    hide();
  };

  $root.animate({
    scrollTop: $(href).offset().top
  }, 1000, function () {
    window.location.hash = href;
  });

  return false;
});


// black menu
jQuery(function($) {

    var $nav = $(".header__hood");
    var $win = $(window);
    var winH = $win.height();

    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH ) {
            $nav.addClass("scroll");
        } else {
            $nav.removeClass("scroll");
        }
    }).on("resize", function() {
       winH = $(this).height();
    });
});

// toggle list
var list = $(".toggle"),
    link = $(".button");

list.hide();
link.click(function(e) {
  var div = $(this).next("p");

  link.removeClass("opened");
  list.not(div).hide();
  $(this).addClass("opened");
  div.toggle();
});

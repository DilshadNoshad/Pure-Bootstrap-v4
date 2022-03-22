$(document).ready(function () {
  $(".nav_button").click(function () {
    $(".nav_button").toggleClass("change");
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $(".nav-menu").addClass("custom-navbar");
    } else {
      $(".nav-menu").removeClass("custom-navbar");
    }
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 650) {
      $(".sunglass-img").addClass("slide_from_left");
      $(".mission-text").addClass("slide_from_right");
    } else {
      $(".sunglass-img").removeClass("slide_from_left");
      $(".mission-text").removeClass("slide_from_right");
    }
  });

  $(".gallery-list-item").click(function () {
    let value = $(this).attr("data-filter");

    if (value === "all") {
      $(".filter").show(300);
    } else {
      $(".filter")
        .not("." + value)
        .hide(300);
      $(".filter")
        .filter("." + value)
        .show(300);
    }
  });

  $(".gallery-list-item").click(function () {
    $(this).addClass("active-gallery").siblings().removeClass("active-gallery");
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 3900) {
      $(".card-1").addClass("movefromleft");
      $(".card-2").addClass("movefrombottom");
      $(".card-3").addClass("movefromright");
    } else {
      $(".card-1").removeClass("movefromleft");
      $(".card-2").removeClass("movefrombottom");
      $(".card-3").removeClass("movefromright");
    }
  });
});

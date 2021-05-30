function hideAll() {
  $("#about-page").css("left", "100%");
}

function hideAll2() {
  $("#home-page,#service-page,#assignment-page").css("top", "100%");
}

function hideAll3() {
  $("#skills-page").css("right", "100%");
}

function hideAll4() {
  $("#contact-page").css("bottom", "100%");
}
//DEFAULT//
$("#home-page").css("top", "0");
// $("#about-page").css("left", "0");
// $("#service-page").css("top", "0");
//SCENES//
$("#home-link").click(function (e) {
  hideAll();
  hideAll2();
  hideAll3();
  hideAll4();
  $("#home-page").css("top", "0");
});

$("#about-link").click(function (e) {
  hideAll();
  hideAll2();
  hideAll3();
  hideAll4();
  $("#about-page").css("left", "0");
});

$("#service-link").click(function (e) {
  hideAll();
  hideAll2();
  hideAll3();
  hideAll4();
  $("#service-page").css("top", "0");
});

$("#skills-link").click(function (e) {
  hideAll();
  hideAll2();
  hideAll3();
  hideAll4();
  $("#skills-page").css("right", "0");
});

$("#assignment-link").click(function (e) {
  hideAll();
  hideAll2();
  hideAll3();
  hideAll4();
  $("#assignment-page").css("top", "0");
});

$("#contact-link").click(function (e) {
  hideAll();
  hideAll2();
  hideAll3();
  hideAll4();
  $("#contact-page").css("bottom", "0");
});

$(".main-nav").hover(
  function () {
    $(
      "#about-page,#service-page,#assignment-page,#contact-page,#skills-page"
    ).css("filter", "blur(4px)");
  },

  function () {
    $(
      "#about-page,#service-page,#assignment-page,#contact-page,#skills-page"
    ).css("filter", "blur(0px)");
  }
);

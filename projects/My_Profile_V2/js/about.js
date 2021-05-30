let count = false;

$("#about-info-swip").click("click", function name() {
  if (count == false) {
    $("#about-info-first-col div").css("filter", "blur(6px)");
    $("#about-info-swip").css("top", "-360px");
    $("#about-info-swip i").css("transform", "rotate(180deg)");
    $("#about-info-second-col").css("top", "-340px");
    count = true;
  } else if (count == true) {
    $("#about-info-first-col div").css("filter", "blur(0px)");
    $("#about-info-swip").css("top", "100px");
    $("#about-info-swip i").css("transform", "rotate(0deg)");
    $("#about-info-second-col").css("top", "138px");
    count = false;
  }
});
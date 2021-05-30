const section = document.getElementById("sec");
let x = 0;
let y = 0;
document.addEventListener("mousemove", function (e) {
  y = e.y / 8;
  x = e.x / 8;
  section.style.background =
    "radial-gradient(1600px at 70% 120%,rgb(80," +
    y +
    "," +
    x +
    ") 10%,#020409 100%)";
  // "rgb(00," + y + "," + x + ")"
});
//////////////////////////////////
let hamburgeCount = false;
$("#hamburge").click(function (e) {
  if (hamburgeCount == false) {
    $(".main-nav").css("left", "0%");
    $(this).css("transform", "rotate(90deg)");
    hamburgeCount = true;
  } else {
    $(".main-nav").css("left", "-100%");
    $(this).css("transform", "rotate(0deg)");
    hamburgeCount = false;
  }
});

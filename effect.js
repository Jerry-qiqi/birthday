$(window).load(function () {
  $(".loading").fadeOut("fast");
  $(".container").fadeIn("fast");
});
$("document").ready(function () {
  const tMap = {
    1: ["品", "鑫", "鑫"],
    2: ["小", "孟", "孟"],
  };

  Array.from(document.querySelectorAll(".name")).forEach((i, index) => {
    i.innerText = tMap[window.location.search?.includes(2) ? 2 : 1]?.[index];
  });

  function openLight() {
    $("#bulb_yellow").addClass("bulb-glow-yellow-after");
    $("#bulb_red").addClass("bulb-glow-red-after");
    $("#bulb_blue").addClass("bulb-glow-blue-after");
    $("#bulb_green").addClass("bulb-glow-green-after");
    $("#bulb_pink").addClass("bulb-glow-pink-after");
    $("#bulb_orange").addClass("bulb-glow-orange-after");
    $("body").css("backgroud-color", "#FFF");
    $("body").addClass("peach-after");
  }
  openLight();

  function openBannar() {
    $(".bannar").addClass("bannar-come");
  }

  setTimeout(() => {
    openBannar();
  }, 666);

  function wishMessage() {
    const vw = $(window).width() / 2;
    $("#b1").attr("id", "b11");
    $("#b2").attr("id", "b22");
    $("#b3").attr("id", "b33");
    $("#b4").attr("id", "b44");
    $("#b5").attr("id", "b55");
    $("#b6").attr("id", "b66");
    $("#b7").attr("id", "b77");
    $("#b11").animate({ top: 240, left: vw - vw / 1 }, 5000);
    $("#b22").animate({ top: 240, left: vw - vw / 1.5 }, 5000);
    $("#b33").animate({ top: 240, left: vw - vw / 3 }, 5000);
    $("#b44").animate({ top: 240, left: vw - vw / 10 }, 5000);
    $("#b55").animate({ top: 240, left: vw + vw / 6 }, 5000);
    $("#b66").animate({ top: 240, left: vw + vw / 2 }, 5000);
    $("#b77").animate({ top: 240, left: vw + vw / 1.3 }, 5000);
    $(".balloons").css("opacity", "0.9");
    $(".balloons h2").fadeIn(3000);
  }

  setTimeout(() => {
    wishMessage();
  }, 2000);

  function cakeFadein() {
    $(".cake").fadeIn("slow");
  }

  setTimeout(() => {
    cakeFadein();
  }, 7000);
});

//alert('hello');

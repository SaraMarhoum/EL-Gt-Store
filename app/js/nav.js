$(".icona").click((e) => {
  if ($(".nav__part3").css("display") == "none") {
    $(".nav__part3").css("display", "flex");
    // $(".nav__part3").css("justify-content", "space-between");
    // $(".nav__part3").css("flex-direction", "column");
  } else if ($(".nav__part3").css("display") == "flex") {
    $(".nav__part3").css("display", "none");
  }
});
$(".icona").css("cursor", "grab");

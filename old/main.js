// funkcja do wykonywana po clicknięciu zmiany class 
$("#btn").click(function () {
  $(this).toggleClass("fa-times");
    $(".list").toggleClass("mobNav")
});
// zmiana nava podczas scrolla
$(window).scroll(function () {
  if ($(window).scrollTop() > 5) {
    $(".nav").addClass("fixed");
  } else {
    $(".nav").removeClass("fixed");
  }
})

$(".list").click(function(){
 
});


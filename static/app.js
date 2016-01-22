$(document).ready(function() {


var red = $(".red");
var orange = $(".orange");
var yellow = $(".yellow");
var green = $(".green");
var blue = $(".blue");
var indigo = $(".indigo");
var violet = $(".violet");
var blink = $(".blink");
var body = $(".body");
// box.click(function() {
//   $(this).hide();
// });


var timer;
blink.mouseover(function() {
  timer = setInterval(function(){
      $(red).toggleClass("change-color");
      $(orange).toggleClass("change-color-orange");
      $(yellow).toggleClass("change-color-orange");
      $(green).toggleClass("change-color-orange");
      $(blue).toggleClass("change-color-orange");
      $(indigo).toggleClass("change-color-orange");
      $(violet).toggleClass("change-color-orange");
    }, 1000   )

});

  button.mouseout(function() {
    clearInterval(timer);

  });


  body.load(function() {
    timer = setInterval(function(){
        $(red).toggleClass("change-color");
        $(orange).toggleClass("change-color-orange");
        $(yellow).toggleClass("change-color-orange");
        $(green).toggleClass("change-color-orange");
        $(blue).toggleClass("change-color-orange");
        $(indigo).toggleClass("change-color-orange");
        $(violet).toggleClass("change-color-orange");
      }, 1000   )

  });

// button.mouseover(function() {
//
//
//
//
// });



// button.mouseover(function() {
//
//     $(orange).toggleClass("change-color-orange");
//
//
// });

// orange.mouseover(function() {
//   if ($(this).width() < 500) {
//     $(this).animate({width: 700, height: 500}, 4000)
//   } else {
//     $(this).animate({width: 25, height: 45}, 2000)
//   } $(this).toggleClass("change-color");
// })

yellow.onload(function() {
  if ($(this).width() < 500) {
    $(this).animate({width: 700, height: 500}, 4000)
  } else {
    $(this).animate({width: 25, height: 45}, 2000)
  } $(this).toggleClass("change-color");
})

green.mouseover(function() {
  if ($(this).width() < 500) {
    $(this).animate({width: 700, height: 500}, 4000)
  } else {
    $(this).animate({width: 25, height: 45}, 2000)
  } $(this).toggleClass("change-color");
})

blue.mouseover(function() {
  if ($(this).width() < 500) {
    $(this).animate({width: 700, height: 500}, 4000)
  } else {
    $(this).animate({width: 25, height: 45}, 2000)
  } $(this).toggleClass("change-color");
})
indigo.mouseover(function() {
  if ($(this).width() < 500) {
    $(this).animate({width: 700, height: 500}, 4000)
  } else {
    $(this).animate({width: 25, height: 45}, 2000)
  } $(this).toggleClass("change-color");
})
violet.mouseover(function() {
  if ($(this).width() < 500) {
    $(this).animate({width: 700, height: 500}, 4000)
  } else {
    $(this).animate({width: 25, height: 45}, 2000)
  } $(this).toggleClass("change-color");
})

$(".number").change(function() {
  var width = $(this).val()
  $(this).siblings(".box2").animate({width: width, height: 100}, 2000)
}
);

// box.click(function() {
//   $(this).addClass("change-color");
//
// });

// box.click(function() {
//     $(this).animate({width: 100, height: 100}, 2000)
//     $(this).toggleClass("change-color");
// });
//


// box.click(function() {
//     $(this).toggle.css("height", "500px", "width", "500px");
// });

// ("backgroundColor", "red", 2000);


});

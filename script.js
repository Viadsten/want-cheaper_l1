 var services = document.querySelector('#services');
 
const mediaQuery750 = window.matchMedia('(min-width: 750px)')
if (mediaQuery750.matches) {
  services.classList.remove('owl-carousel');
 }
 var cachedWidth = $(window).width();
 $(window).resize(function () {
   var newWidth = $(window).width();
   if (newWidth !== cachedWidth) {
     $(window).resize(function () {
       if (document.documentElement.clientWidth > 750) {
        services.classList.remove('owl-carousel');
       }
       if (document.documentElement.clientWidth < 750) {
        services.classList.add('owl-carousel');
       }
     });
 
     $(window).resize(function () {});
     cachedWidth = newWidth;
   }
 });
/*
 var service = document.querySelector('#service');

service.hover(function(){
  console.log('1');
})*/
$(".service__item--1").hover(
  function(){
    if(this.classList.contains('sides')){
      removeActive();
      removePosition();
      $(".service__item--1").addClass("service__active");
      $(".service__item--2").addClass("service__hover--1-1");
      $(".service__item--1").addClass("service__hover--1-2");
      $(".service__item--3").addClass("service__hover--2-1");
      $(".service__item--2").removeClass("sides-2-4");
      $(".service__item--2").addClass("sides");
      $(".service__item--3").addClass("sides");
    }
    else if(this.classList.contains('sides-1-1')){
      removeActive();
      removePosition();
      //$(".service__item--2").removeClass("sides-1-1");
      $(".service__item--2").addClass("sides");
      $(".service__item--1").addClass("service__active");
      $(".service__item--1").addClass("service__hover--1-2");
      $(".service__item--2").addClass("service__hover--2-1");
      $(".service__item--3").addClass("service__hover--1-1");
      $(".service__item--2").removeClass("sides-2-4");

    }else{
      removeActive();
      removePosition();
      $(".service__item--1").addClass("service__hover--1-1")
      $(".service__item--1").addClass("service__active")
      $(".service__item--2").removeClass("service__hover--1-2");
      $(".service__item--3").removeClass("service__hover--2-1");
      $(".service__item--2").removeClass("sides");
      $(".service__item--3").removeClass("sides");
      $(".service__item--2").removeClass("sides-2-4");
      $(".service__item--4").removeClass("sides");
      $(".service__item--5").removeClass("sides");
      $(".service__item--5").removeClass("sides-1-1");
    }
  }
)


$(".service__item--2").hover(
  function(){
    if(this.classList.contains('sides-1-1')){
      removeActive();
      removePosition();
      $(".service__item--2").addClass("service__active");
      $(".service__item--2").addClass("service__hover--1-1");
      $(".service__item--1").addClass("service__hover--1-3");
      $(".service__item--3").addClass("service__hover--2-3");
      $(".service__item--1").addClass("sides-1-1");

    }
    else if(this.classList.contains('sides')){
      removeActive();
      removePosition();
      $(".service__item--2").addClass("service__active");
      $(".service__item--2").addClass("service__hover--1-1");
      $(".service__item--1").addClass("service__hover--1-3");
      $(".service__item--1").addClass("sides");
      $(".service__item--3").removeClass("sides");
      $(".service__item--4").removeClass("sides");
      $(".service__item--5").removeClass("sides");
      $(".service__item--5").removeClass("sides-1-1");
    }
    else if(this.classList.contains('sides-2-4')){
      removeActive();
      removePosition();
      $(".service__item--2").addClass("service__active");
      $(".service__item--2").addClass("service__hover--1-3");
      $(".service__item--5").addClass("service__hover--2-2");
      $(".service__item--4").addClass("service__hover--1-2");
      $(".service__item--3").addClass("service__hover--2-1");
      $(".service__item--5").addClass("sides-1-1");
      $(".service__item--4").addClass("sides");
    }else{
      removeActive();
      removePosition();
      $(".service__item--5").removeClass("sides");
      $(".service__item--5").removeClass("sides-1-1");
      $(".service__item--1").removeClass("service__active");
      $(".service__item--2").addClass("service__hover--1-2");
      $(".service__item--2").addClass("service__active");
      $(".service__item--3").addClass("service__hover--2-1");
      $(".service__item--3").addClass("sides");
      $(".service__item--1").removeClass("sides");
      $(".service__item--5").removeClass("sides");
      $(".service__item--5").removeClass("sides-1-1");
      $(".service__item--4").removeClass("sides");

    }
  }
)


$(".service__item--3").hover(
  function(){
    if(this.classList.contains('sides')){
      removeActive();
      removePosition();
      $(".service__item--3").addClass("service__active");
      $(".service__item--3").addClass("service__hover--1-1");
      $(".service__item--1").addClass("service__hover--1-3");
      $(".service__item--1").addClass("sides");
      $(".service__item--2").removeClass("sides-1-1");
      $(".service__item--2").addClass("service__hover--2-3");
      $(".service__item--2").removeClass("sides");
      $(".service__item--1").removeClass("sides-1-1");
      $(".service__item--5").removeClass("sides");
      $(".service__item--5").removeClass("sides-1-1");
    }else{
      removeActive();
      removePosition();
      $(".service__item--2").removeClass("sides-1-1");
      $(".service__item--3").addClass("service__active");
      $(".service__item--3").addClass("service__hover--1-2")
      $(".service__item--2").addClass("service__hover--2-1")
      $(".service__item--1").removeClass("sides-1-1");
      $(".service__item--1").removeClass("sides");
      $(".service__item--2").addClass("sides")
      $(".service__item--2").removeClass("sides-2-4");
    }
  }
)

$(".service__item--4").hover(
  function(){
    if(this.classList.contains('sides')){
      removeActive();
      removePosition();
      $(".service__item--4").addClass("service__active");
      $(".service__item--4").addClass("service__hover--1-2");
      $(".service__item--2").addClass("service__hover--1-4");
      $(".service__item--3").addClass("service__hover--2-1");
      $(".service__item--3").addClass("sides");
      $(".service__item--2").addClass("sides-2-4");
      $(".service__item--5").removeClass("sides-1-1");
      $(".service__item--2").removeClass("sides");
      $(".service__item--5").removeClass("sides");
    }else{
      removeActive();
      removePosition();
      //$(".service__item--2").removeClass("sides-1-1");
      $(".service__item--4").addClass("service__active");
      $(".service__item--4").addClass("service__hover--1-3");
      $(".service__item--5").addClass("service__hover--2-2");
      $(".service__item--2").addClass("service__hover--1-2");
      $(".service__item--3").addClass("service__hover--2-1");
      $(".service__item--5").addClass("sides");
      $(".service__item--2").removeClass("sides-2-4");
    }
  }
)

$(".service__item--5").hover(
  function(){
    if(this.classList.contains('sides')){
      removeActive();
      removePosition();
      $(".service__item--5").addClass("service__active");
      $(".service__item--5").addClass("service__hover--1-2");
      $(".service__item--2").addClass("service__hover--2-4");
      $(".service__item--3").addClass("service__hover--2-1");
      $(".service__item--2").addClass("sides-2-4");
      $(".service__item--2").removeClass("sides");
      //$(".service__item--2").removeClass("sides-1-1");
    }
    else if(this.classList.contains('sides-1-1')){
      removeActive();
      removePosition();
      $(".service__item--5").addClass("service__hover--1-2");
      $(".service__item--5").addClass("service__active");
      $(".service__item--4").addClass("service__hover--1-4");
      $(".service__item--2").addClass("service__hover--4-4");
      $(".service__item--3").addClass("service__hover--2-1");
      $(".service__item--4").removeClass("sides");
    }else{
      removeActive();
      removePosition();
      $(".service__item--5").addClass("service__active");
      $(".service__item--5").addClass("service__hover--1-3");
      $(".service__item--4").addClass("service__hover--2-2");
      $(".service__item--2").addClass("service__hover--1-2");
      $(".service__item--3").addClass("service__hover--2-1");
      $(".service__item--4").addClass("sides");
      $(".service__item--2").removeClass("sides-2-4");
    }
  }
)


function removeActive(){
  for (var i = 1; i < 6; i++){
    $(`.service__item--${i}`).removeClass("service__active");
  }
}

function removePosition(){
  for (var i = 1; i < 6; i++){
    for (var j = 1; j < 6; j++){
      $(`.service__item--${i}`).removeClass(`service__hover--${j}`);
      for (var l = 1; l < 5; l++){
        console.log()
        $(`.service__item--${i}`).removeClass(`service__hover--${j}-${l}`);
      }
    }
  }
}
var navToggle = document.querySelector(".header__toggle");
var mainNav = document.querySelector(".header__nav-wrapper");
var newsButton = document.querySelector(".news__button");
var newsLine = document.querySelector(".news__line--hide");
var newsCell = document.getElementById('hide-cell');

var cachedWidth = $(window).width();
$(window).resize(function(){
    var newWidth = $(window).width();
    if(newWidth !== cachedWidth){
      $(window).resize(function() {
        if(document.documentElement.clientWidth > 767) {
          mainNav.style.display = "flex";
        }
      });

      $(window).resize(function() {
        if(document.documentElement.clientWidth < 767) {
          mainNav.style.display = "none";
          navToggle.classList.remove('toggle_active');
        }
      });
        cachedWidth = newWidth;
    }
});

navToggle.addEventListener('click', function(){
  if (navToggle.classList.contains('toggle_active'))
  {
    $("#navigation").slideUp('300');
    navToggle.classList.remove('toggle_active');
  }
  else{
    $("#navigation").slideDown('300');
    navToggle.classList.add('toggle_active');
    mainNav.style.display = "flex";
  }
});

newsButton.addEventListener('click', function(){
  if (newsCell.classList.contains('news__cell--hide'))
  {
    if ($(window).width() < 768){
      $("#hide-line").slideDown('300');
    }
    $("#hide-cell").slideDown({
      start: function () {
        $(this).css({
          display: "flex"
        })
      }
    });
    newsCell.classList.remove('news__cell--hide');
    newsButton.textContent = "Скрыть";
  }
  else{
    $("#hide-line").slideUp('100');
    $("#hide-cell").slideUp('300');
    newsCell.classList.add('news__cell--hide');
    newsButton.textContent = "Показать все";
    if ($(window).width() < 768){
      newsCell.style.display = "none";
    }
  }
});

$(document).ready(function(){
  let position = 0;
  let slidesToShow = 1;
  const slidesToScroll = 1;
  const container = $('.slider-container');
  const track = $('.slider-track');
  const item = $('.slider-item');
  const btnPrev = $('.btn-prev');
  const btnNext = $('.btn-next');
  const itemsCount = item.length;
  let itemWidth = (container.width()) / slidesToShow;
  let movePosition = slidesToScroll * (itemWidth);


  var cachedWidth = $(window).width();
  $(window).resize(function () {
    var newWidth = $(window).width();
    if (newWidth !== cachedWidth) {
      $(window).resize(function () {
        if (document.documentElement.clientWidth > 750) {
        }
        if (document.documentElement.clientWidth < 750) {
        }
      });
      widthf();
      $(window).resize(function () {widthf()});
      cachedWidth = newWidth;
    }
  });

  function widthf(){
    itemWidth = (container.width()) / slidesToShow;
    movePosition = slidesToScroll * (itemWidth);
  }
  
  widthf();

  item.each(function(index, item){
    $(item).css({
        minWidth: itemWidth,
    });
  });

  btnPrev.click(function(){
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });
  btnNext.click(function(){
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth)  / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.css({
      transform: `translateX(${position}px)`
    });
  };

  const checkBtns = () => {
    btnPrev.prop('disabled', position === 0);
    btnNext.prop(
      'disabled',
      position <= -(itemsCount - slidesToShow) * itemWidth
    )
  }
  checkBtns();
});

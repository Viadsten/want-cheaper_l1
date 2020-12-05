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



const mediaQuery650 = window.matchMedia('(min-width: 650px)')
if (mediaQuery650.matches) {
  slidesToShow = 2;
  NewsResize();
}

const mediaQuery950 = window.matchMedia('(min-width: 950px)')
if (mediaQuery950.matches) {
  slidesToShow = 3;
  NewsResize();
}
const mediaQuery1200 = window.matchMedia('(min-width: 1200px)')
if (mediaQuery1200.matches) {
  slidesToShow = 4;
  NewsResize();
}

function NewsResize()
{
  itemWidth = (container.width()) / slidesToShow;
  movePosition = slidesToScroll * (itemWidth);
};

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

});

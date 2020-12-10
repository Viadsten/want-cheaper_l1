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

const mediaQuery1050 = window.matchMedia('(min-width: 1050px)')
if (mediaQuery1050.matches) {
  slidesToShow = 3;
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

$(document).ready(function(){
  let position1 = 0;
  let slidesToShow1 = 1;
  const slidesToScroll1 = 1;
  const container1 = $('.slider-container1');
  const track1 = $('.slider-track1');
  const item1 = $('.slider-item1');
  const btnPrev1 = $('.btn-prev1');
  const btnNext1 = $('.btn-next1');
  const itemsCount1 = item1.length;
  let itemWidth1 = (container1.width()) / slidesToShow1;
  let movePosition1 = slidesToScroll1 * (itemWidth1);



const mediaQuery6501 = window.matchMedia('(min-width: 650px)')
if (mediaQuery6501.matches) {
  slidesToShow1 = 3;
  NewsResize1();
}

const mediaQuery10501 = window.matchMedia('(min-width: 1050px)')
if (mediaQuery10501.matches) {
  slidesToShow1 = 4;
  NewsResize1();
}

function NewsResize1()
{
  itemWidth1 = (container1.width()) / slidesToShow1
  movePosition1 = slidesToScroll1 * (itemWidth1);
};

  item1.each(function(index, item){
    $(item).css({
        minWidth: itemWidth1,
    });
  });

  btnPrev1.click(function(){
    const itemsLeft = Math.abs(position1) / itemWidth1;

    position1 += itemsLeft >= slidesToScroll1 ? movePosition1 : itemsLeft * itemWidth1;
    setPosition1();
    checkBtns1();
  });
  btnNext1.click(function(){
    const itemsLeft = itemsCount1 - (Math.abs(position1) + slidesToShow1 * itemWidth1)  / itemWidth1;
    position1 -= itemsLeft >= slidesToScroll1 ? movePosition1 : itemsLeft * itemWidth1;
    setPosition1();
    checkBtns1();
  });

  const setPosition1 = () => {
    track1.css({
      transform: `translateX(${position1}px)`
    });
  };

  const checkBtns1 = () => {
    btnPrev1.prop('disabled', position1 === 0);
    btnNext1.prop(
      'disabled',
      position1 <= -(itemsCount1 - slidesToShow1) * itemWidth1
    )
  }

});
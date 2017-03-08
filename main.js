var elem = document.querySelector('.main-carousel');
var finalCarousel = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  prevNextButtons: false
});

var sliderTotal = document.querySelector('.slider-total');
sliderTotal.innerText = finalCarousel.slides.length;

var sliderCurrent = document.querySelector('.slider-current');
sliderCurrent.innerText = finalCarousel.selectedIndex+1;

var prevBtn = document.querySelector('.final-prev');
prevBtn.onclick = function() {
  finalCarousel.previous();
  sliderCurrent.innerText = finalCarousel.selectedIndex+1;
};

var nextBtn = document.querySelector('.final-next');
nextBtn.onclick = function() {
  finalCarousel.next();
  sliderCurrent.innerText = finalCarousel.selectedIndex+1;
};

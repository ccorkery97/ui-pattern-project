const slideshow = document.querySelector('.slideshow')
const slides = Array.from(slideshow.querySelectorAll('.slide'))
const slideCount = slides.length

const slideWidth = slides[0].getBoundingClientRect().width


rightButton = document.querySelector('.right')
rightButton.addEventListener('click', transitionSlide)

let currentSlide = 1;
let currentPosition =0;

let transformOption
function transitionSlide() {
  if (currentSlide < slideCount) {
    currentPosition -= slideWidth
    transformOption = `translateX(${currentPosition}px)`
    slideshow.style.transform = transformOption
    currentSlide++
  } 
}






const slideshow = document.querySelector('.slideshow')
const slides = Array.from(slideshow.querySelectorAll('.slide'))
const slideCount = slides.length

const slideWidth = slides[0].getBoundingClientRect().width


rightButton = document.querySelector('.right')
rightButton.addEventListener('click', transitionSlideRight)

leftButton = document.querySelector('.left')
leftButton.addEventListener('click', transitionSlideLeft)

let currentSlide = 1;
let currentPosition =0;

let transformOption
function transitionSlideRight() {
  if (currentSlide < slideCount) {
    currentPosition -= slideWidth
    transformOption = `translateX(${currentPosition}px)`
    slideshow.style.transform = transformOption
    currentSlide++
    changeButtonColor()
  }  
}

function transitionSlideLeft() {
    if (currentSlide > 1) {
        currentPosition += slideWidth
        transformOption = `translateX(${currentPosition}px)`
        slideshow.style.transform = transformOption
        currentSlide--
        changeButtonColor()
    }
}

function changeButtonColor() {
    if (currentSlide == 1) {
        leftButton.style.backgroundColor = "grey"
        rightButton.style.backgroundColor = "rgb(64,64,64)"
    } else if (currentSlide == slideCount) {
        leftButton.style.backgroundColor = "rgb(64,64,64)"
        rightButton.style.backgroundColor = "grey"
    } else if (currentSlide > 1) {
        leftButton.style.backgroundColor = "rgb(64,64,64)"
        rightButton.style.backgroundColor = "rgb(64,64,64)"
    } 
}

dadJokes = 'https://icanhazdadjoke.com/'
slideContents = document.querySelectorAll('.slideContent')

slideContents.forEach(element => { 
   fetch(dadJokes, {
    headers: {
        "Accept" : "application/json"
    }
})
    .then(unparsed=> unparsed.json())
    .then(data=> {
        element.textContent = data.joke
    })
});

function addSlide() {
    let extraSlide = document.createElement('li')
    let extraSlideContent = document.createElement('p')
    extraSlide.appendChild(extraSlideContent)
    slideshow.appendChild(extraSlide)
    extraSlide.classList.add('slide')
    extraSlideContent.classList.add('slideContent')
}


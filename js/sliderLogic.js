/**
 * TODO: Desarrollar el código del slider
 */

//Variable
let sliderTimerId;

//Selectors
const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let lastSliderSection = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

//Preparing images for slider logic
slider.insertAdjacentElement('afterbegin', lastSliderSection);

//Slider button logic
const nextSlide = () => {
    let firstSliderSection = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(()=> {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', firstSliderSection);
        slider.style.marginLeft = '-100%'
    }, 500);

    //Reset timer when slider button clicked
    clearInterval(sliderTimerId);
    sliderTimerId = startSlideTimer(4000);
}

const previousSlide = () => {
    let sliderSection = document.querySelectorAll('.slider__section');
    let lastSliderSection = sliderSection[sliderSection.length-1];

    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';
    
    setTimeout(()=> {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', lastSliderSection);
        slider.style.marginLeft = '-100%';
    }, 500);
    
    //Reset timer when slider button clicked
    clearInterval(sliderTimerId);
    sliderTimerId = startSlideTimer(4000);
    
}

//Slider Timer Login
const startSlideTimer = (msTime)=> {
    if(sliderTimerId){
        clearInterval(sliderTimerId);
    }
    return setInterval(() =>{nextSlide() }, msTime);
}

//Button event listeners
btnRight.addEventListener('click', () => nextSlide());
btnLeft.addEventListener('click', () => previousSlide());

//Starting slider timer
sliderTimerId = startSlideTimer(4000);


/**
 * TODO: Desarrollar el código para cargar productos por Ajax
 */

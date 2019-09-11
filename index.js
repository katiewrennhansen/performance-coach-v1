'use strict';

//VARIABLES
const toggleBtn = document.querySelector('.toggle-button');
const collapse = document.querySelector('.collapse-content');
const navLinks = document.querySelectorAll('.nav-link');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const controls = document.querySelectorAll('.image-controls');
const auto = true;
const intervalTime = 5000;
let slideInterval;



//FUNCTIONS

//toggle nav 
function navToggle(){
    toggleBtn.classList.toggle('cross');
    collapse.classList.toggle('toggle');
}

//hide nav
function hideNav(){
    collapse.classList.remove('toggle');
    toggleBtn.classList.remove('cross');
}


//click next button to go to next slide
function nextSlide(){
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
       slides[0].classList.add('current'); 
    }
    setTimeout(() => current.classList.remove('current'), 200);
}


//click previous button to go to next slide
function prevSlide(){
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
       slides[slides.length - 1].classList.add('current'); 
    }
    setTimeout(() => current.classList.remove('current'), 200);
}


//auto slide on page load
function autoSlide(){
    if(auto) {
        slideInterval = setInterval(nextSlide, intervalTime);
    }
}



//EVENT LISTENERS
toggleBtn.addEventListener('click', navToggle);
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

navLinks.forEach(link => {
    link.addEventListener('click', hideNav);
});





//FUNCTION CALL
autoSlide();

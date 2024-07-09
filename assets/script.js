"use strict";

//! ************ CONSTANTS ************

const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
]

const LENGTH = slides.length;
const URL = "./assets/images/slideshow/";

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const image = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dots = document.querySelector(".dots");

//! ************ VARIABLE ************

let currentSlide = 0;
let allDots;

//! ************ FUNCTIONS ************

/**
 * Update the styling of dots to indicate the current slide.
 */
const updateDots = () => {
  for (let i = 0; i < allDots.length; i++) {
    allDots[i].classList.remove("dot_selected"); 
  }

  allDots[currentSlide].classList.add("dot_selected");
}

/**
 * Updates the slider by setting the image source and tag line based on the current slide.
 * Also updates the dots to indicate the current slide.
 */
const updateSlider = () => {
  image.setAttribute('src', URL + slides[currentSlide].image);
  tagLine.innerHTML = slides[currentSlide].tagLine;
  
  updateDots();
}

/**
 * Adds dots to the dots container element based on the number of slides.
 * Each dot is created as a span element with the class "dot". The dots are
 * appended to the dots container element. After adding the dots, the function
 * selects the first dot element and adds the class "dot_selected" to it.
 */
const addDots = () => {
  for (const slide of slides) {
    const addDot = document.createElement("span");
    addDot.classList = "dot";
    dots.appendChild(addDot);

    allDots = document.getElementsByClassName("dot");
    document.querySelector(".dot").classList.add("dot_selected");
  }
}

/**
 * Updates the current slide to the previous slide.
 * Sets the tag line and image source based on the new slide.
 * Calls the updateDots function to indicate the current slide.
 */
const slideLeft = () => {
  currentSlide = (currentSlide + LENGTH - 1) % LENGTH;
  tagLine.innerHTML = slides[currentSlide].tagLine;

  image.setAttribute('src', URL + slides[currentSlide].image);
  updateDots();
}

/**
 * Updates the current slide to the next slide.
 * Sets the tag line and image source based on the new slide.
 * Calls the updateDots function to indicate the current slide.
 */
const slideRight = () => {
  currentSlide = (currentSlide + 1) % LENGTH;
  tagLine.innerHTML = slides[currentSlide].tagLine;

  image.setAttribute('src', URL + slides[currentSlide].image);
  updateDots();
}

/**
 * Adds event listeners to arrowRight and arrowLeft elements.
 */
const addListeners = () => {
  arrowRight.addEventListener("click", slideRight);
  arrowLeft.addEventListener("click", slideLeft);
}

//! ************ MAIN ************

addDots();
addListeners();
updateSlider();

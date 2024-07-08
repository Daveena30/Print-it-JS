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

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const image = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dots = document.querySelector(".dots");

//! ************ VARIABLE ************

let currentSlide = 0;
let allDots;

//! ************ FUNCTIONS ************

function updateDots() {
  // TODO: ecrire le code pour mettre a jour les points
 
  for (let i = 0; i < allDots.length; i++) {
    allDots[i].classList.remove("dot_selected");
  }

  allDots[currentSlide].classList.add("dot_selected");
}

function updateSlider() {
  // TODO: ecrire le code pour mettre a jour le slider

  image.setAttribute('src', URL + slides[currentSlide].image);
  tagLine.innerHTML = slides[currentSlide].tagLine;
  
  updateDots();
  
}

function addDots() {
  // TODO: ecrire le code pour ajouter les points
  for (const slide of slides) {
    const addDot = document.createElement("span");
    addDot.classList = "dot";
    dots.appendChild(addDot);

    allDots = document.getElementsByClassName("dot");
    document.querySelector(".dot").classList.add("dot_selected");
  }
}



function slideLeft() {
  // TODO: ecrire le code pour faire glisser le slider vers la gauche
  currentSlide = (currentSlide + LENGTH - 1) % LENGTH;
  tagLine.innerHTML = slides[currentSlide].tagLine;

  image.setAttribute('src', URL + slides[currentSlide].image);
  updateDots();

}

function slideRight() {
  // TODO: ecrire le code pour faire glisser le slider vers la droite
  currentSlide = (currentSlide + 1) % LENGTH;
  tagLine.innerHTML = slides[currentSlide].tagLine;

  image.setAttribute('src', URL + slides[currentSlide].image);
  updateDots();

}

function addListeners() {
  // TODO: ecrire le code pour ajouter les listeners sur les boutons
  arrowRight.addEventListener("click", slideRight);
  arrowLeft.addEventListener("click", slideLeft);
}

//! ************ MAIN ************

addDots();
addListeners();
updateSlider();

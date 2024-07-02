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

let index = 0;

//! ************ FUNCTIONS ************

const updateDots = () => {
  // TODO: ecrire le code pour mettre a jour les points
}

const updateSlider = () => {
  // TODO: ecrire le code pour mettre a jour le slider
}

const addDots = () => {
  // TODO: ecrire le code pour ajouter les points sur le slider
}

const slideLeft = () => {
  // TODO: ecrire le code pour faire glisser le slider vers la gauche
}

const slideRight = () => {
  // TODO: ecrire le code pour faire glisser le slider vers la droite
}

const addListeners = () => {
  // TODO: ecrire le code pour ajouter les listeners sur les boutons
}

//! ************ MAIN ************

addDots();
addListeners();

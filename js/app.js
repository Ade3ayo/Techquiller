"use strict";

let section = document.querySelectorAll("section");
let navbar = document.querySelectorAll("header nav a");
let resumeBtns = document.querySelectorAll(".resume-btn");
let resumeDetails = document.querySelectorAll(".resume-details");
let arrowRight = document.querySelector(".navigation .arrow-right");
let arrowLeft = document.querySelector(".navigation .arrow-left");
let menu = document.querySelector("#menu-icon");
let nav = document.querySelector("header nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  menu.classList.toggle("bx-x");
});

window.addEventListener("scroll", () => {
  nav.classList.remove("active");
  menu.classList.remove("bx-x");
});

navbar.forEach((nav, idx) => {
  nav.addEventListener("click", () => {
    navbar.forEach((nav) => {
      nav.classList.remove("active");
    });
    nav.classList.add("active");
    section.forEach((sec) => {
      sec.classList.remove("active");
    });
    section[idx].classList.add("active");
  });
});

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    btn.classList.add("active");
    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });

    resumeDetails[idx].classList.add("active");
  });
});

let index = 0;

let activePort = () => {
  let slider = document.querySelector(".portfolio-carousel .image-slide");
  let portfolioDetails = document.querySelectorAll(".portfolio-details");

  slider.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;
  console.log("working");

  portfolioDetails.forEach((details) => {
    details.classList.remove("active");
  });

  portfolioDetails[index].classList.add("active");
};

arrowRight.addEventListener("click", () => {
  if (index < 1) {
    index++;
    arrowLeft.classList.remove("disabled");
  } else {
    index = 2;
    arrowRight.classList.add("disabled");
  }
  activePort();
});
arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }
  activePort();
});

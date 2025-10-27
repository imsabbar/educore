'use strict';



/**
 * add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  circle.style.animation = "none";
  document.body.classList.add("loaded");
});



/**
 * NAVBAR TOGGLER FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * 
 * add active class on header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", headerActive);



/**
 * FAQ ACCORDION
 */

const faqToggles = document.querySelectorAll("[data-faq-toggle]");

const toggleFaq = function () {
  const faqItem = this.parentElement;
  faqItem.classList.toggle("active");
}

addEventOnElements(faqToggles, "click", toggleFaq);



/**
 * STATS COUNTER ANIMATION
 */

const statsNumbers = document.querySelectorAll("[data-count]");
let hasAnimated = false;

const animateCount = function (element) {
  const target = parseFloat(element.getAttribute("data-count"));
  const isDecimal = element.hasAttribute("data-decimal");
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60fps
  let current = 0;

  const updateCount = function () {
    current += increment;
    
    if (current < target) {
      if (isDecimal) {
        element.textContent = current.toFixed(1);
      } else {
        element.textContent = Math.floor(current).toLocaleString();
      }
      requestAnimationFrame(updateCount);
    } else {
      if (isDecimal) {
        element.textContent = target.toFixed(1) + "/5";
      } else {
        element.textContent = target.toLocaleString() + "+";
      }
    }
  };

  updateCount();
};

const checkStatsScroll = function () {
  if (hasAnimated) return;

  const statsSection = document.querySelector(".stats");
  if (!statsSection) return;

  const rect = statsSection.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

  if (isVisible) {
    hasAnimated = true;
    statsNumbers.forEach(animateCount);
  }
};

window.addEventListener("scroll", checkStatsScroll);
window.addEventListener("load", checkStatsScroll);

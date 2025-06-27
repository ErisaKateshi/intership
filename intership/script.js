
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
document.addEventListener('DOMContentLoaded', () => {
  const searchIcon = document.querySelector('.icon-search');
  const searchBox = document.querySelector('.search-box');

  if (!searchIcon || !searchBox) {
    console.error('Elementet nuk u gjeten ne DOM!');
    return;
  }

  searchIcon.addEventListener('click', (e) => {
    e.preventDefault();
    searchBox.classList.toggle('hidden');
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  let isPaused = false;
  const slides = document.querySelectorAll('.hero-carousel .slide');
  const dots = document.querySelectorAll('.dot');
  const pauseIcon = document.querySelector('.pause-icon');

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function nextSlide() {
    if (!isPaused) {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  }

  let slideInterval = setInterval(nextSlide, 5000);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(index);
    });
  });

  pauseIcon.addEventListener('click', () => {
    isPaused = !isPaused;
    pauseIcon.innerHTML = isPaused ? '&#9658;' : '&#10073;&#10073;';
  });
});

let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    header.style.top = "-155px";
  } else {
    header.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const tabs = document.querySelectorAll('.tab-button');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    // Optional: show related content
  });
});


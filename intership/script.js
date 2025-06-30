const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  overlay.classList.toggle('hidden');
});


overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.add('hidden');
});


navLinks.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    navLinks.classList.remove('active');
    overlay.classList.add('hidden');
  }
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
    
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 600,
    allowTouchMove: true,
    watchSlidesProgress: true,
    
    autoplayDisableOnInteraction: false,
    
    breakpoints: {
      320: {
        autoplay: {
          delay: 1200,
        }
      },
      768: {
        autoplay: {
          delay: 1500,
        }
      },
      1024: {
        autoplay: {
          delay: 1800,
        }
      }
    }
  });

 
  setTimeout(() => {
    if (testimonialsSwiper.autoplay) {
      testimonialsSwiper.autoplay.start();
    }
  }, 500);

  
  const prevButton = document.querySelector('.prev-arrow');
  const nextButton = document.querySelector('.next-arrow');

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      testimonialsSwiper.slidePrev();
      
      setTimeout(() => {
        testimonialsSwiper.autoplay.start();
      }, 300);
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      testimonialsSwiper.slideNext();
      
      setTimeout(() => {
        testimonialsSwiper.autoplay.start();
      }, 300);
    });
  }

  
  const testimonialsSection = document.querySelector('.testimonials-section');
  if (testimonialsSection) {
    testimonialsSection.addEventListener('mouseenter', () => {
      if (testimonialsSwiper.autoplay) {
        testimonialsSwiper.autoplay.stop();
      }
    });
    
    testimonialsSection.addEventListener('mouseleave', () => {
      if (testimonialsSwiper.autoplay) {
        testimonialsSwiper.autoplay.start();
      }
    });
  }

 
  testimonialsSwiper.on('touchStart', function() {
    if (testimonialsSwiper.autoplay) {
      testimonialsSwiper.autoplay.stop();
    }
  });

  testimonialsSwiper.on('touchEnd', function() {
    setTimeout(() => {
      if (testimonialsSwiper.autoplay) {
        testimonialsSwiper.autoplay.start();
      }
    }, 1000);
  });

  
  console.log('Swiper initialized with autoplay:', testimonialsSwiper.autoplay);
});


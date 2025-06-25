
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

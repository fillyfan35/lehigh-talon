export function hamburgerX() {
  // this function set changes the hamburger to and 'X' and vice-versa
  let navToggle = document.querySelector('.nav-toggle');
  let searchIcon = document.querySelector('.search .search_btn');
  let bars = document.querySelectorAll('.bar');

  function toggleHamburger(e) {
    bars.forEach(bar => bar.classList.toggle('x'))
  }

  navToggle.addEventListener('click', toggleHamburger);
  searchIcon.addEventListener('click', toggleHamburger);
}
document.addEventListener("DOMContentLoaded", function () {

  function handleScroll() {
    // this function adds the class 'scrolling' to the header when the page scrolls
    let header = document.querySelector('header');
    if (window.scrollY >= 25) {
      header.classList.add('scrolling');
    } else {
      header.classList.remove('scrolling');
    }
  }
  document.addEventListener('scroll', handleScroll);

  function focusSearch() {
    // this function assigns focus to the search box when search icon selected
    let searchIcon = document.querySelector('.search .search_btn');
    let searchBox = document.querySelector('.main_nav .search_box');

    if (searchIcon) {
      searchIcon.addEventListener('click', function () {
        searchBox.focus();
      });
    }
  }

  function hamburgerX() {
    // this function set changes the hamburger to and 'X' and vice-versa
    let navToggle = document.querySelector('.nav-toggle')
    let bars = document.querySelectorAll('.bar')

    function toggleHamburger(e) {
      bars.forEach(bar => bar.classList.toggle('x'))
    }

    navToggle.addEventListener('click', toggleHamburger)
  }

  function headerHeight() {
    // this function sets the offset for the menu based on how tall the header is
    let header_height = document.querySelector('header').offsetHeight;
    let navbarCollapse = document.querySelector('.navbar-collapse');

    navbarCollapse.style.top = header_height + 'px';
  }

  window.addEventListener('resize', headerHeight);

  // Initial check in case the page is already scrolled when the script is executed
  handleScroll();
  focusSearch();
  hamburgerX();
  headerHeight();
});
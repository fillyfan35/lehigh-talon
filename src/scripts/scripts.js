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

    searchIcon.addEventListener('click', function () {
      searchBox.focus();
      document.body.classList.toggle('no-scroll');
    });
  }

  function hamburgerX() {
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

  function headerHeight() {
    // this function sets the offset for the menu based on how tall the header is
    let header_height = document.querySelector('header').offsetHeight;
    let navbarCollapse = document.querySelector('.navbar-collapse');

    navbarCollapse.style.top = header_height - 27 + 'px';
  }

  // window.addEventListener('resize', headerHeight);
  // window.addEventListener('scroll', headerHeight);

  function stopScroll() {
    let navbarToggler = document.querySelector('.navbar-toggler');

    navbarToggler.addEventListener('click', function () {
      document.body.classList.toggle('no-scroll');

      let header = document.querySelector('header');

      // change the height to smaller height when clicked
      header.classList.toggle('scrolling');
    });
  }

  // Initial check in case the page is already scrolled when the script is executed
  handleScroll();
  focusSearch();
  hamburgerX();
  headerHeight();
  stopScroll();
});
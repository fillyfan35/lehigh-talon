document.addEventListener("DOMContentLoaded", function () {

  function handleScroll() {
    // this function adds the class 'scrolling' to the header when the page scrolls
    let header = document.querySelector('header');
    if (window.scrollY >= 40) {
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
    });
  }

  function hamburgerX() {
    // this function set changes the hamburger to and 'X' and vice-versa
    let navToggle = document.querySelector('.nav-toggle');
    let searchIcon = document.querySelector('.search .search_btn');
    let bars = document.querySelectorAll('header .bar');

    function toggleHamburger(e) {
      bars.forEach(bar => bar.classList.toggle('x'));
    }

    navToggle.addEventListener('click', toggleHamburger);
    searchIcon.addEventListener('click', toggleHamburger);
  }

  function hamburgerSideX() {
    // toggle side nav on mobile
    let sideNavToggle = document.querySelector('.sidebar .nav-toggle');
    let sideBars = document.querySelectorAll('.sidebar .bar');
    let sideNav = document.querySelector('.sidebar .sidebar-nav ul');

    function toggleSideHamburger(e) {
      sideBars.forEach(bars => bars.classList.toggle('x'));

      // toggle show class
      sideNav.classList.toggle('show');
    }

    sideNavToggle.addEventListener('click', toggleSideHamburger);
  }

  function headerHeight() {
    // this function sets the offset for the menu based on how tall the header is
    let header_height = document.querySelector('header').offsetHeight;
    let navbarCollapse = document.querySelector('.navbar-collapse');

    let screenWidth = window.screen.width;

    if (screenWidth < 768) {
      navbarCollapse.style.top = header_height + 'px';
    } else {
      navbarCollapse.style.top = header_height - 20 + 'px';
    }
  }

  function stopScroll() {
    let navbarToggler = document.querySelector('.navbar-toggler');
    let searchbarToggler = document.querySelector('.search_btn');
    let main_nav = document.querySelector('.main_nav_wrapper');
    let dropdownMenus = document.querySelectorAll('.dropdown-menu');
    let dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    navbarToggler.addEventListener('click', function () {
      document.body.classList.toggle('no_scroll');
      main_nav.classList.toggle('show');
      dropdownMenus.forEach(function (dropdownMenu) {
        dropdownMenu.classList.remove('show');
      });
      dropdownToggles.forEach(function (dropdownToggle) {
        dropdownToggle.setAttribute('aria-expanded', 'false');
      });
    });

    searchbarToggler.addEventListener('click', function () {
      document.body.classList.toggle('no_scroll');
      main_nav.classList.toggle('show');
      dropdownMenus.forEach(function (dropdownMenu) {
        dropdownMenu.classList.remove('show');
      });
      dropdownToggles.forEach(function (dropdownToggle) {
        dropdownToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initializeDropdownToggles() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function (event) {
        event.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        const isOpen = dropdownMenu.classList.contains('show');

        // Close other dropdown menus and set aria-expanded to false
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          if (menu !== dropdownMenu) {
            menu.classList.remove('show');
            const toggle = menu.previousElementSibling;
            toggle.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle the current dropdown menu
        if (isOpen) {
          dropdownMenu.classList.remove('show');
          this.setAttribute('aria-expanded', 'false');
        } else {
          dropdownMenu.classList.add('show');
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }



  // Initial check in case the page is already scrolled when the script is executed
  handleScroll();
  hamburgerX();
  hamburgerSideX();
  headerHeight();
  stopScroll();
  initializeDropdownToggles();
  focusSearch();
});
export function stopScroll() {
  let navbarToggler = document.querySelector('.navbar-toggler');
  let searchbarToggler = document.querySelector('.search_btn');
  let main_nav = document.querySelector('.main_nav_wrapper');
  let dropdownMenus = document.querySelectorAll('.dropdown-menu');
  let dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  function toggleScrollAndMenu() {
    document.body.classList.toggle('no_scroll');
    main_nav.classList.toggle('show');
    dropdownMenus.forEach(function (dropdownMenu) {
      dropdownMenu.classList.remove('show');
    });
    dropdownToggles.forEach(function (dropdownToggle) {
      dropdownToggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Check if event listeners are already added before adding them
  if (navbarToggler && !navbarToggler.hasAttribute('data-click-listener')) {
    navbarToggler.setAttribute('data-click-listener', 'true');
    navbarToggler.addEventListener('click', function () {
      toggleScrollAndMenu();
    });
  }

  if (searchbarToggler && !searchbarToggler.hasAttribute('data-click-listener')) {
    searchbarToggler.setAttribute('data-click-listener', 'true');
    searchbarToggler.addEventListener('click', function () {
      toggleScrollAndMenu();
    });
  }
}

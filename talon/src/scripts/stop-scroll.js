export function stopScroll() {
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
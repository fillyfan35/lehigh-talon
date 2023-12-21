document.addEventListener("DOMContentLoaded", function () {

  function handleScroll() {
    let header = document.querySelector('header');
    if (window.scrollY >= 25) {
      header.classList.add('scrolling');
    } else {
      header.classList.remove('scrolling');
    }
  }
  document.addEventListener('scroll', handleScroll);

  function focusSearch() {
    let searchIcon = document.querySelector('.search .search_btn');
    let searchBox = document.querySelector('.main_nav .search_box');

    if (searchIcon) {
      searchIcon.addEventListener('click', function () {
        searchBox.focus();
      });
    }
  }

  // Initial check in case the page is already scrolled when the script is executed
  handleScroll();
  focusSearch();
});
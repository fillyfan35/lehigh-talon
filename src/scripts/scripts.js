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

  function showSearch(e) {
    e.preventDefault();
    let headerSearch = document.getElementsByClassName('header-search');

  }

  // Initial check in case the page is already scrolled when the script is executed
  handleScroll();
  showSearch();
});
export function headerHeight() {
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
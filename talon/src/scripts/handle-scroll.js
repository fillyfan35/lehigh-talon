export function handleScroll() {
  // this function adds the class 'scrolling' to the header when the page scrolls
  let header = document.querySelector('header');
  if (window.scrollY >= 40) {
    header.classList.add('scrolling');
  } else {
    header.classList.remove('scrolling');
  }
}
document.addEventListener('scroll', handleScroll);
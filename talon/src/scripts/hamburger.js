let eventListenerAdded = false;

export function hamburgerX() {
  // Check if the event listener is already added
  if (!eventListenerAdded) {
    let navToggle = document.querySelector('.nav-toggle');
    let searchIcon = document.querySelector('.search .search_btn');
    let bars = document.querySelectorAll('header .bar');

    function toggleHamburger(e) {
      bars.forEach(bar => {
        bar.classList.toggle('x');
      });
    }

    navToggle.addEventListener('click', toggleHamburger);
    searchIcon.addEventListener('click', toggleHamburger);

    eventListenerAdded = true; // Update the flag
  }
}

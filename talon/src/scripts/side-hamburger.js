let eventListenerAdded = false;

export function hamburgerSideX() {
  // Check if the event listener is already added
  if (!eventListenerAdded) {
    let sideNavToggle = document.querySelector('.sidebar .nav-toggle');
    let sideBars = document.querySelectorAll('.sidebar .bar');
    let sideNav = document.querySelector('.sidebar .sidebar-nav ul');

    if (sideNavToggle && sideBars.length > 0 && sideNav) {
      function toggleHamburger(e) {
        sideBars.forEach(bars => {
          bars.classList.toggle('x');
        });

        // toggle show class
        sideNav.classList.toggle('show');
      }

      sideNavToggle.addEventListener('click', toggleHamburger);
      eventListenerAdded = true; // Update the flag
    } else {
      console.error("Required elements not found in the DOM.");
    }
  }
}
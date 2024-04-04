let eventListenerAdded = false;

export function hamburgerSideX() {
  // Check if the event listener is already added
  if (!eventListenerAdded) {
    let sideNavToggle = document.querySelector('.sidebar .nav-toggle');
    let sideBars = document.querySelectorAll('.sidebar .bar');
    let sideNav = document.querySelector('.sidebar .sidebar-nav ul');

    function toggleHamburger(e) {
      sideBars.forEach(bar => {
        bar.classList.toggle('x');
      });

      // toggle show class
      sideNav.classList.toggle('show');
    }

    sideNavToggle.addEventListener('click', toggleHamburger);

    eventListenerAdded = true; // Update the flag
  }
}

export function initializeDropdownToggles() {
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
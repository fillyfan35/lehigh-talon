export function focusSearch() {
  // this function assigns focus to the search box when search icon selected
  let searchIcon = document.querySelector('.search .search_btn');
  let searchBox = document.querySelector('.main_nav .search_box');

  searchIcon.addEventListener('click', function () {
    searchBox.focus();
  });
}
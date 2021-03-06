window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header-navigation__list'),
      menuItem = document.querySelectorAll('.header-navigation__list-item'),
      hamburger = document.querySelector('.header__burger-button');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header__burger-button--active');
    menu.classList.toggle('header-navigation__list--active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('header__burger-button--active');
      menu.classList.toggle('header-navigation__list--active');
    })
  })
})
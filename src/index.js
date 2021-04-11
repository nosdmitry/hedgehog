import './index.scss';
import $ from 'jquery';
import 'slick-carousel';

global.jQuery = $;
global.$ = $;
console.log('Hello!');

$('.cards__list').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  prevArrow: '<div class="cards__arrow cards__arrow_type_left" aria-label="Влево"></div>',
  nextArrow: '<div class="cards__arrow cards__arrow_type_right" aria-label="Вправо"></div>',
});

// $(document).ready(function(){
//   // $('.slick-carousel').slick({
//   //   dots: false,
//   //   infinite: true,
//   //   arrows: true,
//   //   speed: 300,
//   //   slidesToShow: 1,
//   //   centerMode: true,
//   //   variableWidth: true,
//   // });

//   $('.slick-carousel').slick({
//     dots: true,
//     arrows: true,
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 2
//   });
  
// });

const menuContainer = document.querySelector('.menu_place_header');
const menuOpenButton = document.querySelector('.header__mobile-menu-button');
const menuCloseButton = document.querySelector('.menu__close-button');
const catalogButton = document.querySelector('.menu__list-item_type_catalog');
const submenuContainer = document.querySelector('.menu__catalog');

function toggleCatalogSubmenu() {
  submenuContainer.classList.toggle('menu_place_header_opened');
  if(submenuContainer.classList.contains('menu_place_header_opened')) {
    catalogButton.classList.add('menu__list-item_type_catalog-active');
  } else {
    catalogButton.classList.remove('menu__list-item_type_catalog-active');
  }
}

function openMenu() {
  console.log('click');
  menuContainer.classList.add('menu_place_header_opened');
}

function closeMenu() {
  menuContainer.classList.remove('menu_place_header_opened');
  submenuContainer.classList.remove('menu_place_header_opened');
  catalogButton.classList.remove('menu__list-item_type_catalog-active');
}

menuOpenButton.addEventListener('click', () => {
  openMenu();
});
menuCloseButton.addEventListener('click', () => {
  closeMenu();
});
catalogButton.addEventListener('click', () => {
  toggleCatalogSubmenu();
});
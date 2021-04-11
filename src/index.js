import './index.scss';
import $ from 'jquery';
import 'slick-carousel';

global.jQuery = $;
global.$ = $;
console.log('Hello!');

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

function openMenu() {
  console.log('click');
  menuContainer.classList.add('menu_place_header_opened');
}

function closeMenu() {
  menuContainer.classList.remove('menu_place_header_opened');
}

menuOpenButton.addEventListener('click', () => {
  openMenu();
});
menuCloseButton.addEventListener('click', () => {
  closeMenu();
});
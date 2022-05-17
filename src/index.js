// import './js/preloader.js';
import 'normalize.css'
import './index.html';
import './js/swiper.js';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './js/swiper-bundle.min.js';
import Swiper, { Navigation, Pagination } from 'swiper';

import './styles/main.scss';
import './js/scroll.js';
import './js/fix-header.js';
import './js/select.js';
import './js/btn-up';

// Swiper свайпер
var swiper = new Swiper(".mySwiper", {
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination',
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, Pagination],
  breakpoints: {
      320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 1
      },
      768: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 1
      },
      1121: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 3
      }
  }
});
import MyImage from './images/up.svg'
// import smoothscroll from 'smoothscroll-polyfill';
// import * as smoothscroll from 'smoothscroll-polyfill';
// smoothscroll.polyfill();


const theme = document.querySelector('.theme');
theme.addEventListener('click', () => {  
  body.classList.toggle("black_th");
});

let burger = document.querySelector('.burger-btn__open');
let menu = document.querySelector('.modal__mb');
let burgerclose = document.querySelector('.burger-btn__close');
const headerMb = document.querySelector('.header');
const body = document.body;

if (burger && menu) {
  burger.onclick = () => {
    menu.classList.toggle('burger_active')
    body.classList.add("_locked");
    headerMb.classList.add("dropdown__input-hidden"); 
  }
}
burgerclose.addEventListener('click', () => {
  menu.classList.remove('burger_active')
  body.classList.remove("_locked");
  headerMb.classList.remove("dropdown__input-hidden"); 
});

menu.addEventListener('click', e => {
  if (!e.target.classList.contains('modal__mb_window')) {
    menu.classList.remove('burger_active');
    body.classList.remove("_locked");
    headerMb.classList.remove("dropdown__input-hidden"); 
  }
})

  const modalBtns =    document.querySelectorAll('._modal-open'); 
  const modals =      document.querySelectorAll('._modal'); 
  // const body = document.body; 
  function openModal(elem) {
    elem.classList.add('_active');
    body.classList.add('_locked')
    headerMb.classList.add("dropdown__input-hidden"); 
  } function closeModal(e) {
    if
      (e.target.classList.contains('modal-close') ||
      e.target.closest('.modal-close') || e.target.classList.contains('modal-bg')) {
      e.target.closest('._modal').classList.remove('_active');
      body.classList.remove('_locked')
      headerMb.classList.remove("dropdown__input-hidden"); 
    }
  } modalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let data =
        e.target.dataset.modalOpen; modals.forEach(modal => {
          if
            (modal.dataset.modal == data || modal.dataset.modal ==
            e.target.closest('._modal-open').dataset.modalOpen) { openModal(modal) }
        })
    })
  }); modals.forEach(modal => {
    modal.addEventListener('click', e =>
      closeModal(e))
  }); window.addEventListener('keydown', e => {
    modals.forEach(modal => {
      if (e.key === "Escape" &&
        modal.classList.contains('_active')) {
        modal.classList.remove('_active');
        body.classList.remove('_locked');
        headerMb.classList.remove("dropdown__input-hidden"); 
      }
    })
  })

import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';
import $ from 'jquery';
import './js/select.js';
import './js/btn-up';
import Swiper, { Navigation, Pagination } from 'swiper';


const theme = document.querySelector('.theme');
theme.addEventListener('click', () => {  
  body.classList.toggle("black_th");
});
// scroll 
const header = document.querySelector('.header');
const page = document.querySelector('main');


window.addEventListener('wheel', function(evt) {
  if(evt.deltaY < 0) {
    //  console.log('поймали: ');
    header.classList.add('fix-header')
    page.style.marginTop = header.clientHeight + 'px';
  } else {
    header.classList.remove('fix-header')
      page.style.marginTop = 0;
    }
 
});
// header.contains
header.addEventListener('click', () => {  

  
  header.classList.remove('fix-header')
      page.style.marginTop = 0;
});

// Swiper свайпер
var swiper = new Swiper(".offerSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 1
    },
    1121: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 3
    }
  }
});
// trands
var swiper = new Swiper(".trandsSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 1
    }
  }
});

let burger = document.querySelector('.burger-btn__open');
let menu = document.querySelector('.modal__mb');
let burgerclose = document.querySelector('.burger-btn__close');
const body = document.body;

if (burger && menu) {
  burger.onclick = () => {
    menu.classList.toggle('burger_active')
    body.classList.add("_locked");
  }
}
burgerclose.addEventListener('click', () => {
  menu.classList.remove('burger_active')
  body.classList.remove("_locked");
});

menu.addEventListener('click', e => {
  if (!e.target.classList.contains('modal__mb_window')) {
    menu.classList.remove('burger_active')
  }
})
{
  const modalBtns =    document.querySelectorAll('._modal-open'); 
  const modals =      document.querySelectorAll('._modal'); 
  const body = document.body; 
  function openModal(elem) {
    elem.classList.add('_active');
    body.classList.add('_locked')
  } function closeModal(e) {
    if
      (e.target.classList.contains('modal-close') ||
      e.target.closest('.modal-close') || e.target.classList.contains('modal-bg')) {
      e.target.closest('._modal').classList.remove('_active');
      body.classList.remove('_locked')
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
      }
    })
  })
}
const header = document.querySelector('.header');
const page = document.querySelector('main');

function fixHeader() {
    if (window.scrollY > header.clientHeight) {
      header.classList.add('fix-header')
      page.style.marginTop = header.clientHeight + 'px';
    } else {
      header.classList.remove('fix-header')
      page.style.marginTop = 0;
    }
  }
  
  window.addEventListener('scroll', fixHeader)
// Button Up
document.addEventListener('DOMContentLoaded', () => {
    let toTopBtn = document.querySelector('.to-up');
    window.onscroll = function () {
        if (window.pageYOffset > 580) {
            toTopBtn.classList.add('visible')
        } else {
            toTopBtn.classList.remove('visible')
        }
    }
    // плавный скролл наверх 
    toTopBtn.addEventListener('click', function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });
});
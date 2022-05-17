// плавная прокрутка
// const anchors = document.querySelectorAll('a.scroll-to')
const anchors = document.querySelectorAll('.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            // block: 'center'
            
        })
    })
    // console.log(blockID);
}
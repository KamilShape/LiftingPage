//Hamburger

const hamburgerSquare = document.querySelector('.menu__hamburger')
const menuList = document.querySelector('.menu__list')
const topBar = document.querySelector('.menu__bar--top')
const middleBar = document.querySelector('.menu__bar--middle')
const bottomBar = document.querySelector('.menu__bar--bottom')



hamburgerSquare.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--visible')
    topBar.classList.toggle('menu__bar-rotate-plus')
    middleBar.classList.toggle('menu__bar-disappear')
    bottomBar.classList.toggle('menu__bar-rotate-minus')

})

window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        menuList.classList.add('menu__list--visible')
    } else {
        menuList.classList.remove('menu__list--visible')
    }
});
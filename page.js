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
        topBar.classList.remove('menu__bar-rotate-plus')
        middleBar.classList.remove('menu__bar-disappear')
        bottomBar.classList.remove('menu__bar-rotate-minus')
    }
});
const belt = document.querySelector('.item__belt')
const body = document.querySelector('body')
window.addEventListener('scroll', function (e) {
    const bodyHeight = document.querySelector('body').clientHeight
    let beltSize = window.scrollY / (bodyHeight - window.innerHeight) * 100
    belt.style.width = `${beltSize}%`
})
const hambButton = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const topBar = document.querySelector('.hamburger__bar-top')
const middleBar = document.querySelector('.hamburger__bar-middle')
const bottomBar = document.querySelector('.hamburger__bar-bottom')

const hambFunction = () => {
    menu.classList.toggle('menu--active')
    hambButton.classList.toggle('hamburger--active')
    topBar.classList.toggle('hamburger__bar-top--active')
    middleBar.classList.toggle('hamburger__bar-middle--active')
    bottomBar.classList.toggle('hamburger__bar-bottom--active')
}

hambButton.addEventListener('click', hambFunction)
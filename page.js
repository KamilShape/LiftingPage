const hambButton = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

const hambFunction = () => {
    menu.classList.toggle('menu--active')
    hambButton.classList.toggle('hamburger--active')
}

hambButton.addEventListener('click', hambFunction)
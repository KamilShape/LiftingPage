//Hamburger Menu
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

//Drop-down menu
const blogLink = document.querySelector('.menu__list-item-link--blog')
const servicesLink = document.querySelector('.menu__list-item-link--services')

blogLink.addEventListener('mouseover', function () {
    const blogList = document.querySelector('.menu__inside-list--blog')
    blogList.classList.toggle('menu__list-item-link--active')
})
servicesLink.addEventListener('mouseover', function () {
    const servicesList = document.querySelector('.menu__inside-list--services')
    servicesList.classList.toggle('menu__list-item-link--active')
})

//Scrolling - appear
const New = document.querySelector('.news__new')
const header = document.querySelector('.header')
const about = document.querySelector('.about')
const news = document.querySelector('.news')
const services = document.querySelector('.services')
const contact = document.querySelector('.contact')
const kitchen = document.querySelector('.kitchen')
const windowSize = window.innerHeight
const firstHeight = header.clientHeight + about.clientHeight
const secondHeight = header.clientHeight + about.clientHeight + news.clientHeight
const articlesNew = [...document.getElementsByClassName('news__new')];
const articlesKitchen = [...document.getElementsByClassName('kitchen__new ')]



const appearNew = () => {
    let scrolling = window.scrollY
    console.log(scrolling)
    for (i = 0; i < articlesNew.length; i++) {
        if (scrolling > firstHeight + articlesNew[i].offsetTop) {
            articlesNew[i].classList.add('article--active')
            // console.log(articles[i].offsetTop)
        }

    }
}
window.addEventListener('scroll', appearNew)

const appearKitchen = () => {
    let scrolling = window.scrollY
    console.log(scrolling)
    for (i = 0; i < articlesKitchen.length; i++) {
        if (scrolling > secondHeight + articlesKitchen[i].offsetTop) {
            articlesKitchen[i].classList.add('article--active')
        }

    }
}
window.addEventListener('scroll', appearKitchen)


const headerPosition = header.offsetTop
const aboutPosition = about.offsetTop
const contactPosition = contact.offsetTop

//Smooth scroll

// $('.menu__list-item-link--home').on('click', function (e) {
//     $('body,html').animate({
//         scrollTop: $('.header').offset().top
//     }, 1000)
// })

$('.menu__list-item-link').on('click', function () {
    const section = '.' + $(this).attr('id')
    $('body,html').animate({
        scrollTop: $(section).offset().top
    })
})
const hamburger = document.querySelector('#hamburger')
const nav = document.querySelector('nav')
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    nav.classList.toggle('hidden')
})
const header = document.querySelector('header')
window.onscroll = function(){
    const fixed = header.offsetTop
    if(window.pageYOffset > fixed){
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed')
    }
}
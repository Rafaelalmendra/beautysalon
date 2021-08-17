/*open and close the menu by clicking on the icon*/
const nav  = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/*when clicking on a menu item, hide the entire menu*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*change the page header when scrolling*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
});
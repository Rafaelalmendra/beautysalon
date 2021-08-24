/* open and close the menu by clicking on the icon */
const nav  = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/* when clicking on a menu item, hide the entire menu */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* change the page header when scrolling */
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true 
    }
  }
});

/* scrollReveal show elements to page */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonails,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
  )

/* back up button */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if(this.window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }

/* menu active */
const sections = document.querySelectorAll('section[id]')
function activateMenuAtCurrentSection() {
  
}


/* when scroll */
window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
})
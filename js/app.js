let menuBtn = document.querySelector(".hamburger")
let mobileMenu = document.querySelector(".mobile-nav")
let logo = document.querySelector(".brand-logo")
let siteHeader = document.querySelector(".site-header")

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("is-active")
  mobileMenu.classList.toggle("is-active")
  siteHeader.classList.toggle("is-active")
  logo.classList.toggle("hidden")
})

$(".slide-wrapper").slick({
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  pauseOnFocus: false,
  dots: true,
  arrows: false,
})

// !TOP TO SCROLL BTN
let topScroll = document.querySelector(".top-btn");

window.addEventListener('scroll', checkHeight);

function checkHeight() {
  if (window.scrollY > 500) {
    topScroll.classList.add("btn-display");
  } else {
    topScroll.classList.remove("btn-display");
  }
}

topScroll.addEventListener('click', ()=>{
  window.scrollTo({
    top:0
  })
})


// ! ANIMATION SCROLL REVEAL

const scroll = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  delay: 300,
  // reset: true
})

scroll.reveal(`.site-header__wrapper`, {origin: "bottom"})
scroll.reveal(`.hero-section__wrapper`)
scroll.reveal(`.services-section__item`)
scroll.reveal(`.team-section__teambox`)
scroll.reveal(`.aboutus-section`)
scroll.reveal(`.contact-section`)
scroll.reveal(`.site-footer`)


// !BURGER BTN

let burgerBtn = document.querySelector(".burger-label");
let showNav = document.querySelector("#show-nav");

function clickBtn() {
  burgerBtn.addEventListener("click", () => {
    if (showNav.classList.contains("burger-none")) {
      showNav.classList.remove("burger-none");
      showNav.classList.add("burger-wrapper");
     
    } else {
      showNav.classList.add("burger-none");
      showNav.classList.remove("burger-wrapper");
     
    }
  });
}


// !SWIPER

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
  },
  
  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }
  
});



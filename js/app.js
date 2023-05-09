//! TOP SCROLL PROGRESS
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#001a2e ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

  // BURGER MENU

  
  let elCloseBtn = document.querySelector(".burger-close");
let elNavMenu = document.querySelector(".burger-nav");
let elBurgerBtn = document.querySelector(".burger-btn");
let elBurgerLinks = document.querySelectorAll(".site-burger__link");

elCloseBtn.addEventListener("click", function() {
  elNavMenu.classList.remove("slide-in");
  elNavMenu.classList.add("slide-out");
  setTimeout(() => {
    elNavMenu.classList.add("hidden");
    elNavMenu.classList.remove("slide-out");
  }, 300);
});

elBurgerBtn.addEventListener("click", function() {
  elNavMenu.classList.toggle("hidden");
  elNavMenu.classList.toggle("slide-in");
  elNavMenu.classList.toggle("display")
});

elBurgerLinks.forEach(function(elBurgerLink) {
  elBurgerLink.addEventListener("click", function() {
    elNavMenu.classList.remove("slide-in");
    elNavMenu.classList.add("slide-out");
    setTimeout(() => {
      elNavMenu.classList.add("hidden");
      elNavMenu.classList.remove("slide-out");
    }, 300);
  });
});

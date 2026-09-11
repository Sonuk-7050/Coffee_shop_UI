const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenbutton = document.querySelector("#menu-open-button");
const menuClosebutton = document.querySelector("#menu-close-button");

menuOpenbutton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuClosebutton.addEventListener("click", () => menuOpenbutton.click());

navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenbutton.click());
});


// Initialize Swiper    ====
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
        SliderPreview: 1
    },
    768: {
        SliderPreview: 2
    },
    1024: {
        SliderPreview: 3
    }

  }

});

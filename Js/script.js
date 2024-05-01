const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
      
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slidesPerView:5,
  autoplay:{
      delay:1000,

  }

});


const tabBtn = document.querySelectorAll(".tab__btn")
, tabWrapper = document.querySelectorAll(".tab__wrapper");
function open(e) {
  const t = e.currentTarget
    , n = t.dataset.button;
  tabBtn.forEach((function(e) {
      e.classList.remove("tab__btn--active")
  }
  )),
  t.classList.add("tab__btn--active"),
  tabWrapper.forEach((function(e) {
      e.classList.remove("tab__wrapper--active")
  }
  )),
  document.querySelector(`#${n}`).classList.add("tab__wrapper--active")
}
tabBtn.forEach((function(e) {
  e.addEventListener("click", open)
}
));
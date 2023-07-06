var swiper = new Swiper(".slide-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    sliderPerGroup: 3,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      520: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });
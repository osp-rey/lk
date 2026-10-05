export default function sliders() {
  const heroSlider = document.querySelector(".s-hero__slider");

  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 12000,
      slidesPerView: "auto",
      spaceBetween: 15,
      autoplay: {
        delay: 0,
      },
      loop: true,
      watchOverflow: true,
      allowTouchMove: false,
      watchSlidesProgress: true,
      a11y: false,
      navigation: {
        prevEl: ".s-hero .slider-arrow._prev",
        nextEl: ".s-hero .slider-arrow._next",
      },
      breakpoints: {
        1026: {
          slidesPerView: "auto",
          spaceBetween: 30,
          initialSlide: 1,
        },
      },
    });
  }

  const useSlider = document.querySelector(".s-use__slider");

  if (useSlider) {
    const swiper = new Swiper(useSlider, {
      speed: 900,
      spaceBetween: 20,
      slidesPerView: "auto",
      autoplay: {
        delay: 6000,
      },
      scrollbar: {
        el: ".s-use .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        1200: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
      },
    });
  }

  const includedSlider = document.querySelector(".s-included__slider");

  if (includedSlider && window.matchMedia("(max-width: 1026px)").matches) {
    const swiper = new Swiper(includedSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 5500,
      },
      scrollbar: {
        el: ".s-included .slider-scrollbar",
        draggable: true,
      },
    });
  }

  const advSlider = document.querySelector(".s-adv__slider");

  if (advSlider) {
    const swiper = new Swiper(advSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 25,
      autoplay: {
        delay: 5500,
      },
      scrollbar: {
        el: ".s-adv .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        1366: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }
}

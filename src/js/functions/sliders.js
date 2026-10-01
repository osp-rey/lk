export default function sliders() {
  const heroSlider = document.querySelector(".s-hero__slider");

  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 15,
      autoplay: {
        delay: 5500
      },
      initialSlide: 0,
      navigation: {
        prevEl: ".s-hero .slider-arrow._prev",
        nextEl: ".s-hero .slider-arrow._next",
      },
      breakpoints: {
        1026: {
          slidesPerView: 2,
          spaceBetween: 30,
          initialSlide: 1,
        },
      },
    });
  }
}

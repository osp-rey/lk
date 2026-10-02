export default function headerScroll() {
  const header = document.querySelector(".header");

  if (header && window.matchMedia("(min-width: 1026px)").matches) {
    let lastScrollTop = 0;

    window.addEventListener("scroll", changeScroll);

    function changeScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        header.classList.add("_scroll");
      } else {
        header.classList.remove("_scroll");
      }

      lastScrollTop = scrollTop;
    }
  }
}

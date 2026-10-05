export default function headerScroll() {
  const header = document.querySelector(".header");

  if (header && window.matchMedia("(min-width: 1026px)").matches) {
    if (header.classList.contains("_static")) return;
    let lastScrollTop = 0;

    window.addEventListener("scroll", changeScroll);

    function changeScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        header.classList.add("_fill");
      } else {
        header.classList.remove("_fill");
      }

      lastScrollTop = scrollTop;
    }
  }
}

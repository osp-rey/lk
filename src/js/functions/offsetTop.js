export default function offsetTop() {
  const targets = document.querySelectorAll("._offset-top");

  if (targets.length) {
    targets.forEach((target) => {
      handler(target);

      window.visualViewport.addEventListener("resize", () => handler(target));
      window.visualViewport.addEventListener("scroll", () => handler(target));
    });

    function handler(target) {
      
      const header = document.querySelector(".header");

      target.style.paddingTop = `${header.clientHeight}px`;
    }
  }
}

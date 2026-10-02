export default function tiltItems() {
  const items = document.querySelectorAll(".tilt-item");

  if (items.length && window.matchMedia("(min-width: 1200px)").matches) {
    const options = {
      max: 7,
      speed: 300,
    };

    items.forEach((item) => {
      let isActive = false;
      item.addEventListener("mousemove", (e) => {
        if (!isActive) return;
        item.style.transition = `none`;
        handler(e);
      });

      item.addEventListener("mouseleave", () => {
        isActive = false;
        item.style.transition = `transform ${options.speed}ms ease`;
        item.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
      });
      item.addEventListener("mouseenter", (e) => {
        handler(e);
        setTimeout(() => {
          isActive = true;
          // item.style.transition = `none`;
        }, 300);
      });

      function handler(e) {
        const rect = item.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((centerY - y) / centerY) * options.max;
        const rotateY = ((x - centerX) / centerX) * options.max;

        item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`;
      }
    });
  }
}

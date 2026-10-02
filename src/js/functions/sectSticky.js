export default function sectSticky() {
  const items = document.querySelectorAll(".sect-wrap");

  if (items.length) {
    const vh = window.innerHeight;
    items.forEach((item, index) => (item.style.zIndex = `${index}`));

    handler();
    function handler() {
      items.forEach((item) => {
        const h = item.offsetHeight;
        const top = h > vh ? vh - h : 0;
        item.style.top = `${top}px`;
      });
    }

    window.addEventListener("resize", handler);
  }
}

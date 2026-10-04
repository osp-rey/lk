import { slideDown, slideUp } from "./helpFunctions.js";

export default function toggle() {
  const items = document.querySelectorAll("[data-toggle-item]");

  if (items.length) {
    const buttons = document.querySelectorAll("[data-toggle-btn]");
    items.forEach((item) => {
      slideUp(item, 0);
    });

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.toggleBtn;
        const item = document.querySelector(`[data-toggle-item="${id}"]`);

        if (!item) return;

        if (btn.classList.contains("_active")) {
          btn.classList.remove("_active");
          slideUp(item);
        } else {
          btn.classList.add("_active");
          slideDown(item);
        }
      });
    });
  }
}

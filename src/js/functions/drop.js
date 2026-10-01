export default function drop() {
  const drops = document.querySelectorAll(".drop");

  if (drops.length) {
    document.body.addEventListener("click", () => {
      const openDrops = document.querySelectorAll(".drop._open");

      if (openDrops.length)
        openDrops.forEach((d) => d.classList.remove("_open"));
    });

    drops.forEach((drop) => {
      const btn = drop.querySelector(".drop-btn");
      const body = drop.querySelector(".drop-body");

      body.addEventListener("click", (e) => e.stopPropagation());

      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        if (drop.classList.contains("_open")) drop.classList.remove("_open");
        else drop.classList.add("_open");
      });
    });
  }
}

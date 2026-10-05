import burger from "./functions/burger.js";
import drop from "./functions/drop.js";
import selectHandler from "./functions/handlerSelect.js";
import headerScroll from "./functions/headerScroll.js";
import inputmask from "./functions/inputmask.js";
import offsetTop from "./functions/offsetTop.js";
import sectSticky from "./functions/sectSticky.js";
import sliders from "./functions/sliders.js";
import spoller from "./functions/spoller.js";
import tab from "./functions/tabs.js";
import tiltItems from "./functions/tiltItems.js";
import toggle from "./functions/toggle.js";

document.addEventListener("DOMContentLoaded", () => {
  burger();
  drop();
  offsetTop();
  sliders();
  tiltItems();
  headerScroll();
  sectSticky();
  selectHandler();
  tab();
  spoller();
  toggle();
  inputmask();
});

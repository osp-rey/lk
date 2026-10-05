(() => {
    "use strict";
    function burger() {
        const burger = document.querySelector("#burger");
        if (burger) {
            const burgerOpen = document.querySelector("#burger-open");
            const burgerCloses = document.querySelectorAll("[data-burger-close]");
            const burgerAnchors = burger.querySelectorAll("a[href^='/#']");
            const burgerWrap = document.querySelector("#burger-wrap");
            burgerAnchors.forEach(anchor => {
                anchor.addEventListener("click", () => {
                    handleClose();
                });
            });
            burgerOpen.addEventListener("click", handleOpen);
            burgerCloses.forEach(btn => btn.addEventListener("click", handleClose));
            function updateHeightBurger() {
                burgerWrap.style.maxHeight = `${window.visualViewport.height}px`;
                burger.style.maxHeight = `${window.visualViewport.height}px`;
            }
            function handleOpen() {
                document.body.classList.add("body-hidden");
                burger.classList.add("_open");
                burgerWrap.classList.add("_active");
                updateHeightBurger();
            }
            function handleClose() {
                document.body.classList.remove("body-hidden");
                burger.classList.remove("_open");
                burgerWrap.classList.remove("_active");
            }
            window.visualViewport.addEventListener("resize", updateHeightBurger);
            window.visualViewport.addEventListener("scroll", updateHeightBurger);
            updateHeightBurger();
        }
    }
    function drop() {
        const drops = document.querySelectorAll(".drop");
        if (drops.length) {
            document.body.addEventListener("click", () => {
                const openDrops = document.querySelectorAll(".drop._open");
                if (openDrops.length) openDrops.forEach(d => d.classList.remove("_open"));
            });
            drops.forEach(drop => {
                const btn = drop.querySelector(".drop-btn");
                const body = drop.querySelector(".drop-body");
                body.addEventListener("click", e => e.stopPropagation());
                btn.addEventListener("click", e => {
                    e.stopPropagation();
                    if (drop.classList.contains("_open")) drop.classList.remove("_open"); else drop.classList.add("_open");
                });
            });
        }
    }
    function selectHandler() {
        const selects = document.querySelectorAll(".select");
        if (selects.length) {
            document.body.addEventListener("click", () => {
                const openSelects = document.querySelectorAll(".select._open");
                if (openSelects.length) openSelects.forEach(s => s.classList.remove("_open"));
            });
            selects.forEach(select => {
                select.addEventListener("click", e => e.stopPropagation());
                const items = select.querySelectorAll(".select-item");
                const btn = select.querySelector(".select-btn");
                const input = select.querySelector(".select-input");
                handlerChange(Array.from(items)[0]);
                btn.addEventListener("click", () => {
                    select.classList.toggle("_open");
                });
                items.forEach(item => {
                    item.addEventListener("click", () => {
                        handlerChange(item);
                    });
                });
                function handlerChange(item) {
                    const value = item.textContent.trim();
                    input.value = value;
                    select.classList.remove("_open");
                    items.forEach(i => i.classList.remove("_active"));
                    item.classList.add("_active");
                }
            });
        }
    }
    function headerScroll() {
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
    function inputmask() {
        const inputs = document.querySelectorAll('input[type="tel"]');
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(inputs);
    }
    function offsetTop() {
        const targets = document.querySelectorAll("._offset-top");
        if (targets.length) {
            targets.forEach(target => {
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
    function sectSticky() {
        const items = document.querySelectorAll(".sect-wrap");
        if (items.length) {
            const vh = window.innerHeight;
            items.forEach((item, index) => item.style.zIndex = `${index}`);
            handler();
            function handler() {
                items.forEach(item => {
                    const h = item.offsetHeight;
                    const top = h > vh ? vh - h : 0;
                    item.style.top = `${top}px`;
                });
            }
            window.addEventListener("resize", handler);
        }
    }
    function sliders() {
        const heroSlider = document.querySelector(".s-hero__slider");
        if (heroSlider) {
            const swiper = new Swiper(heroSlider, {
                speed: 12e3,
                slidesPerView: "auto",
                spaceBetween: 15,
                autoplay: {
                    delay: 0
                },
                loop: true,
                watchOverflow: true,
                allowTouchMove: false,
                watchSlidesProgress: true,
                a11y: false,
                navigation: {
                    prevEl: ".s-hero .slider-arrow._prev",
                    nextEl: ".s-hero .slider-arrow._next"
                },
                breakpoints: {
                    1026: {
                        slidesPerView: "auto",
                        spaceBetween: 30,
                        initialSlide: 1
                    }
                }
            });
        }
        const useSlider = document.querySelector(".s-use__slider");
        if (useSlider) {
            const swiper = new Swiper(useSlider, {
                speed: 900,
                spaceBetween: 20,
                slidesPerView: "auto",
                autoplay: {
                    delay: 6e3
                },
                scrollbar: {
                    el: ".s-use .slider-scrollbar",
                    draggable: true
                },
                breakpoints: {
                    1200: {
                        spaceBetween: 30,
                        slidesPerView: 3
                    }
                }
            });
        }
        const includedSlider = document.querySelector(".s-included__slider");
        if (includedSlider && window.matchMedia("(max-width: 1026px)").matches) {
            const swiper = new Swiper(includedSlider, {
                speed: 900,
                slidesPerView: "auto",
                spaceBetween: 20,
                autoplay: {
                    delay: 5500
                },
                scrollbar: {
                    el: ".s-included .slider-scrollbar",
                    draggable: true
                }
            });
        }
        const advSlider = document.querySelector(".s-adv__slider");
        if (advSlider) {
            const swiper = new Swiper(advSlider, {
                speed: 900,
                slidesPerView: "auto",
                spaceBetween: 25,
                autoplay: {
                    delay: 5500
                },
                scrollbar: {
                    el: ".s-adv .slider-scrollbar",
                    draggable: true
                },
                breakpoints: {
                    1366: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    }
                }
            });
        }
    }
    function spoller() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            });
            if (spollersRegular.length) {
                initSpollers(spollersRegular);
            }
            let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
            if (mdQueriesArray && mdQueriesArray.length) {
                mdQueriesArray.forEach(mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    });
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
            }
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach(spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add("_spoller-init");
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove("_spoller-init");
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                });
            }
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter(item => item.closest("[data-spollers]") === spollersBlock);
                    spollerTitles.forEach(spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerTitle.classList.contains("_spoller-active")) {
                                spollerTitle.nextElementSibling.hidden = true;
                            }
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    });
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest("[data-spoller]")) {
                    const spollerTitle = el.closest("[data-spoller]");
                    const spollersBlock = spollerTitle.closest("[data-spollers]");
                    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) {
                            hideSpollersBody(spollersBlock);
                        }
                        spollerTitle.classList.toggle("_spoller-active");
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                    e.preventDefault();
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                    spollerActiveTitle.classList.remove("_spoller-active");
                    _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                }
            }
            const spollersClose = document.querySelectorAll("[data-spoller-close]");
            if (spollersClose.length) {
                document.addEventListener("click", function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) {
                        spollersClose.forEach(spollerClose => {
                            const spollersBlock = spollerClose.closest("[data-spollers]");
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        });
                    }
                });
            }
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter(function(item, index, self) {
                if (item.dataset[dataSetValue]) {
                    return item.dataset[dataSetValue].split(",")[0];
                }
            });
            if (media.length) {
                const breakpointsArray = [];
                media.forEach(item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                });
                let mdQueries = breakpointsArray.map(function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                });
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach(breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter(function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) {
                                return true;
                            }
                        });
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    });
                    return mdQueriesArray;
                }
            }
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout(() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout(() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) {
                return _slideDown(target, duration);
            } else {
                return _slideUp(target, duration);
            }
        };
        function uniqArray(array) {
            return array.filter(function(item, index, self) {
                return self.indexOf(item) === index;
            });
        }
    }
    function tab() {
        const buttons = document.querySelectorAll("[data-tab-btn]");
        if (buttons.length) {
            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const container = btn.closest(".tabs");
                    const tabId = btn.dataset.tabBtn;
                    const allButtons = container.querySelector(".tabs-nav").querySelectorAll("[data-tab-btn]");
                    const allTabs = [];
                    const allTabsContents = container.querySelectorAll(".tabs-content");
                    allTabsContents.forEach(tabsContent => {
                        const tabs = Array.from(tabsContent.children).filter(child => child.hasAttribute("data-tab"));
                        allTabs.push(...tabs);
                    });
                    const currentTabs = container.querySelectorAll(`[data-tab="${tabId}"]`);
                    allTabs.forEach(t => {
                        t.classList.remove("_show");
                        setTimeout(() => {
                            t.classList.remove("_active");
                        }, 150);
                    });
                    setTimeout(() => {
                        currentTabs.forEach(t => {
                            t.classList.add("_active");
                            setTimeout(() => {
                                t.classList.add("_show");
                            }, 150);
                        });
                    }, 150);
                    allButtons.forEach(b => b.classList.remove("_active"));
                    btn.classList.add("_active");
                });
            });
        }
    }
    function tiltItems() {
        const items = document.querySelectorAll(".tilt-item");
        if (items.length && window.matchMedia("(min-width: 1200px)").matches) {
            const options = {
                max: 7,
                speed: 300
            };
            items.forEach(item => {
                let isActive = false;
                item.addEventListener("mousemove", e => {
                    if (!isActive) return;
                    item.style.transition = `none`;
                    handler(e);
                });
                item.addEventListener("mouseleave", () => {
                    isActive = false;
                    item.style.transition = `transform ${options.speed}ms ease`;
                    item.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
                });
                item.addEventListener("mouseenter", e => {
                    handler(e);
                    setTimeout(() => {
                        isActive = true;
                    }, 300);
                });
                function handler(e) {
                    const rect = item.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (centerY - y) / centerY * options.max;
                    const rotateY = (x - centerX) / centerX * options.max;
                    item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`;
                }
            });
        }
    }
    function createScript(url, type) {
        if (!url) return;
        return new Promise((resolve, reject) => {
            const script = document.querySelector(`script[src="${url}"]`);
            if (script) {
                resolve(script);
            } else {
                const htmlScript = document.createElement("script");
                htmlScript.src = url;
                if (type) {
                    htmlScript.type = type;
                }
                htmlScript.onload = () => {
                    resolve(htmlScript);
                };
                htmlScript.onerror = () => {
                    reject(new Error(`Не удалось загрузить скрипт: ${url}`));
                };
                document.head.appendChild(htmlScript);
            }
        });
    }
    function slideUp(target, duration = 500, showmore = 0) {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = `${target.offsetHeight}px`;
            target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            window.setTimeout(() => {
                target.hidden = !showmore ? true : false;
                !showmore ? target.style.removeProperty("height") : null;
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                !showmore ? target.style.removeProperty("overflow") : null;
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideUpDone", {
                    detail: {
                        target
                    }
                }));
            }, duration);
        }
    }
    function slideDown(target, duration = 500, showmore = 0) {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.hidden = target.hidden ? false : null;
            showmore ? target.style.removeProperty("height") : null;
            let height = target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            target.offsetHeight;
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = height + "px";
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            window.setTimeout(() => {
                target.style.removeProperty("height");
                target.style.removeProperty("overflow");
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideDownDone", {
                    detail: {
                        target
                    }
                }));
            }, duration);
        }
    }
    function createEl(tag, classes = "") {
        const item = document.createElement(tag);
        if (classes) {
            classes.split(" ").forEach(c => {
                item.classList.add(c);
            });
        }
        return item;
    }
    function countLinesInElement(element) {
        if (!element) return 0;
        var text = element.innerText || element.textContent || "";
        var text = element.innerText || "";
        if (!text.trim()) return 0;
        var clone = element.cloneNode(true);
        clone.style.position = "absolute";
        clone.style.visibility = "hidden";
        clone.style.width = element.offsetWidth + "px";
        clone.style.height = "auto";
        clone.style.maxHeight = "none";
        clone.style.overflow = "visible";
        clone.style.whiteSpace = "normal";
        clone.style.wordWrap = "break-word";
        var computedStyle = window.getComputedStyle(element);
        clone.style.fontSize = computedStyle.fontSize;
        clone.style.fontFamily = computedStyle.fontFamily;
        clone.style.fontWeight = computedStyle.fontWeight;
        clone.style.lineHeight = computedStyle.lineHeight;
        clone.style.padding = computedStyle.padding;
        clone.style.margin = "0";
        clone.style.border = "none";
        clone.style.boxSizing = "border-box";
        document.body.appendChild(clone);
        var height = clone.offsetHeight;
        var lineHeight = parseFloat(computedStyle.lineHeight) || parseFloat(computedStyle.fontSize) * 1.2;
        document.body.removeChild(clone);
        return Math.ceil(height / lineHeight);
    }
    function toggle() {
        const items = document.querySelectorAll("[data-toggle-item]");
        if (items.length) {
            const buttons = document.querySelectorAll("[data-toggle-btn]");
            items.forEach(item => {
                slideUp(item, 0);
            });
            buttons.forEach(btn => {
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
})();
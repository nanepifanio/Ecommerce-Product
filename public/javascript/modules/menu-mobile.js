import outsideClick from "./outsideclick.js";
export default class MenuMobile {
    menuButton;
    menuList;
    activeClass;
    eventos;
    backgroundFilter;
    closeButton;
    constructor({ button, list, cls = "active", userEvents = ["click", "touchstart"], background = "[data-back='background']", close = '[data-menu="close"]', }) {
        this.menuButton = document.querySelector(button);
        this.menuList = document.querySelector(list);
        this.activeClass = cls;
        this.eventos = userEvents;
        this.backgroundFilter = document.querySelector(background);
        this.closeButton = document.querySelector(close);
        this.handleMenu = this.handleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    handleMenu() {
        if (this.menuList && this.backgroundFilter) {
            this.backgroundFilter.classList.add(this.activeClass);
            this.menuList.classList.add(this.activeClass);
            outsideClick({ element: this.menuList, events: this.eventos }, () => {
                if (this.menuList && this.backgroundFilter) {
                    this.backgroundFilter.classList.remove(this.activeClass);
                    this.menuList.classList.remove(this.activeClass);
                }
            });
        }
    }
    closeMenu() {
        if (this.menuList && this.backgroundFilter) {
            this.backgroundFilter.classList.remove(this.activeClass);
            this.menuList.classList.remove(this.activeClass);
        }
    }
    addMenuMobileListener() {
        this.eventos.forEach((userEvent) => {
            if (this.menuButton && this.closeButton) {
                this.menuButton.addEventListener(userEvent, this.handleMenu);
                this.closeButton.addEventListener(userEvent, this.closeMenu);
            }
        });
    }
    init() {
        this.addMenuMobileListener();
        return this;
    }
}

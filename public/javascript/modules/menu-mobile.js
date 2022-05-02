import outsideClick from "./outsideclick.js";
export default class MenuMobile {
    static menuButton;
    static menuList;
    static activeClass;
    static eventos;
    static backgroundFilter;
    static closeButton;
    constructor({ button, list, cls = "active", userEvents = ["click", "touchstart"], background = "[data-back='background']", close = '[data-menu="close"]', }) {
        MenuMobile.menuButton = document.querySelector(button);
        MenuMobile.menuList = document.querySelector(list);
        MenuMobile.activeClass = cls;
        MenuMobile.eventos = userEvents;
        MenuMobile.backgroundFilter = document.querySelector(background);
        MenuMobile.closeButton = document.querySelector(close);
        MenuMobile.handleMenu = MenuMobile.handleMenu.bind(MenuMobile);
        MenuMobile.closeMenu = MenuMobile.closeMenu.bind(MenuMobile);
    }
    static handleMenu() {
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
    static closeMenu() {
        if (this.menuList && this.backgroundFilter) {
            this.backgroundFilter.classList.remove(this.activeClass);
            this.menuList.classList.remove(this.activeClass);
        }
    }
    static addMenuMobileListener() {
        this.eventos.forEach((userEvent) => {
            if (this.menuButton && this.closeButton) {
                this.menuButton.addEventListener(userEvent, this.handleMenu);
                this.closeButton.addEventListener(userEvent, this.closeMenu);
            }
        });
    }
    init() {
        MenuMobile.addMenuMobileListener();
        return this;
    }
}

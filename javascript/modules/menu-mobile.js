import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(button, list, cls, userEvents = ["click", "touchstart"]) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.activeClass = cls;
    this.eventos = userEvents;
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileListener() {
    this.eventos.forEach((userEvent) => {
      this.menuButton.addEventListener(userEvent, this.handleMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileListener();
    }
    return this;
  }
}

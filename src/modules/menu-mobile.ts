import outsideClick from "./outsideclick.js";

type MenuMobileParam = {
  button: string;
  list: string;
  cls?: string;
  userEvents?: string[];
};

export default class MenuMobile {
  menuButton: HTMLElement | null;
  menuList: HTMLElement | null;
  activeClass: string;
  eventos: string[];

  constructor({
    button,
    list,
    cls = "active",
    userEvents = ["click", "touchstart"],
  }: MenuMobileParam) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.activeClass = cls;
    this.eventos = userEvents;
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() {
    if (this.menuList && this.menuButton) {
      this.menuList.classList.add(this.activeClass);
      this.menuButton.classList.add(this.activeClass);
      outsideClick({ element: this.menuList, events: this.eventos }, () => {
        if (this.menuList && this.menuButton) {
          this.menuList.classList.remove(this.activeClass);
          this.menuButton.classList.remove(this.activeClass);
        }
      });
    }
  }

  addMenuMobileListener() {
    this.eventos.forEach((userEvent) => {
      if (this.menuButton) {
        this.menuButton.addEventListener(userEvent, this.handleMenu);
      }
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileListener();
    }
    return this;
  }
}

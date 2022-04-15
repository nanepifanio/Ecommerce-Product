import outsideClick from "./outsideclick.js";
import { MyElements } from "./types";

type MenuMobileParam = {
  button: string;
  list: string;
  cls?: string;
  userEvents?: string[];
  background?: string;
  close?: string;
};

export default class MenuMobile {
  menuButton: MyElements;
  menuList: MyElements;
  activeClass: string;
  eventos: string[];
  backgroundFilter: MyElements;
  closeButton: MyElements;

  constructor({
    button,
    list,
    cls = "active",
    userEvents = ["click", "touchstart"],
    background = "[data-back='background']",
    close = '[data-menu="close"]',
  }: MenuMobileParam) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.activeClass = cls;
    this.eventos = userEvents;
    this.backgroundFilter = document.querySelector(background);
    this.closeButton = document.querySelector(close);
    this.handleMenu = this.handleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleMenu(): void {
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

  closeMenu(): void {
    if (this.menuList && this.backgroundFilter) {
      this.backgroundFilter.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    }
  }

  addMenuMobileListener(): void {
    this.eventos.forEach((userEvent: string): void => {
      if (this.menuButton && this.closeButton) {
        this.menuButton.addEventListener(userEvent, this.handleMenu);
        this.closeButton.addEventListener(userEvent, this.closeMenu);
      }
    });
  }

  init(): this {
    this.addMenuMobileListener();
    return this;
  }
}

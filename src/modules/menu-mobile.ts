import outsideClick from "./outsideclick.js";
import { MyElements } from "../types/types";

type MenuMobileParam = {
  button: string;
  list: string;
  cls?: string;
  userEvents?: string[];
  background?: string;
  header?: string;
  close?: string;
};

export default class MenuMobile {
  static menuButton: MyElements;
  static menuList: MyElements;
  static activeClass: string;
  static eventos: string[];
  static header: MyElements;
  static backgroundFilter: MyElements;
  static closeButton: MyElements;

  constructor({
    button,
    list,
    cls = "active",
    userEvents = ["click", "touchstart"],
    background = "[data-back='background']",
    header = "header",
    close = '[data-menu="close"]',
  }: MenuMobileParam) {
    MenuMobile.menuButton = document.querySelector(button);
    MenuMobile.menuList = document.querySelector(list);
    MenuMobile.activeClass = cls;
    MenuMobile.eventos = userEvents;
    MenuMobile.header = document.querySelector(header);
    MenuMobile.backgroundFilter = document.querySelector(background);
    MenuMobile.closeButton = document.querySelector(close);
    MenuMobile.handleMenu = MenuMobile.handleMenu.bind(MenuMobile);
    MenuMobile.closeMenu = MenuMobile.closeMenu.bind(MenuMobile);
  }

  static handleMenu(): void {
    if (this.menuList && this.backgroundFilter && this.header) {
      this.backgroundFilter.classList.add(this.activeClass);
      this.menuList.classList.add(this.activeClass);
      this.header.classList.add(this.activeClass);
      document
        .querySelector(".main-image img")
        ?.classList.add(this.activeClass);
      outsideClick({ element: this.menuList, events: this.eventos }, () => {
        if (this.menuList && this.backgroundFilter && this.header) {
          this.backgroundFilter.classList.remove(this.activeClass);
          this.menuList.classList.remove(this.activeClass);
          this.header.classList.remove(this.activeClass);
          document
            .querySelector(".main-image img")
            ?.classList.remove(this.activeClass);
        }
      });
    }
  }

  static closeMenu(): void {
    if (this.menuList && this.backgroundFilter && this.header) {
      this.backgroundFilter.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
      this.header.classList.remove(this.activeClass);
      document
        .querySelector(".main-image img")
        ?.classList.remove(this.activeClass);
    }
  }

  static addMenuMobileListener(): void {
    this.eventos.forEach((userEvent: string): void => {
      if (this.menuButton && this.closeButton) {
        this.menuButton.addEventListener(userEvent, this.handleMenu);
        this.closeButton.addEventListener(userEvent, this.closeMenu);
      }
    });
  }

  init(): this {
    MenuMobile.addMenuMobileListener();
    return this;
  }
}

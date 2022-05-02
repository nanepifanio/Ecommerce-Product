import outsideClick from "./outsideclick.js";
import * as T from "../types/types";

type CartElements = {
  cartIconSelector: string;
  cartSelector: string;
  class: string;
  eventsArr: string[];
};

export default class OpenCart {
  static cartIcon: T.MyElements;
  static cart: T.MyElements;
  static activeClass: string;
  static events: string[];

  constructor(elements: CartElements) {
    OpenCart.cartIcon = document.querySelector(elements.cartIconSelector);
    OpenCart.cart = document.querySelector(elements.cartSelector);
    OpenCart.activeClass = elements.class || "active";
    OpenCart.events = elements.eventsArr || ["click", "touchstart"];
  }

  static handleCart: T.VoidFunction = () => {
    if (this.cart && this.cartIcon) {
      this.cart.classList.add(this.activeClass);
      this.cartIcon.classList.add(this.activeClass);
      outsideClick({ element: this.cart, events: this.events }, () => {
        if (this.cart && this.cartIcon) {
          this.cart.classList.remove(this.activeClass);
          this.cartIcon.classList.remove(this.activeClass);
        }
      });
    }
  };

  static cartIconEventListener: T.VoidFunction = () => {
    this.events.forEach((userEvent: string): void => {
      if (this.cartIcon) {
        this.cartIcon.addEventListener(userEvent, this.handleCart);
      }
    });
  };

  init(): this {
    if (OpenCart.cart && OpenCart.cartIcon) {
      OpenCart.cartIconEventListener();
    }
    return this;
  }
}

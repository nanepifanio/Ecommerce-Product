import outsideClick from "./outsideclick.js";
import * as T from "./types";

type CartElements = {
  cartIconSelector: string;
  cartSelector: string;
  class: string;
  eventsArr: string[];
};

export default class initCart {
  cartIcon: T.MyElements;
  cart: T.MyElements;
  activeClass: string;
  events: string[];

  constructor(elements: CartElements) {
    this.cartIcon = document.querySelector(elements.cartIconSelector);
    this.cart = document.querySelector(elements.cartSelector);
    this.activeClass = elements.class || "active";
    this.events = elements.eventsArr || ["click", "touchstart"];
  }

  handleCart: T.VoidFunction = () => {
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

  cartIconEventListener: T.VoidFunction = () => {
    this.events.forEach((userEvent: string): void => {
      if (this.cartIcon) {
        this.cartIcon.addEventListener(userEvent, this.handleCart);
      }
    });
  };

  init(): this {
    if (this.cart && this.cartIcon) {
      this.cartIconEventListener();
    }
    return this;
  }
}

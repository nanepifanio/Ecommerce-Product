import outsideClick from "./outsideclick.js";
export default class OpenCart {
    static cartIcon;
    static cart;
    static activeClass;
    static events;
    constructor(elements) {
        OpenCart.cartIcon = document.querySelector(elements.cartIconSelector);
        OpenCart.cart = document.querySelector(elements.cartSelector);
        OpenCart.activeClass = elements.class || "active";
        OpenCart.events = elements.eventsArr || ["click", "touchstart"];
    }
    static handleCart = () => {
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
    static cartIconEventListener = () => {
        this.events.forEach((userEvent) => {
            if (this.cartIcon) {
                this.cartIcon.addEventListener(userEvent, this.handleCart);
            }
        });
    };
    init() {
        if (OpenCart.cart && OpenCart.cartIcon) {
            OpenCart.cartIconEventListener();
        }
        return this;
    }
}

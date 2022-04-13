import outsideClick from "./outsideclick.js";
export default class initCart {
    cartIcon;
    cart;
    activeClass;
    events;
    constructor(elements) {
        this.cartIcon = document.querySelector(elements.cartIconSelector);
        this.cart = document.querySelector(elements.cartSelector);
        this.activeClass = elements.class || "active";
        this.events = elements.eventsArr || ["click", "touchstart"];
    }
    handleCart = () => {
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
    cartIconEventListener = () => {
        this.events.forEach((userEvent) => {
            if (this.cartIcon) {
                this.cartIcon.addEventListener(userEvent, this.handleCart);
            }
        });
    };
    init() {
        if (this.cart && this.cartIcon) {
            this.cartIconEventListener();
        }
        return this;
    }
}

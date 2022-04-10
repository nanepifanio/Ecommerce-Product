import outsideClick from "./outsideclick.js";

export default function initCart() {
  const cartIcon = document.querySelector("[data-cart='cartIcon']");
  const cart = document.querySelector("[data-cart='cart']");
  const activeClass = "active";
  const events = ["click", "touchstart"];

  if (cartIcon && cart) {
    const handleCart = () => {
      cart.classList.add(activeClass);
      cartIcon.classList.add(activeClass);
      outsideClick(cart, events, () => {
        cart.classList.remove(activeClass);
        cartIcon.classList.remove(activeClass);
      });
    };

    events.forEach((userEvent) => {
      cartIcon.addEventListener(userEvent, handleCart);
    });
  }
}

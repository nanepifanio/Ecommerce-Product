import outsideClick from "./outsideclick.js";

export default function initCart(): void {
  const cartIcon = document.querySelector(
    "[data-cart='cartIcon']"
  ) as HTMLElement;
  const cart = document.querySelector("[data-cart='cart']") as HTMLElement;
  const activeClass: string = "active";
  const events: string[] = ["click", "touchstart"];

  if (cartIcon && cart) {
    const handleCart = (): void => {
      cart.classList.add(activeClass);
      cartIcon.classList.add(activeClass);
      outsideClick({ element: cart, events }, () => {
        cart.classList.remove(activeClass);
        cartIcon.classList.remove(activeClass);
      });
    };

    events.forEach((userEvent: string): void => {
      cartIcon.addEventListener(userEvent, handleCart);
    });
  }
}

import { MyElements, VoidFunction } from "./types";
import SetProductData, { DataElementsClass } from "./setData.js";

type CartElementsData = {
  itemsContainerCls: string;
  addCls: string;
  qtCls: string;
  qtCartCls: string;
};

export default class AddCart extends SetProductData {
  itemContainer: MyElements;
  add: MyElements;
  qt: MyElements;
  qtCart: MyElements;

  constructor(superElements: DataElementsClass, elements: CartElementsData) {
    super(superElements);
    this.itemContainer = document.querySelector(elements.itemsContainerCls);
    this.add = document.querySelector(elements.addCls);
    this.qt = document.querySelector(elements.qtCls);
    this.qtCart = document.querySelector(elements.qtCartCls);
  }

  fixPrice(prc: string): number {
    return +prc.replace("$", "");
  }

  setItem(): string {
    if (this.thumbs?.children[0] && this.name && this.price && this.qt) {
      return ` <div class="item" data-id=${this.name.getAttribute("data-id")}>
      <img src=${this.thumbs.children[0].children[0].getAttribute(
        "src"
      )} alt="" class="prod-img" />
      <div class="name-price">
        <p class="name-cart">${this.name.innerText}</p>
        <div class="price-cart">
          <span class="price-mult">$${this.fixPrice(
            this.price.innerText
          ).toFixed(2)} x ${this.qt.innerText}</span>
          <span class="total-price"> $${(
            this.fixPrice(this.price.innerText) * +this.qt.innerText
          ).toFixed(2)}</span>
        </div>
      </div>

      <img src="public/images/icon-delete.svg" alt="" class="delete" />
    </div> 
    <div class="checkout-button">Checkout</div>`;
    }
    return "ENTREI";
  }

  emptyCartMessage: VoidFunction = () => {
    if (this.itemContainer && this.qtCart && this.qt) {
      this.qtCart.style.display = "none";
      this.qtCart.innerText = "";
      this.itemContainer.style.margin = "auto";
      this.itemContainer.innerHTML = "Your cart is empty.";
    }
  };

  removeItem: VoidFunction = () => {
    this.emptyCartMessage();
  };

  addInCart: VoidFunction = () => {
    if (this.qt && +this.qt.innerText > 0) {
      if (this.itemContainer && this.qtCart) {
        this.qtCart.style.display = "block";
        this.qtCart.innerText = this.qt.innerText;
        this.itemContainer.style.margin = "0";
        this.itemContainer.innerHTML = this.setItem();
        this.itemContainer
          .querySelector(".delete")
          ?.addEventListener("click", this.removeItem);
      }
    }
  };

  addListener: VoidFunction = () => {
    this.add?.addEventListener("click", this.addInCart);
  };

  init(): this {
    this.emptyCartMessage();
    this.addListener();
    return this;
  }
}

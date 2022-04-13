export default class AddCart {
    itemContainer;
    item;
    add;
    qt;
    qtCart;
    name;
    price;
    thumbnail;
    constructor(elements) {
        this.itemContainer = document.querySelector(elements.itemsContainerCls);
        this.item = document.querySelector(elements.itemCls);
        this.add = document.querySelector(elements.addCls);
        this.qt = document.querySelector(elements.qtCls);
        this.qtCart = document.querySelector(elements.qtCartCls);
        this.name = document.querySelector(elements.nameCls);
        this.price = document.querySelector(elements.priceCls);
        this.thumbnail = document.querySelector(elements.thumbnailCls);
    }
    setItem() {
        if (this.thumbnail &&
            this.name &&
            this.price &&
            this.itemContainer &&
            this.qt) {
            return ` <div class="item" data-id=${this.name.getAttribute("data-id")}>
      <img src=${this.thumbnail.src} alt="" class="prod-img" />

      <div class="name-price">
        <p class="name-cart">${this.name.innerText}</p>
        <div class="price-cart">
          <span class="price-mult">$${(+this.price.innerText).toFixed(2)} x ${this.qt?.innerText}</span>
          <span class="total-price">$${(+this.price.innerText * +this.qt?.innerText).toFixed(2)}</span>
        </div>
      </div>

      <img src="public/images/icon-delete.svg" alt="" class="delete" />
    </div> `;
        }
        return "";
    }
    addInCart = () => {
        if (this.qt && +this.qt.innerText > 0) {
            if (this.itemContainer) {
                this.itemContainer.innerHTML = this.setItem();
            }
        }
    };
    addListener = () => {
        const events = ["click", "touchstart"];
        events.forEach((event) => this.add?.addEventListener(event, this.addInCart));
    };
    init() {
        if (this.itemContainer) {
            this.itemContainer.innerHTML = "Your cart is empty.";
        }
        this.addListener();
        return this;
    }
}

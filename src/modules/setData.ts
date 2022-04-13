import { getProductData } from "./productData.js";

type HTMLElementsClass = {
  mainImageCls: string;
  thumbsCls: string;
  brandCls: string;
  nameCls: string;
  descriptionCls: string;
  priceCls: string;
  descountCls: string;
  oldPriceCls: string;
};

type Data = {
  id: number;
  imgs: {
    big: string[];
    thumb: string[];
  };
  brand: string;
  name: string;
  description: string;
  price: number;
  descount: number;
};

export default class SetProductData {
  mainImg: HTMLElement | null;
  thumbs: HTMLElement | null;
  brand: HTMLElement | null;
  name: HTMLElement | null;
  description: HTMLElement | null;
  price: HTMLElement | null;
  descount: HTMLElement | null;
  oldPrice: HTMLElement | null;

  constructor(elements: HTMLElementsClass) {
    this.mainImg = document.querySelector(elements.mainImageCls);
    this.thumbs = document.querySelector(elements.thumbsCls);
    this.brand = document.querySelector(elements.brandCls);
    this.name = document.querySelector(elements.nameCls);
    this.description = document.querySelector(elements.descriptionCls);
    this.price = document.querySelector(elements.priceCls);
    this.oldPrice = document.querySelector(elements.oldPriceCls);
    this.descount = document.querySelector(elements.descountCls);
  }

  calcOldPrice(price: number, desc: number): string {
    return `$ ${(price / (desc / 100)).toFixed(2)}`;
  }

  setInfos(dataPromise: Promise<Data[] | undefined>): void {
    dataPromise.then((arr: Data[] | undefined): void => {
      if (
        this.brand &&
        this.name &&
        this.description &&
        this.price &&
        this.descount &&
        this.oldPrice &&
        !!arr
      ) {
        this.brand.innerText = arr[0].brand;
        this.name.innerText = arr[0].name;
        this.description.innerText = arr[0].description;
        this.price.innerText = `$ ${arr[0].price.toFixed(2)}`;
        this.descount.innerText = `${arr[0].descount}%`;
        this.oldPrice.innerText = this.calcOldPrice(
          arr[0].price,
          arr[0].descount
        );
      }
    });
  }

  setThumbnails(imgSrc: string): string {
    return `<div class='thumbnail'>
               <img src=${imgSrc} />
            </div>
    `;
  }

  setMainImg(imgSrc: string): string {
    return `<img src=${imgSrc} />`;
  }

  setImgs(dataPromise: Promise<Data[] | undefined>): void {
    dataPromise.then((arr: Data[] | undefined): void => {
      if (this.mainImg && !!arr) {
        this.mainImg.innerHTML = this.setMainImg(arr[0].imgs.big[0]);
        arr[0].imgs.thumb.forEach((imgSrc: string): void => {
          if (this.thumbs) {
            this.thumbs.innerHTML += this.setThumbnails(imgSrc);
          }
        });
        this.thumbs?.children[0].classList.add("active");
      }
    });
  }

  init(): this {
    const data: Promise<Data[] | undefined> = getProductData(
      "../../product-data.json"
    );
    this.setImgs(data);
    this.setInfos(data);
    return this;
  }
}

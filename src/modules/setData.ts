import { getProductData } from "./productData.js";
import * as T from "./types";

export type DataElementsClass = {
  mainImageCls: string;
  thumbsCls: string;
  brandCls: string;
  nameCls: string;
  descriptionCls: string;
  priceCls: string;
  descountCls: string;
  oldPriceCls: string;
};

export default class SetProductData {
  mainImg: T.MyElements;
  thumbs: T.MyElements;
  brand: T.MyElements;
  name: T.MyElements;
  description: T.MyElements;
  price: T.MyElements;
  descount: T.MyElements;
  oldPrice: T.MyElements;

  constructor(elements: DataElementsClass) {
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

  setInfos: T.PromiseData = (dataPromise) => {
    dataPromise.then((arr: T.Data[] | undefined): void => {
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
        this.name.setAttribute("data-id", `${arr[0].id}`);
        this.description.innerText = arr[0].description;
        this.price.innerText = `$ ${arr[0].price.toFixed(2)}`;
        this.descount.innerText = `${arr[0].descount}%`;
        this.oldPrice.innerText = this.calcOldPrice(
          arr[0].price,
          arr[0].descount
        );
      }
    });
  };

  setThumbnails(imgSrc: string): string {
    return `<div class='thumbnail'>
               <img src=${imgSrc} />
            </div>
    `;
  }

  setMainImg(imgSrc: string): string {
    return `<img src=${imgSrc} />`;
  }

  setImgs: T.PromiseData = (dataPromise) => {
    dataPromise.then((arr: T.Data[] | undefined): void => {
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
  };

  init(): this {
    const data: Promise<T.Data[] | undefined> = getProductData(
      "../../product-data.json"
    );
    this.setImgs(data);
    this.setInfos(data);
    return this;
  }
}

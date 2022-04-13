import { getProductData } from "./productData.js";

type HTMLElementsClass = {
  mainImageCls: string;
  thumbsCls: string;
  brandCls: string;
  nameCls: string;
  descriptionCls: string;
  priceCls: string;
  descountCls: string;
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

  constructor(elements: HTMLElementsClass) {
    this.mainImg = document.querySelector(elements.mainImageCls);
    this.thumbs = document.querySelector(elements.thumbsCls);
    this.brand = document.querySelector(elements.brandCls);
    this.name = document.querySelector(elements.nameCls);
    this.description = document.querySelector(elements.descriptionCls);
    this.price = document.querySelector(elements.priceCls);
    this.descount = document.querySelector(elements.descountCls);
  }

  setMainImg(imgSrc: Promise<string>): string {
    return `<img src=${imgSrc} alt='Main Image'>`;
  }

  setimgs(dataPromise: Promise<Data[]>): void {
    if (this.mainImg && this.thumbs) {
      this.mainImg.innerHTML = this.setMainImg(
        dataPromise.then((res) => res[0].imgs.big[0])
      );
    }
  }

  init(): this {
    this.setimgs(getProductData("../../product-data.json"));
    return this;
  }
}

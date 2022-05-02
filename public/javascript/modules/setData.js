import { getProductData } from "./productData.js";
import ThumbClick from "../modules/thumbClick.js";
export default class SetProductData {
    mainImg;
    thumbs;
    brand;
    name;
    description;
    price;
    descount;
    oldPrice;
    constructor(elements) {
        this.mainImg = document.querySelector(elements.mainImageCls);
        this.thumbs = document.querySelector(elements.thumbsCls);
        this.brand = document.querySelector(elements.brandCls);
        this.name = document.querySelector(elements.nameCls);
        this.description = document.querySelector(elements.descriptionCls);
        this.price = document.querySelector(elements.priceCls);
        this.oldPrice = document.querySelector(elements.oldPriceCls);
        this.descount = document.querySelector(elements.descountCls);
    }
    static calcOldPrice(price, desc) {
        return `$ ${(price / (desc / 100)).toFixed(2)}`;
    }
    setInfos = (dataPromise) => {
        dataPromise.then((arr) => {
            if (this.brand &&
                this.name &&
                this.description &&
                this.price &&
                this.descount &&
                this.oldPrice &&
                !!arr) {
                this.brand.innerText = arr[0].brand;
                this.name.innerText = arr[0].name;
                this.name.setAttribute("data-id", `${arr[0].id}`);
                this.description.innerText = arr[0].description;
                this.price.innerText = `$ ${arr[0].price.toFixed(2)}`;
                this.descount.innerText = `${arr[0].descount}%`;
                this.oldPrice.innerText = SetProductData.calcOldPrice(arr[0].price, arr[0].descount);
            }
        });
    };
    static setThumbnails(imgSrc) {
        return `<div class='thumbnail'>
               <img src=${imgSrc} />
            </div>
    `;
    }
    static setMainImg(imgSrc) {
        return `<img src=${imgSrc} />`;
    }
    setImgs = (dataPromise) => {
        dataPromise.then((arr) => {
            if (this.mainImg && !!arr) {
                this.mainImg.innerHTML = SetProductData.setMainImg(arr[0].imgs.big[0]);
                arr[0].imgs.thumb.forEach((imgSrc) => {
                    if (this.thumbs) {
                        this.thumbs.innerHTML += SetProductData.setThumbnails(imgSrc);
                    }
                });
                this.thumbs?.children[0].classList.add("active");
                const thumbClick = new ThumbClick({
                    mainImgCls: ".main-image img",
                    thumbCls: ".thumbnail",
                });
                thumbClick.init();
            }
        });
    };
    init() {
        const data = getProductData("../../Ecommerce-Product/product-data.json");
        this.setImgs(data);
        this.setInfos(data);
        return this;
    }
}

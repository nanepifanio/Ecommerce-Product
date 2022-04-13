import SetProductData from "./modules/setData.js";
const productDataCls = {
    mainImageCls: ".main-image",
    thumbsCls: ".thumbs",
    brandCls: ".brand",
    nameCls: ".name",
    descriptionCls: ".description",
    priceCls: ".actual-price",
    descountCls: ".discount",
    oldPriceCls: ".old-price del",
};
const pData = new SetProductData(productDataCls);
pData.init();
import OpenCart from "./modules/open-cart.js";
const cartElements = {
    cartIconSelector: "[data-cart='cartIcon']",
    cartSelector: "[data-cart='cart']",
    class: "active",
    eventsArr: ["click", "touchstart"],
};
const cart = new OpenCart(cartElements);
cart.init();
import AddCart from "./modules/add-cart.js";
const cartCls = {
    itemsContainerCls: ".items",
    itemCls: ".item",
    addCls: ".add",
    qtCls: ".qt .q",
    qtCartCls: ".qt-cart",
    nameCls: ".name",
    priceCls: ".actual-price",
    thumbnailCls: ".thumbnail img",
};
const add = new AddCart(cartCls);
add.init();

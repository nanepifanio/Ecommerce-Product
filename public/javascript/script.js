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
    addCls: ".add",
    qtCls: ".qt .q",
    qtCartCls: ".qt-cart",
};
const add = new AddCart(productDataCls, cartCls);
add.init();
import SetQuantity from "./modules/setQt.js";
const qt = new SetQuantity({
    qtMinusCls: ".qtminus",
    qtPlusCls: ".qtplus",
    qtCls: ".q",
});
qt.init();
import MenuMobile from "./modules/menu-mobile.js";
const menuMobile = new MenuMobile({
    button: "[data-menu='hamb']",
    list: "[data-menu='list']",
});
menuMobile.init();
import ThumbClick from "./modules/thumbClick.js";
setTimeout(() => {
    const thumbClick = new ThumbClick({
        mainImgCls: ".main-image img",
        thumbCls: ".thumbnail",
    });
    thumbClick.init();
}, 100);

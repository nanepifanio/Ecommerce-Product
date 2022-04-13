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

import initCart from "./modules/open-cart.js";
initCart();

import AddCart from "./modules/add-cart.js";
const add = new AddCart();

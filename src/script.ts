import initCart from "./modules/cart.js";
initCart();

import SetProductData from "./modules/setData.js";

const productDataCls = {
  mainImageCls: ".main-image",
  thumbsCls: ".thumbnail",
  brandCls: ".brand",
  nameCls: ".name",
  descriptionCls: ".description",
  priceCls: ".actual-price",
  descountCls: ".descount",
};

const pData = new SetProductData(productDataCls);
pData.init();

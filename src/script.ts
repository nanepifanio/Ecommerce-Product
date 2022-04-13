import initCart from "./modules/cart.js";
initCart();

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

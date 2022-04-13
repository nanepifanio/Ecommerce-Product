export type Data = {
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

export type PromiseData = (dataPromise: Promise<Data[] | undefined>) => void;

export type MyElements = HTMLElement | null;

export type HTMLElementsClass = {
  mainImageCls: string;
  thumbsCls: string;
  brandCls: string;
  nameCls: string;
  descriptionCls: string;
  priceCls: string;
  descountCls: string;
  oldPriceCls: string;
};

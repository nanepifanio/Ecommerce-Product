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

export type VoidFunction = () => void;

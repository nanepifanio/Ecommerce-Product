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

export const getProductData = async (url: string): Promise<Data[]> => {
  return await (await fetch(url)).json();
};

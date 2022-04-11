type Data = {
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

export const getProductData = async (
  url: string
): Promise<(() => Promise<Data>) | undefined> => {
  const data = await (await fetch(url)).json;
  return data;
};

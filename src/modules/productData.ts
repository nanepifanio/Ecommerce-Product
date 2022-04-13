import { Data } from "./types.js";

export const getProductData = async (
  url: string
): Promise<Data[] | undefined> => {
  return await (await fetch(url)).json();
};

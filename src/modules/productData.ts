export default function setProductData() {
  const mainPhoto = document.querySelector(".main-image") as HTMLDivElement;
  const thumbnails = document.querySelector(".thumbnail") as HTMLDivElement;

  const setData = (data: object): void => {};

  const getData = async (url: string): Promise<void> => {
    const data: object = await (await fetch(url)).json;
    setData(data);
  };

  getData("../../product-data.json");
}

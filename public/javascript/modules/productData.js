export const getProductData = async (url) => {
    const data = await (await fetch(url)).json;
    return data;
};

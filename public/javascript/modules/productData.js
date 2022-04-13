export const getProductData = async (url) => {
    return await (await fetch(url)).json();
};

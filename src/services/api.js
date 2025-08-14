import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8001/api';

export const getProducts = async () => {
    const response = await axios.get(`${baseUrl}/products`);
    return response.data;
}

export const fetchProductsByCategories = async (categoryId) => {
    const {data} = await axios.get(`${baseUrl}/categories/${categoryId}/products`);
    return data;
}

export const getProductById = async (productId) => {
    const response = await axios.get(`${baseUrl}/products/${productId}`);
    return response.data;
}
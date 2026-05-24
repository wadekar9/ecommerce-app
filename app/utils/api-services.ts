import { API_ROUTES } from "$constants/api.constants";
import { IProductsResponse } from "$types/dto.types";
import { convertToQueryParams, handleErrorMessage } from "./api-helper"
import { axiosInstance } from "./axios-instance";

const fetchProducts = async (params: Record<string, any>): Promise<IProductsResponse | null> => {
    try {
        const query = convertToQueryParams(params);
        const response = await axiosInstance.get(`${API_ROUTES.PRODUCTS}?${query}`);
        if (response.status == 200) {
            return response.data as IProductsResponse;
        }
        return null;
    } catch (error) {
        handleErrorMessage(error);
        return null;
    }
}

export default {
    fetchProducts
}
import { IProduct } from "./data.types";

export interface IProductsResponse {
    products: IProduct[],
    total: number,
    skip: number,
    limit: number
}
import { AxiosResponse } from "axios";
import instance from "@/core/api";
import { IProduct } from "@/common/type";
export const getAll = async () => {
  try {
    const reponse: AxiosResponse<IProduct[]> = await instance.get("/products");
    return reponse.data || [];
  } catch (error) {
    console.log("FETCH_PRODUCTS_ERROR", error);
  }
};

export const getOne = async (id: number) => {
  try {
    const reponse: AxiosResponse<IProduct> = await instance.get(
      `products/${id}`
    );
    return reponse.data || {};
  } catch (error) {
    console.log("FETCH_PRODUCTS_ERROR", error);
  }
};
export const addProduct = async (product: IProduct) => {
  try {
    const reponse: AxiosResponse<IProduct> = await instance.post(
      `products`,
      product
    );
    return reponse.data || {};
  } catch (error) {
    console.log("ADD_PRODUCTS_ERROR", error);
  }
};

export const updateProduct = async (product: IProduct) => {
  try {
    const reponse: AxiosResponse<IProduct> = await instance.patch(
      `products/${product.id}`,
      product
    );
    return reponse.data || {};
  } catch (error) {}
};

export const deleteProduct = async (productID: number) => {
  try {
    const reponse: AxiosResponse<null> = await instance.delete(
      `products/${productID}`
    );
    return reponse.data || {};
  } catch (error) {}
};

import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import { request, requestUnion, requestUnionToken } from "./http-client";

const cartService = {
  getCartProducts: (queryParams) =>
    requestUnionToken.get("/cart_product", { params: queryParams }),
  postCartProduct: (data) => requestUnionToken.post("/cart_product", data),
  deleteCartProduct: (params) =>
    requestUnionToken.delete(`cart_product/${params.id}`, {
      user_id: params.user_id,
    }),
  updateCartProduct: ({ id, params }) =>
    requestUnionToken.put(`cart_product/${id}`, params),
  postDeleverProduct: (data) => requestUnionToken.post("/order", data),
};

export const useGetCartProducts = ({ queryParams }) => {
  return useQuery(["GET_CART_PRODUCTS", queryParams], async () => {
    return await cartService.getCartProducts(queryParams);
  });
};

export const usePostCartProduct = (mutationSettings) => {
  return useMutation(
    (data) => cartService.postCartProduct(data),
    mutationSettings
  );
};

export const usePostDeleverProduct = (mutationSettings) => {
  return useMutation(
    (data) => cartService.postDeleverProduct(data),
    mutationSettings
  );
};

export const useDeleteCartProduct = (mutationSettings) => {
  return useMutation(
    (params) => cartService.deleteCartProduct(params),
    mutationSettings
  );
};

export const useUpdateCartProduct = (mutationSettings) => {
  return useMutation(
    ({ id, params }) => cartService.updateCartProduct({ id, params }),
    mutationSettings
  );
};

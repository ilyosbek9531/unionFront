import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import { request, requestUnion, requestUnionToken } from "./http-client";

const cartService = {
  getCartProducts: (queryParams) =>
  requestUnionToken.get("/cart_product", { params: queryParams }),
  postCartProduct: (data) => requestUnionToken.post("/cart_product", data),
  deleteCartProduct: (params)=>requestUnionToken.delete(`cart_product/${params.id}`, {user_id: params.user_id}) 

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

  export const useDeleteCartProduct = (mutationSettings) => {
    return useMutation(
      (params) => cartService.deleteCartProduct(params),
      mutationSettings
    );
  };
  
  
import { useMutation, useQuery } from "react-query";
import { requestUnion, requestUnionToken } from "./http-client";

const productsService = {
  getProducts: (queryParams) =>
    requestUnion.get("/product", { params: queryParams }),
  getCategory: (queryParams) =>
    requestUnion.get("category", { params: queryParams }),
  getUniversities: (queryParams) =>
    requestUnion.get("/university", { params: queryParams }),
  postApplication: (data) => requestUnionToken.post("/application", data),
};

export const useGetProducts = ({ queryParams }) => {
  return useQuery(["GET_PRODUCTS", queryParams], async () => {
    return await productsService.getProducts(queryParams);
  });
};

import { useInfiniteQuery, useMutation } from "react-query";
import { request, requestUnion, requestUnionToken } from "./http-client";

const productService = {
  getProductData: (queryParams, pageParam) =>
    requestUnion.get("/product", {
      params: {
        ...queryParams,
        ...pageParam,
      },
    }),

  getProductCategories: (queryParams) =>
    requestUnion.get("/category", { params: queryParams }),
  getUniversities: (queryParams) =>
    requestUnion.get("/university", { params: queryParams }),
  postFavourite: (data) => requestUnionToken.post("/favourite_product", data),
};

export const useGetProductDataInfinite = ({ queryParams, queryKey }) => {
  return useInfiniteQuery(
    [queryKey, queryParams],
    async ({ pageParam = { limit: 10, offset: 0 } }) => {
      return await productService
        .getProductData(queryParams, pageParam)
        .then((res) => res);
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const limit = 10;
        const offset = allPages.length * limit;
        const totalCount = lastPage.count;

        if (offset < totalCount) {
          return { limit, offset };
        }

        return undefined;
      },
    }
  );
};

export const useGetCategories = ({ queryParams }) => {
  return useQuery(["GET_CATEGORIES", queryParams], async () => {
    return await productService.getProductCategories(queryParams);
  });
};

export const useGetUniversities = ({ queryParams }) => {
  return useQuery(["GET_UNIVERSITIES", queryParams], async () => {
    return await productService.getUniversities(queryParams);
  });
};

export const usePostFavourite = (mutationSettings) => {
  return useMutation(
    (data) => productService.postFavourite(data),
    mutationSettings
  );
};

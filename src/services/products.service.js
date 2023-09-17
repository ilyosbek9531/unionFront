import { useInfiniteQuery } from "react-query";
import { request, requestUnion } from "./http-client";

const productService = {
  getProductData: (queryParams, pageParam) =>
    requestUnion.get("/product", {
      params: {
        ...queryParams,
        ...pageParam,
      },
    }),
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

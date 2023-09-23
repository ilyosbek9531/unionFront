import { useInfiniteQuery, useMutation, useQuery } from "react-query";
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
  getSingleProduct: (params, queryParams) =>
    requestUnion.get(`/product/${params}`, { params: queryParams }),
  getSingleProductImages: (queryParams) =>
    requestUnion.get("product_image", { params: queryParams }),
  getCategoryProduct: (queryParams) =>
    requestUnion.get("/product", { params: queryParams }),
};

export const useGetProductDataInfinite = ({
  queryParams,
  queryKey,
  pathname,
}) => {
  return useInfiniteQuery(
    [queryKey, queryParams, pathname],
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
      cacheTime: 0,
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

export const useGetSingleProduct = ({ params, queryParams }) => {
  return useQuery(["GET_SINGLE_PRODUCT", queryParams], async () => {
    return await productService.getSingleProduct(params, queryParams);
  });
};

export const useGetSingleProductImage = ({ queryParams }) => {
  return useQuery(["GET_SINGLE_PRODUCT_IMAGE", queryParams], async () => {
    return await productService.getSingleProductImages(queryParams);
  });
};
export const useGetCategoryProduct = ({ queryParams, querySettings }) => {
  return useQuery(
    ["GET_CATAGORY_PRODUCTS", queryParams],
    async () => {
      return await productService.getCategoryProduct(queryParams);
    },
    querySettings
  );
};

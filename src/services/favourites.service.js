import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import { requestUnionToken } from "./http-client";

const favouriteService = {
  getFavouriteData: (params, queryParams, pageParam) =>
    requestUnionToken.get(`/favourite_product/${params}`, {
      params: {
        ...queryParams,
        ...pageParam,
      },
    }),
  getFavouriteCount: (params, queryParams) =>
    requestUnionToken.get(`/favourite_product/${params}`, {
      params: queryParams,
    }),
};

export const useGetFavouriteDataInfinite = ({
  params,
  queryParams,
  queryKey,
}) => {
  return useInfiniteQuery(
    [queryKey, queryParams],
    async ({ pageParam = { limit: 10, offset: 0 } }) => {
      return await favouriteService
        .getFavouriteData(params, queryParams, pageParam)
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

export const useGetFavouriteCount = ({ params, queryParams }) => {
  return useQuery(["GET_FAVOURITE_COUNT", queryParams], async () => {
    return await favouriteService.getFavouriteCount(params, queryParams);
  });
};

import { useMutation, useQuery } from "react-query";
import { queryClient, requestUnion, requestUnionToken } from "./http-client";

const mainService = {
  getBanner: (queryParams) =>
    requestUnion.get("/banner", { params: queryParams }),
  // getTopProducts: (queryParams)=> requestUnion.get("/", {params: queryParams}),
  getCategory: (queryParams) =>
    requestUnion.get("category", { params: queryParams }),
  getUniversities: (queryParams) =>
    requestUnion.get("/university", { params: queryParams }),
  postApplication: (data) => requestUnionToken.post("/application", data),
};

export const useGetBanner = ({ queryParams }) => {
  return useQuery(["GET_BANNER", queryParams], async () => {
    return await mainService.getBanner(queryParams);
  });
};

export const useGetTopProducts = ({ queryParams }) => {
  return useQuery(["GET_TOP_PRODUCTS", queryParams], async () => {
    return await mainService.getBanner(queryParams);
  });
};

export const useGetCategories = ({ queryParams }) => {
  return useQuery(["", queryParams], async () => {
    return await mainService.getCategory(queryParams);
  });
};

export const useGetUniversities = ({ queryParams }) => {
  return useQuery(["GET_UNIVERSITIES", queryParams], async () => {
    return await mainService.getUniversities(queryParams);
  });
};

export const usePostApplication = (mutationSettings) => {
  return useMutation(
    (data) => mainService.postApplication(data),
    mutationSettings
  );
};

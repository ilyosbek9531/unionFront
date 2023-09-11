import { useQuery } from "react-query";
import { requestUnion } from "./http-client";

const mainService = {
  getBanner: (queryParams) =>
    requestUnion.get("/banner", { params: queryParams }),
};

export const useGetBanner = ({ queryParams }) => {
  return useQuery(["GET_BANNER", queryParams], async () => {
    return await mainService.getBanner(queryParams);
  });
};

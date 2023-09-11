import { useQuery } from "react-query";
import { requestUnionAuth } from "./http-client";

const mainService = {
  getBanner: (queryParams) =>
    requestUnionAuth.get("/banner", { params: queryParams }),
};

export const useGetBanner = ({ queryParams }) => {
  return useQuery(["GET_BANNER", queryParams], async () => {
    return await mainService.getBanner(queryParams);
  });
};

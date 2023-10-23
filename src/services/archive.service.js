import { useMutation, useQuery } from "react-query";
import { requestUnionToken } from "./http-client";

const archiveService = {
    getArchiveProducts: (queryParams) =>
    requestUnionToken.get("/order", { params: queryParams }),
};

export const useGetArchiveProducts = ({ queryParams }) => {
    return useQuery(["GET_ARCHIVE_PRODUCTS", queryParams], async () => {
      return await archiveService.getArchiveProducts(queryParams);
    });
  };


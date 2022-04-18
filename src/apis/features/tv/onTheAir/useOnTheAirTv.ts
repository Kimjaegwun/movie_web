import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { ListResponse, TVDetail } from "../../../../types";
import { onTheAirApi } from "../../../tvApi";

const useOnTheAirTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "onTheAirTv",
    onTheAirApi
  );
};

export default useOnTheAirTv;

import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { ListResponse, TVDetail } from "../../../../types";
import { airingTodayApi } from "../../../tvApi";

const useAiringTodayTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "airingTodayTv",
    airingTodayApi
  );
};

export default useAiringTodayTv;

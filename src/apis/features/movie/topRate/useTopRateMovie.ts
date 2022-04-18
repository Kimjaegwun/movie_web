import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { ListResponse, MovieDetail } from "../../../../types";
import { topRatedApi } from "../../../movieApi";

const useTopRateMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "topRateMovie",
    topRatedApi
  );
};

export default useTopRateMovie;

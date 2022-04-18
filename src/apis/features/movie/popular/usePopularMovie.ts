import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { ListResponse, MovieDetail } from "../../../../types";
import { popularApi } from "../../../movieApi";

const usePopularMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "popularMovie",
    popularApi
  );
};

export default usePopularMovie;

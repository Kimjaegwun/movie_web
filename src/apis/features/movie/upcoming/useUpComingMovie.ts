import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { ListResponse, MovieDetail } from "../../../../types";
import { upcomingApi } from "../../../movieApi";

const useUpComingMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "upComingMovie",
    upcomingApi
  );
};

export default useUpComingMovie;

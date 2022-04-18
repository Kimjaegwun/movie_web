import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { MovieDetail } from "../../../../types";
import { latestApi } from "../../../movieApi";

const useLatestMovie = () => {
  return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
    "latestMovie",
    latestApi
  );
};

export default useLatestMovie;

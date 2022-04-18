import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { ListResponse, MovieDetail } from "../../../../types";
import { nowPlayingApi } from "../../../movieApi";

const useNowPlayingMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "nowPlayingMovie",
    nowPlayingApi
  );
};

export default useNowPlayingMovie;

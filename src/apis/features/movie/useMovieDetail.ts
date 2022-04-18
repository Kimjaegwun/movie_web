import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { MovieDetail } from "../../../types";
import { detailApi } from "../../movieApi";

const useMovieDetail = (query: string) => {
  const queryFn = () => detailApi(query);

  return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
    ["movieDetail", query],
    queryFn,
    { enabled: Boolean(query) }
  );
};

export default useMovieDetail;

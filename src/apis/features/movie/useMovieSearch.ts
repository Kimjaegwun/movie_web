import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { ListResponse, Movie } from "../../../types";
import { searchApi } from "../../movieApi";

const useMovieSearch = (query: string) => {
  return useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>(
    ["searchMovie", query],
    () => searchApi(query),
    { enabled: Boolean(query) }
  );
};

export default useMovieSearch;

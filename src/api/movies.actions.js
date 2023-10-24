import { requestSearchMoviesData, requestSingleMovie } from "../services/requests/movies.requests";

export const fetchSearchMoviesAction = async (queryKey) => {
    try {
      const {data} = await requestSearchMoviesData(queryKey);
      return data;
    } catch (error) {
      throw error.response.data;
    }
};

export const fetchSingleMovieAction = async ({ queryKey }) => {
    try {
      const data = await requestSingleMovie(queryKey[1]);
      return data;
    } catch (error) {
      throw error.response.data;
    }
};
import api from '../interceptor';

export const requestSearchMoviesData = async (query_string) => {
  return await api.get(`?apikey=c56f189e&s=${query_string}`);
};

export const requestSingleMovie = async (id) => {
  return await api.get(`?apikey=c56&i=${id}`);
};
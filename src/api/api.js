import axios from 'axios';

const API_KEY = 'dd6550ecf9adce48a233515c99fe191a';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`);
  return response.data.results;
};

export const fetchMovieByName = async name => {
  const response = await axios.get(`search/movie?query=${name}`);
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?`);
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?`);
  return response.data.results;
};
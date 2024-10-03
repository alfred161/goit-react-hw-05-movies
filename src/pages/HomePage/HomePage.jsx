import { fetchTrendingMovies } from 'api/api';
import { MovieListComponent } from 'components/MovieListComponent/MovieListComponent';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import css from './HomePage.module.css';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadTrendingMovies = async () => {
    setIsLoading(true);
    try {
      const movies = await fetchTrendingMovies();
      if (movies.length === 0) {
        Notify.failure(`Sorry, no trending movies available.`);
        return;
      }

      setTrendingMovies(movies);
    } catch (error) {
      Notify.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <h2 className={css.h2}>Trending Today</h2>
      {trendingMovies.length > 0 && (
        <MovieListComponent movies={trendingMovies} />
      )}
    </>
  );
};

export default HomePage;

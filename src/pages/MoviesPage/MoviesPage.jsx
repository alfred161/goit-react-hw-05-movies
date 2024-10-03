import { fetchMovieByName } from 'api/api';
import { MovieListComponent } from 'components/MovieListComponent/MovieListComponent';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import {
  Outlet,
  // useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { Notify } from 'notiflix';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (!movieName) return;
      setIsLoading(true);

      try {
        const movies = await fetchMovieByName(movieName);
        if (movies.length === 0) {
          Notify.failure(`Sorry, there are no movies available by that name.`);
        }

        setMovies(movies);
      } catch (error) {
        Notify.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [movieName]);

  return (
    <>
      {!movieId && (
        <div className={css.inputWrapper}>
          <input
            type="text"
            className={css.input}
            onChange={e => updateQueryString(e.target.value)}
            placeholder="Search movies..."
            autoFocus
          />
        </div>
      )}

      {!movieId &&
        (isLoading ? <Loader /> : <MovieListComponent movies={movies} />)}

      <Outlet />
    </>
  );
};

export default MoviesPage;

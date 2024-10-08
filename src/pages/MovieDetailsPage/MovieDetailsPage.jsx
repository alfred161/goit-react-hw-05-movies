import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails } from 'api/api';
import { useLocation, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';
  // useEffect(() => {
  //   console.log('Location object:', location);
  // }, [location]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        if (!movie) {
          Notify.failure(`Sorry, movie details not available.`);
          return;
        }

        setMovieDetails(movie);
      } catch (error) {
        Notify.error(error);
      }
    };

    fetchDetails();
  }, [movieId]);

  if (!movieDetails) return;

  return (
    <>
      {backLink && (
        <Link to={backLink} className={css.goBackLink}>
          <button className={css.goBackButton}>⬅ Go back</button>
        </Link>
      )}
      <div className={css.movieDetailsContainer}>
        <img
          className={css.image}
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
              : `https://fakeimg.pl/600x400?text=No+Image+Available`
          }
          alt={movieDetails.title}
        />
        <div className={css.movieDetailsWrap}>
          <h1>{movieDetails.title}</h1>
          <h4>User score: {Math.round(movieDetails.vote_average * 10)}%</h4>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>
            {movieDetails.genres.map(genre => (
              <span key={genre.id}> {genre.name}</span>
            ))}
          </p>
        </div>
      </div>
      <div className={css.additionalInfoContainer}>
        <h3>Additional information</h3>
        <Link to="cast" className={css.link}>
          <button className={css.infoButton}>Cast</button>
        </Link>
        <Link to="reviews" className={css.link}>
          <button className={css.infoButton}>Reviews</button>
        </Link>
        <hr />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetailsPage;

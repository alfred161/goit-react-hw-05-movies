import PropTypes from 'prop-types';
import css from './MovieListComponent.module.css';
import { MovieListItemComponent } from 'components/MovieListItemComponent/MovieListItemComponent';

export const MovieListComponent = ({ movies }) => {
  return (
    <>
      {movies ? (
        <ul className={css.movieList}>
          {movies.map(({ id, title }) => (
            <MovieListItemComponent key={id} id={id} title={title} />
          ))}
        </ul>
      ) : (
        <p>Movie not found.</p>
      )}
    </>
  );
};

MovieListComponent.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

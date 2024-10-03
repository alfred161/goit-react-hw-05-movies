import PropTypes from 'prop-types';
import css from './MovieListItemComponent.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MovieListItemComponent = ({ id, title }) => {
  const location = useLocation();

  return (
    <>
      <li className={css.movieItem} key={id}>
        <Link
          to={`/movies/${id}`}
          state={{
            from: location,
            movieTitle: { title },
          }}
          className={css.movieLink}
        >
          <h4 className={css.movieItemTitle}>{title}</h4>
        </Link>
      </li>
    </>
  );
};

MovieListItemComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

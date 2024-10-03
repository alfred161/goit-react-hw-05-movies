import PropTypes from 'prop-types';
import css from './CastListItemComponent.module.css';

export const CastListItemComponent = ({
  profilePath,
  originalName,
  name,
  character,
}) => {
  return (
    <>
      <li className={css.castListItem}>
        <img
          width="100"
          height="150"
          src={
            profilePath
              ? `https://image.tmdb.org/t/p/w300${profilePath}`
              : `https://fakeimg.pl/600x400?text=No+Image+Available`
          }
          alt={originalName}
        />
        <div className={css.nameContainer}>
          <h5 className={css.name}>{name}</h5>
          <h5 className={css.character}>Character: {character}</h5>
        </div>
      </li>
    </>
  );
};

CastListItemComponent.propTypes = {
  profilePath: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  originalName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

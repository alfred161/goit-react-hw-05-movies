import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/api';
import { CastListItemComponent } from 'components/CastListItemComponent/CastListItemComponent';
import { Notify } from 'notiflix';
import css from './CastListComponent.module.css';

const CastListComponent = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        if (!response.length) {
          Notify.failure(`Sorry, movie cast not found.`);
          return;
        }

        setCast(response);
      } catch (error) {
        Notify.error(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      {cast && (
        <div>
          <ul className={css.castList}>
            {cast.map(
              ({ id, profile_path, original_name, name, character }) => (
                <CastListItemComponent
                  key={id}
                  profilePath={profile_path}
                  originalName={original_name}
                  name={name}
                  character={character}
                />
              )
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default CastListComponent;

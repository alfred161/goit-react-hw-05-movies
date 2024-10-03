// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/api';
import { ReviewListItemComponent } from 'components/ReviewListItemComponent/ReviewListItemComponent';
import { Notify } from 'notiflix';

const ReviewsListComponent = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        if (!response.length) {
          Notify.failure(`Sorry, no movie reviews found.`);
          return;
        }

        setReviews(response);
      } catch (error) {
        Notify.error(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews && (
        <div>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <ReviewListItemComponent
                key={id}
                author={author}
                content={content}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ReviewsListComponent;

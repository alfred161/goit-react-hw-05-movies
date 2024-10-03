import PropTypes from 'prop-types';
import css from './ReviewListItemComponent.module.css';

export const ReviewListItemComponent = ({ author, content }) => {
  return (
    <>
      <li>
        <h4>Author: {author}</h4>
        <p className={css.content}>{content}</p>
      </li>
    </>
  );
};

ReviewListItemComponent.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

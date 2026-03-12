import { UserComment } from '@/types/offer';
import Rating from '../rating/rating';
import dayjs from 'dayjs';

type ReviewProps = {
  comment: UserComment;
}

function Review({ comment }: ReviewProps): JSX.Element {
  const commentDate = dayjs(comment.date).format('MMMM YYYY');
  const dateTime = dayjs(comment.date).format('YYYY-MM-DD');

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <Rating rating={comment.rating} blockClass={'reviews'} />
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{commentDate}</time>
      </div>
    </li>
  );
}

export default Review;

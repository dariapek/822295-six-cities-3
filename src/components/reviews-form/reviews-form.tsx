import { useState } from 'react';
import StarInput from '../star-input/star-input';
import { ReviewFormData } from '@/types/review';
import { useAppDispatch } from '@/hooks';
import { fetchUserCommentsAction, submitUserCommentAction } from '@/store/user/user.api';
import { toast } from 'react-toastify';

type ReviewsFormProps = {
  offerId: string;
}

const STARS_COUNT = 5;
const ZERO_RATING_COUNT = 0;
const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

function ReviewsForm({ offerId }: ReviewsFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ReviewFormData>({
    rating: 0,
    comment: '',
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;

    setFormData({
      ...formData,
      [name]: name === 'rating' ? Number(value) : value,
    });
  };

  const starsArray = Array.from({ length: STARS_COUNT }, (_, i) => (i + 1)).reverse();

  const isFormValid =
    formData.rating > ZERO_RATING_COUNT &&
    formData.comment.length >= MIN_COMMENT_LENGTH &&
    formData.comment.length <= MAX_COMMENT_LENGTH;

  const cleanUpForm = () => {
    setFormData({
      rating: 0,
      comment: '',
    });
  };

  const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setIsSubmitting(true);

    dispatch(submitUserCommentAction(
      {
        offerId,
        comment: formData.comment,
        rating: formData.rating
      }))
      .unwrap()
      .then(cleanUpForm)
      .catch(() => toast.error('Something went wrong. Please try later'))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {starsArray.map((starValue) => (
          <StarInput
            key={starValue}
            value={starValue}
            disabled={isSubmitting}
            onChange={handleChange}
            checked={formData.rating === starValue}
          />
        ))}
      </div>

      <textarea
        onChange={handleChange}
        value={formData.comment}
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        minLength={50}
        maxLength={300}
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isSubmitting}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          disabled={!isFormValid || isSubmitting}
          className="reviews__submit form__submit button"
          type="submit"
        >Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;

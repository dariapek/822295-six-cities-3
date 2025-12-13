import { useState } from 'react';
import StarInput from '../star-input/star-input';

type ReviewFormData = {
  rating: number;
  review: string;
}

const StarsCount = 5;

function ReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState<ReviewFormData>({
    rating: 0,
    review: '',
  });

  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const starsArray = Array.from({ length: StarsCount }, (_, i) => (i + 1)).reverse();

  const isFormValid =
    formData.rating > 0 &&
    formData.review.length >= 50 &&
    formData.review.length <= 300;

  const cleanUpForm = () => {
    setFormData({
      rating: 0,
      review: '',
    });
  };

  const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    cleanUpForm();
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
        {starsArray.map((starValue) => <StarInput key={starValue} value={starValue} fieldChangeHandle={fieldChangeHandle} />)}
      </div>

      <textarea
        onChange={fieldChangeHandle}
        value={formData.review}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        minLength={50}
        maxLength={300}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          disabled={!isFormValid}
          className="reviews__submit form__submit button"
          type="submit"
        >Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;

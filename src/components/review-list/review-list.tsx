import Review from '../review/review';
import ReviewsForm from '../reviews-form/reviews-form';

function ReviewList(): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <Review />
      </ul>
      <ReviewsForm />
    </section>
  );
}

export default ReviewList;

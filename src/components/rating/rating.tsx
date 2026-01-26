import { calculateOfferRating } from '@/utils/utils';
import clsx from 'clsx';

type RatingProps = {
  rating: number;
  blockClass: 'place-card' | 'offer' | 'reviews';
  isValueVisible?: boolean;
}

function Rating({ rating, blockClass, isValueVisible = false }: RatingProps): JSX.Element {
  return (
    <div className={clsx(`${blockClass}__rating`, 'rating')}>
      <div className={clsx(`${blockClass}__stars`, 'rating__stars')}>
        <span style={{ width: `${calculateOfferRating(rating)}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>

      {isValueVisible && (<span className="offer__rating-value rating__value">{rating}</span>)}
    </div>
  );
}

export default Rating;

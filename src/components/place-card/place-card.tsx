import { OfferListItem } from '@/types/offer';
import Mark from '../mark/mark';
import Bookmark from '../bookmark/bookmark';
import clsx from 'clsx';
import Rating from '../rating/rating';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '@/const';
import { capitalizeFirst } from '@/utils/utils';

type PlaceCardProp = {
  offer: OfferListItem;
  viewType: 'city' | 'favorite' | 'nearby';
  onOfferHover?: (offerId: string | undefined) => void;
}

interface ViewTypeClass {
  article: string;
  imageWrapper: string;
  cardInfo?: string;
}

interface ImageSize {
  width: number;
  height: number;
}

const viewTypeClass: Record<PlaceCardProp['viewType'], ViewTypeClass> = {
  city: {
    article: 'cities__card place-card',
    imageWrapper: 'cities__image-wrapper place-card__image-wrapper',
  },
  favorite: {
    article: 'favorites__card place-card',
    imageWrapper: 'favorites__image-wrapper place-card__image-wrapper',
    cardInfo: 'favorites__card-info',
  },
  nearby: {
    article: 'near-places__card place-card',
    imageWrapper: 'near-places__image-wrapper place-card__image-wrapper',
  },
};

const imageSize: Record<PlaceCardProp['viewType'], ImageSize> = {
  city: {
    width: 260,
    height: 200,
  },
  favorite: {
    width: 150,
    height: 110,
  },
  nearby: {
    width: 260,
    height: 200,
  }
};

function PlaceCard({ offer, viewType, onOfferHover = () => { } }: PlaceCardProp): JSX.Element {
  const { title, type, price, rating, previewImage } = offer;

  return (
    <article
      onMouseEnter={() => onOfferHover?.(offer.id)}
      onMouseLeave={() => onOfferHover?.(undefined)}
      className={viewTypeClass[viewType].article}
    >
      {offer.isPremium && <Mark containerClass={'place-card__mark'} />}
      <div className={viewTypeClass[viewType].imageWrapper}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={imageSize[viewType].width} height={imageSize[viewType].height} alt="Place image" />
        </a>
      </div>
      <div className={clsx('place-card__info', viewTypeClass[viewType].cardInfo ?? '')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark isFavorite={offer.isFavorite} blockClass={'place-card'} />
        </div>
        <Rating rating={rating} blockClass={'place-card'} />
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { id: offer.id })}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirst(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

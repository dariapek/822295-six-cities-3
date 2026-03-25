import Bookmark from '@/components/bookmark/bookmark';
import CityMap from '@/components/city-map/city-map';
import FullPageError from '@/components/full-page-error/full-page-error';
import FullPageLoading from '@/components/full-page-loading/full-page-loading';
import Gallery from '@/components/gallery/gallery';
import Header from '@/components/header/header';
import Mark from '@/components/mark/mark';
import NearPlaceList from '@/components/near-place-list/near-place-list';
import Rating from '@/components/rating/rating';
import ReviewList from '@/components/review-list/review-list';
import { AppRoute } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchNearbyOffersAction, fetchOfferAction } from '@/store/data/data.api';
import {
  getCurrentOffer,
  getIsCurrentOfferLoading,
  getIsNearbyOffersLoading,
  getIsOfferPageNotFound,
  getLoadCurrentOfferError,
  getNearbyOffers,
} from '@/store/data/data.selectors';
import { OfferListItem } from '@/types/offer';
import { capitalize } from '@/utils/utils';
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const MAX_NEARBY_PINS = 3;

function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const offerId = useParams().id as string;

  const currentOffer = useAppSelector(getCurrentOffer);
  const isCurrentOfferLoading = useAppSelector(getIsCurrentOfferLoading);
  const loadCurrentOfferError = useAppSelector(getLoadCurrentOfferError);
  const isOfferPageNotFound = useAppSelector(getIsOfferPageNotFound);
  const isNearbyOffersLoading = useAppSelector(getIsNearbyOffersLoading);

  const nearbyOffers = useAppSelector(getNearbyOffers);
  const mapOffers = [...nearbyOffers.slice(0, MAX_NEARBY_PINS), currentOffer] as Array<OfferListItem>;

  useEffect(() => {
    dispatch(fetchOfferAction({ offerId }));
    dispatch(fetchNearbyOffersAction({ offerId }));
  }, [dispatch, offerId]);

  if (isOfferPageNotFound) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }

  if (isCurrentOfferLoading || !currentOffer) {
    return <FullPageLoading />;
  }

  if (!nearbyOffers.length && !isNearbyOffersLoading) {
    toast.warning('Failed to load nearby offers. Please try again later.');
  }

  if (loadCurrentOfferError !== null) {
    return <FullPageError />;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <Gallery images={currentOffer.images} />

          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer?.isPremium && <Mark containerClass={'offer__mark'} />}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer?.title}
                </h1>
                <Bookmark isFavorite={currentOffer.isFavorite} blockClass={'offer'} />
              </div>
              <Rating rating={currentOffer.rating} blockClass={'offer'} isValueVisible />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalize(currentOffer.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer.goods.map((good) => (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {currentOffer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {currentOffer.host.isPro && 'Pro'}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>

              <ReviewList offerId={offerId} />
            </div>
          </div>
          <CityMap blockName={'offer'} cityOffersList={mapOffers} selectedOfferId={offerId} />
        </section>
        <NearPlaceList offers={nearbyOffers} />
      </main>
    </div>
  );
}

export default OfferPage;

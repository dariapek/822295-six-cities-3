import Bookmark from '@/components/bookmark/bookmark';
import CityMap from '@/components/city-map/city-map';
import Gallery from '@/components/gallery/gallery';
import Header from '@/components/header/header';
import Mark from '@/components/mark/mark';
import NearPlaceList from '@/components/near-place-list/near-place-list';
import Rating from '@/components/rating/rating';
import ReviewList from '@/components/review-list/review-list';
import { AppRoute } from '@/const';
import { OfferListItem } from '@/types/offer';
import { capitalize } from '@/utils/utils';
import { Navigate, useLocation } from 'react-router-dom';

type OfferPageProps = {
  offers: OfferListItem[];
};

const galleryImages: string[] = [
  'img/room.jpg',
  'img/apartment-01.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/studio-01.jpg',
  'img/apartment-01.jpg',
];

function OfferPage({ offers }: OfferPageProps): JSX.Element {
  const offerId = useLocation().pathname.replace('/offer/', '');
  const currentOffer = offers.find((offer) => (offer.id === offerId));

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <Gallery images={galleryImages} />

          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium && <Mark containerClass={'offer__mark'} />}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <Bookmark isFavorite={false} blockClass={'offer'} />
              </div>
              <Rating rating={currentOffer.rating} blockClass={'offer'} isValueVisible />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalize(currentOffer.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">
                    Wi-Fi
                  </li>
                  <li className="offer__inside-item">
                    Washing machine
                  </li>
                  <li className="offer__inside-item">
                    Towels
                  </li>
                  <li className="offer__inside-item">
                    Heating
                  </li>
                  <li className="offer__inside-item">
                    Coffee machine
                  </li>
                  <li className="offer__inside-item">
                    Baby seat
                  </li>
                  <li className="offer__inside-item">
                    Kitchen
                  </li>
                  <li className="offer__inside-item">
                    Dishwasher
                  </li>
                  <li className="offer__inside-item">
                    Cabel TV
                  </li>
                  <li className="offer__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    Angelina
                  </span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>

              <ReviewList />
            </div>
          </div>
          <CityMap blockName={'offer'} cityOffersList={offers} />
        </section>
        <NearPlaceList offers={offers} />
      </main>
    </div>
  );
}

export default OfferPage;

import CityMap from '@/components/city-map/city-map';
import Header from '@/components/header/header';
import Locations from '@/components/locations/locations';
import PlacesEmpty from '@/components/places-empty/places-empty';
import Places from '@/components/places/places';
import { AppRoute } from '@/const';
import { OfferListItem } from '@/types/offer';
import { getOffersByCity, isLocationName } from '@/utils/utils';
import clsx from 'clsx';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


type MainPageProp = {
  offers: Array<OfferListItem>;
}

function MainPage({ offers }: MainPageProp): JSX.Element {
  const city = useLocation().pathname.replace('/city/', '');
  const amsterdamOffers = getOffersByCity(offers, 'Amsterdam');
  const isOffersEmpty = amsterdamOffers.length === 0;

  const [selectedOffer, setSelectedOffer] = useState<OfferListItem | undefined>(undefined);

  if (!isLocationName(city)) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }

  const handleOfferHover = (offerId: string | undefined) => {
    const currentOffer = offerId ? offers.find((offer) => offer.id === offerId) : undefined;

    setSelectedOffer(currentOffer);
  };

  return (
    <div className={clsx('page', 'page--gray', 'page--main')}>
      <Header />
      <main className={clsx('page__main', 'page__main--index', isOffersEmpty && 'page__main--index-empty')}>
        <h1 className="visually-hidden">Cities</h1>
        <Locations currentCity={city} />
        <div className="cities">
          <div className="cities__places-container container">
            {isOffersEmpty ? <PlacesEmpty /> : <Places offers={offers} city={city} onOfferHover={handleOfferHover} />}

            <div className="cities__right-section">
              {!isOffersEmpty && <CityMap blockName={'cities'} cityOffersList={amsterdamOffers} selectedOffer={selectedOffer} />}
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainPage;

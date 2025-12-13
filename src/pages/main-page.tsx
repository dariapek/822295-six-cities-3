import CityMap from '@/components/city-map/city-map';
import Locations from '@/components/locations/locations';
import PlaceCardList from '@/components/place-card-list/place-card-list';
import Sorting from '@/components/sorting/sorting';
import { OfferListItem } from '@/types/offer';
import { useState } from 'react';

type MainPageProp = {
  offers: Array<OfferListItem>;
}

function MainPage({ offers }: MainPageProp): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedOffer, setSelectedOffer] = useState<OfferListItem | null>(null);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Locations />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <Sorting />
            <PlaceCardList offers={offers} onChangeCardState={(offer: OfferListItem | null) => setSelectedOffer(offer)} />
          </section>

          <div className="cities__right-section">
            <CityMap blockName={'cities'} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;

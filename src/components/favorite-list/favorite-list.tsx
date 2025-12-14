import { OfferListItem } from '@/types/offer';
import PlaceCard from '../place-card/place-card';

type FavoriteListProp = {
  favoritesOffers: Array<OfferListItem>;
}

type GroupedByCity = {
  city: string;
  offers: OfferListItem[];
};

function groupOffersByCity(offerList: OfferListItem[]): GroupedByCity[] {
  const map = offerList.reduce<Record<string, OfferListItem[]>>((acc, offer) => {
    const cityName = offer.city.name;
    (acc[cityName] ||= []).push(offer);
    return acc;
  }, {});

  return Object.entries(map).map(([city, offers]) => ({
    city,
    offers,
  }));
}


function FavoriteList({ favoritesOffers }: FavoriteListProp): JSX.Element {
  const groupedOffers = groupOffersByCity(favoritesOffers);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <ul className="favorites__list">
        {groupedOffers.map(({ city, offers }) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>

            <div className="favorites__places">
              {offers.map((offer) => (
                <PlaceCard
                  key={offer.id}
                  offer={offer}
                  viewType={'favorite'}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FavoriteList;

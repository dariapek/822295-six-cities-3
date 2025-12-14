import { OfferListItem } from '@/types/offer';
import PlaceCard from '../place-card/place-card';

type NearPlaceListProps = {
  offers: OfferListItem[];
};

function NearPlaceList({offers}: NearPlaceListProps): JSX.Element {
  const nearbyOffers = offers.slice(0, 3);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {nearbyOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} viewType={'nearby'} />)}
        </div>
      </section>
    </div>
  );
}

export default NearPlaceList;

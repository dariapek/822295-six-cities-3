import { OfferListItem } from '@/types/offer';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProp = {
  offers: Array<OfferListItem>;
  onOfferHover?: (offerId: string | undefined) => void;
}

function PlaceCardList({ offers, onOfferHover }: PlaceCardListProp): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} viewType={'city'} onOfferHover={onOfferHover} />)}
    </div>
  );
}

export default PlaceCardList;

import { capitalizeFirst } from '@/utils/utils';
import PlaceCardList from '../place-card-list/place-card-list';
import Sorting from '../sorting/sorting';
import { OfferListItem } from '@/types/offer';
import { LocationName } from '@/const';
import { memo } from 'react';

type PlacesProp = {
  offers: Array<OfferListItem>;
  currentCity: LocationName;
  onOfferHover?: (offerId: string | undefined) => void;
}

function Places({ offers, currentCity, onOfferHover }: PlacesProp): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {capitalizeFirst(currentCity)}</b>
      <Sorting />
      <PlaceCardList offers={offers} onOfferHover={onOfferHover} />
    </section>
  );
}

const MemoizedPlaces = memo(Places);

export default MemoizedPlaces;

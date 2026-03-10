import CityMap from '@/components/city-map/city-map';
import Header from '@/components/header/header';
import Locations from '@/components/locations/locations';
import PlacesEmpty from '@/components/places-empty/places-empty';
import Places from '@/components/places/places';
import { AppRoute, LocationName } from '@/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getSortingOption } from '@/store/app/app.selectors';
import { changeCurrentCity } from '@/store/app/app.slice';
import { getOffers } from '@/store/data/data.selectors';
import { getCurrentOffers, isLocationName } from '@/utils/utils';
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const city = useParams().city as LocationName;
  const offers = useAppSelector(getOffers);
  const sortingOption = useAppSelector(getSortingOption);

  const [selectedOfferId, setSelectedOfferId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (isLocationName(city)) {
      dispatch(changeCurrentCity(city));
    } else {
      navigate(AppRoute.NotFound);
    }
  }, [city, dispatch, navigate]);

  const currentOffers = useMemo(() => getCurrentOffers(offers, city, sortingOption),
    [city, offers, sortingOption]);

  const isOffersEmpty = currentOffers.length === 0;

  const handleOfferHover = (offerId: string | undefined) => {
    setSelectedOfferId(offerId);
  };

  return (
    <div className={clsx('page', 'page--gray', 'page--main')}>
      <Header />
      <main className={clsx('page__main', 'page__main--index', isOffersEmpty && 'page__main--index-empty')}>
        <h1 className="visually-hidden">Cities</h1>
        <Locations currentCity={city} />
        <div className="cities">
          <div className="cities__places-container container">
            {isOffersEmpty
              ? <PlacesEmpty />
              : <Places offers={currentOffers} currentCity={city} onOfferHover={handleOfferHover}/>}

            <div className="cities__right-section">
              {!isOffersEmpty && <CityMap blockName={'cities'} cityOffersList={currentOffers} selectedOfferId={selectedOfferId} />}
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainPage;

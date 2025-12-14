import FavoriteListEmpty from '@/components/favorite-list-empty/favorite-list-empty';
import FavoriteList from '@/components/favorite-list/favorite-list';
import Logo from '@/components/logo/logo';
import { OfferListItem } from '@/types/offer';
import clsx from 'clsx';
import { Fragment } from 'react';

type FavoritesPageProp = {
  offers: Array<OfferListItem>;
}

function FavoritesPage({ offers }: FavoritesPageProp): JSX.Element {
  const isFavoritesEmpty = offers.length === 0;
  const favoritesOffers = !isFavoritesEmpty ? offers.filter((offer) => offer.isFavorite) : [];

  return (
    <Fragment>
      <main className={clsx('page__main', 'page__main--favorites', isFavoritesEmpty ? 'page__main--favorites-empty' : '')}>
        <div className="page__favorites-container container">
          {isFavoritesEmpty ? <FavoriteListEmpty /> : <FavoriteList favoritesOffers={favoritesOffers} />}
        </div>
      </main>

      <footer className="footer">
        <Logo type={'footer'} />
      </footer>
    </Fragment>
  );
}

export default FavoritesPage;

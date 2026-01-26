import { AppRoute, LocationNames } from '@/const';
import { capitalizeFirst } from '@/utils/utils';
import clsx from 'clsx';
import { generatePath, Link } from 'react-router-dom';

type LocationsProp = {
  currentCity: string;
}

function Locations({ currentCity } : LocationsProp): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {LocationNames.map((location) => (
            <li className="locations__item" key={location}>
              <Link
                className={clsx('locations__item-link', 'tabs__item', (currentCity === location) && 'tabs__item--active')}
                to={generatePath(AppRoute.City, { city: location })}
              >
                <span>{capitalizeFirst(location)}</span>
              </Link>
            </li>))}
        </ul>
      </section>
    </div>

  );
}

export default Locations;

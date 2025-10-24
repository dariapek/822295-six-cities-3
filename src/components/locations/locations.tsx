import { Link } from 'react-router-dom';

const locationNames = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];


function Locations(): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locationNames.map((location) => (
          <li className="locations__item" key={location}>
            <Link className="locations__item-link tabs__item" to={`/${location.toLowerCase()}`}>
              <span>{location}</span>
            </Link>
          </li>)
        )}
      </ul>
    </section>
  );
}

export default Locations;

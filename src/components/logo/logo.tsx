import { AppRoute } from '@/const';
import { Link } from 'react-router-dom';

type LogoProps = {
  type: 'header' | 'footer';
}

const size = {
  header: { width: 81, height: 41 },
  footer: { width: 64, height: 33 },
};

function Logo({ type }: LogoProps): JSX.Element {
  return (
    <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={size[type].width} height={size[type].height} />
    </Link>
  );
}

export default Logo;

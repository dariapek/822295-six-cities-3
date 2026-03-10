import Logo from '../logo/logo';
import User from '../user/user';

type HeaderProps = {
  showNavigation?: boolean;
}

function Header({showNavigation = true}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type={'header'} />
          </div>
          {showNavigation && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <User />
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

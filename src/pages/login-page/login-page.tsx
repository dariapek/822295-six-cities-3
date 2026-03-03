import { AppRoute } from '@/const';
import { useAppDispatch } from '@/hooks';
import { loginAction } from '@/store/api-actions';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login-page.css';

function LoginPage(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [passwordError, setPasswordError] = useState<string>('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const password = evt.target.value;

    if (!passwordRegex.test(password)) {
      setPasswordError('Password must contain at least one letter and one number');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!emailRef.current || !passwordRef.current) {
      return;
    }

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!passwordRegex.test(password)) {
      setPasswordError('Password must contain at least one letter and one number');
      return;
    }

    const resultAction = await dispatch(loginAction({ email, password }));

    if (loginAction.fulfilled.match(resultAction)) {
      navigate(AppRoute.Root);
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <form
              onSubmit={(evt) => void handleSubmit(evt)}
              className="login__form form"
              action="#"
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  onChange={handleChange}
                  className={clsx('login__input', 'form__input', { 'form__input--error': passwordError })}
                  ref={passwordRef}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />

                {passwordError && (
                  <p className="form__error">{passwordError}</p>
                )}
              </div>

              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;

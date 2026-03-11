import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction } from './store/user/user.api';
import { fetchOffersAction } from './store/data/data.api';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

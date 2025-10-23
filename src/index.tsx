import React from 'react';
import ReactDOM from 'react-dom/client';
import { OffersMock } from '@/mock/place-card.mock';
import App from '@/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={OffersMock}
    />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Header from './page/basic/Header';

const root = ReactDOM.createRoot(
  document.querySelector('body') as HTMLElement
);
root.render(
  <>
    <Header />
  </>
);


serviceWorkerRegistration.unregister();
reportWebVitals();

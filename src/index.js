import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RouteContextProvider } from './Context';

ReactDOM.render(
  <RouteContextProvider>
    <App />
  </RouteContextProvider>,
  document.getElementById('root')
);

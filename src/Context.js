import React, { useState } from 'react';
import defaultState from './config';

const RouteContext = React.createContext(defaultState);

const RouteContextProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);
  return (
    <RouteContext.Provider value={[state, setState]}>
      {children}
    </RouteContext.Provider>
  );
};

export { RouteContext, RouteContextProvider };

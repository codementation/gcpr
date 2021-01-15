import React, { useState, createContext } from 'react';

// Create a new context
export const AppContext = createContext();

// Whatever is passed-in as props gets wrapped in our myContext.Provider
export const Provider = props => {
  const [showInfo, setShowInfo] = useState(false);
  const [marker, setMarker] = useState();

  return (
    <AppContext.Provider value={{showInfo, setShowInfo, marker, setMarker}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>;

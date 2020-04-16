import React, { createContext, useReducer } from 'react';
import AppReducer from './reducers/AppReducer';

// Initial state
const initialState = {
  navOpen: false
};

// Create context
export const AppContext = createContext(initialState);

// Provider component
function AppProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function toggleNavOpen() {
    dispatch({
      type: 'TOGGLE_NAV_OPEN',
      payload: state.navOpen
    });
  }

  return (
    <AppContext.Provider value={{
      navOpen: state.navOpen,
      toggleNavOpen
    }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
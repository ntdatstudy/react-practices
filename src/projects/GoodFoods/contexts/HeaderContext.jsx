import React, { createContext, useReducer } from 'react';
import HeaderReducer from './reducers/HeaderReducer';

// Initial state
const initialState = {
  navResponsive: false
};

// Create context
export const HeaderContext = createContext(initialState);

// Provider component
function HeaderProvider(props) {
  const [state, dispatch] = useReducer(HeaderReducer, initialState);

  // Actions
  function handleNavResponsive() {
    dispatch({
      type: 'HANDLE_NAV_RESPONSIVE'
    });
  }

  return (
    <HeaderContext.Provider
      value={{
        navResponsive: state.navResponsive,
        handleNavResponsive
      }}
    >
      {props.children}
    </HeaderContext.Provider>
  );
}

export default HeaderProvider;
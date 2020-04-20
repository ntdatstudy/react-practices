import React, { createContext, useReducer } from 'react';
import AppReducer from './reducers/AppReducer';

import promotions from '../data/promotion.json';

// Initial state
const initialState = {
  navOpen: false,
  subNavsHeight: 0,
  promotions,
  currentPromotion: 0
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
      payload: { navOpen: state.navOpen }
    });
  }

  function setNavOpen(isOpen) {
    dispatch({
      type: 'SET_NAV_OPEN',
      payload: { isOpen }
    });
  }

  function increaseSubNavsHeight(height) {
    dispatch({
      type: 'INCREASE_SUBNAVS_HEIGHT',
      payload: { height }
    });
  }

  function setSubNavsHeight(height) {
    dispatch({
      type: 'SET_SUBNAVS_HEIGHT',
      payload: { height }
    });
  }

  function nextPromotion() {
    dispatch({
      type: 'NEXT_PROMOTION',
      payload: {
        currentPromotion: state.currentPromotion,
        promotionsLength: state.promotions.length - 1
      }
    });
  }

  function prevPromotion() {
    dispatch({
      type: 'PREV_PROMOTION',
      payload: {
        currentPromotion: state.currentPromotion,
        promotionsLength: state.promotions.length - 1
      }
    });
  }

  return (
    <AppContext.Provider value={{
      navOpen: state.navOpen,
      toggleNavOpen,
      setNavOpen,
      subNavsHeight: state.subNavsHeight,
      increaseSubNavsHeight,
      setSubNavsHeight,
      promotions: state.promotions,
      currentPromotion: state.currentPromotion,
      nextPromotion,
      prevPromotion
    }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
import React, { createContext, useReducer } from 'react';
import HomeReducer from './reducers/HomeReducer';
import banners from '../data/banners.json';

// Initial state
const initialState = {
  banners,
  bannerSelected: 0
};

// Create context
export const HomeContext = createContext(initialState);

// Provider component
function HomeProvider(props) {
  const [state, dispatch] = useReducer(HomeReducer, initialState);
  
  // Actions
  function onChangeNextBanner() {
    dispatch({
      type: 'CHANGE_NEXT_BANNER',
      payload: {
        bannersLength: banners.length,
        bannerSelected: state.bannerSelected
      }
    });
  }

  function onChangePrevBanner() {
    dispatch({
      type: 'CHANGE_PREV_BANNER',
      payload: {
        bannersLength: banners.length,
        bannerSelected: state.bannerSelected
      }
    });
  }

  return (
    <HomeContext.Provider
      value={{
        banners: state.banners,
        bannerSelected: state.bannerSelected,
        onChangeNextBanner,
        onChangePrevBanner
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
}

export default HomeProvider;
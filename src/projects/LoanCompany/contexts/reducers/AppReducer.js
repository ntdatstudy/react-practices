export default (state, action) => {
  const {
    navOpen,
    isOpen,
    height,
    promotionsLength,
    currentPromotion
  } = action.payload;
  switch (action.type) {
    case 'TOGGLE_NAV_OPEN':
      return {
        ...state,
        navOpen: !navOpen
      }
    case 'SET_NAV_OPEN':
      return {
        ...state,
        navOpen: isOpen
      }
    case 'INCREASE_SUBNAVS_HEIGHT':
      return {
        ...state,
        subNavsHeight: state.subNavsHeight + height
      }
    case 'SET_SUBNAVS_HEIGHT':
      return {
        ...state,
        subNavsHeight: height
      }
    case 'NEXT_PROMOTION':
      return {
        ...state,
        currentPromotion: currentPromotion < promotionsLength ? currentPromotion + 1 : 0
      }
    case 'PREV_PROMOTION':
      return {
        ...state,
        currentPromotion: currentPromotion <= 0 ? promotionsLength : currentPromotion - 1
      }
    default:
      return state;
  }
}
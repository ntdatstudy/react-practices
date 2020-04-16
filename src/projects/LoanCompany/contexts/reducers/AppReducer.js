export default (state, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV_OPEN':
      return {
        ...state,
        navOpen: !action.payload
      }
    default:
      return state;
  }
}
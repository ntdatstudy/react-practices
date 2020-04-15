export default (state, action) => {
  switch (action.type) {
    case 'HANDLE_NAV_RESPONSIVE':
      console.log(action);
      return {
        ...state,
        navResponsive: !state.navResponsive
      };
    default:
      return state;
  }
}
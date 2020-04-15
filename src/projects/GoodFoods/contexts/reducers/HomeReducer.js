export default (state, action) => {
  const { bannersLength, bannerSelected } = action.payload;

  switch (action.type) {
    case 'CHANGE_NEXT_BANNER':
      let nextBanner = 0;

      if (bannerSelected < bannersLength - 1) {
        nextBanner = bannerSelected + 1;
      }

      return {
        ...state,
        bannerSelected: nextBanner
      };
    case 'CHANGE_PREV_BANNER':
      let prevBanner = bannersLength - 1;

      if (bannerSelected < bannersLength && bannerSelected > 0) {
        prevBanner = bannerSelected - 1;
      }

      return {
        ...state,
        bannerSelected: prevBanner
      };
    default:
      return state;
  }
}
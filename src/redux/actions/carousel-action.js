import * as Actions from "../../redux/actions/action-types";

// Get carousel content config
export const getCarouselConfigAction = (data) => {
  return {
    type: Actions.GET_CAROUSEL_CONFIG_INIT,
    data: data,
  };
};

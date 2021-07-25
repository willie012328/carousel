import { combineReducers } from "redux";
import { Map as ImmutableMap, fromJS } from "immutable";

import * as Actions from "../../redux/actions/action-types";
import * as ApplicationConstants from "../../constants/application";

// Get carousel content config
const carouselConfig = (state, action) => {
  const { status = 0, data = {} } = action;

  if (state === undefined) {
    return ImmutableMap({
      [ApplicationConstants.PROP_INITIALIZED]: false,
      [ApplicationConstants.PROP_FETCHING]: false,
      [ApplicationConstants.PROP_ERROR]: false,
      [ApplicationConstants.PROP_STATUS]: status,
      [ApplicationConstants.PROP_DATA]: ImmutableMap(data),
    });
  }

  switch (action.type) {
    case Actions.GET_CAROUSEL_CONFIG_INIT:
      return state.withMutations((newState) => {
        newState.set(ApplicationConstants.PROP_INITIALIZED, false);
        newState.set(ApplicationConstants.PROP_FETCHING, true);
        newState.set(ApplicationConstants.PROP_ERROR, false);
        newState.set(ApplicationConstants.PROP_STATUS, status);
        newState.set(ApplicationConstants.PROP_OTHER, ImmutableMap(data));
      });

    case Actions.GET_CAROUSEL_CONFIG_SUCCESS:
      return state.withMutations((newState) => {
        newState.set(ApplicationConstants.PROP_INITIALIZED, true);
        newState.set(ApplicationConstants.PROP_FETCHING, false);
        newState.set(ApplicationConstants.PROP_ERROR, false);
        newState.set(ApplicationConstants.PROP_STATUS, status);
        newState.set(ApplicationConstants.PROP_DATA, fromJS(data));
      });

    case Actions.GET_CAROUSEL_CONFIG_FAIL:
      return state.withMutations((newState) => {
        newState.set(ApplicationConstants.PROP_INITIALIZED, false);
        newState.set(ApplicationConstants.PROP_FETCHING, false);
        newState.set(ApplicationConstants.PROP_ERROR, true);
        newState.set(ApplicationConstants.PROP_STATUS, status);
        newState.set(ApplicationConstants.PROP_DATA, fromJS(data));
      });

    default:
      return state;
  }
};

export default combineReducers({
  carouselConfig,
});

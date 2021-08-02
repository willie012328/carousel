import { takeLatest, put, call } from "redux-saga/effects";

import * as Actions from "../../redux/actions/action-types";

import * as Config from "../../config/config.json";

import service from "../../modules/service";
import { generateURL } from "../../modules/utilities";

// Get carousel content config
export function* watchCarouselConfig() {
  yield takeLatest(Actions.GET_CAROUSEL_CONFIG_INIT, callCarouselConfig);
}

export function* callCarouselConfig(action) {
  yield call(fetchCarouselConfig, action.data);
}

export function* fetchCarouselConfig(data) {
  const url = generateURL(Config.source_URL, data);

  try {
    const response = yield call(service.api, "get", url);

    const { status, data } = response;
    yield put({
      type: Actions.GET_CAROUSEL_CONFIG_SUCCESS,
      status: status,
      data: data,
    });
  } catch (error) {
    const status = error.response ? error.response.status : 500;
    const data = error.response
      ? error.response
      : { response: error.toString() };

    yield put({
      type: Actions.GET_CAROUSEL_CONFIG_FAIL,
      status: status,
      data: data,
    });
  }
}

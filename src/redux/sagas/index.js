import { fork, all } from "redux-saga/effects";

import * as CarouselSaga from "./carousel-saga";

function* Index() {
  yield all([fork(CarouselSaga.watchCarouselConfig)]);
}

export default Index;

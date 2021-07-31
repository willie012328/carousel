import axios, { CancelToken } from "axios";

import { CANCEL } from "redux-saga";

const api = (method, url, data = {}, options = {}, cancelRequest = false) => {
  const httpMethod = method.toLowerCase();

  const hasData = ["post", "put", "patch"].indexOf(httpMethod) >= 0;
  const settings = hasData ? options : data;

  let source;

  if (cancelRequest) {
    source = CancelToken.source();
    settings.cancelToken = source.token;
  }

  const request = hasData
    ? axios[httpMethod](url, data, settings)
    : axios[httpMethod](url, settings);

  if (cancelRequest) request[CANCEL] = () => source.cancel();

  return request;
};

const get = (url) => {
  return axios.get(url).then((res) => res.data);
};

const post = (url, data, options) => {
  return axios.post(url, data, options).then((res) => res.data);
};

const put = (url, data, options) => {
  return axios.put(url, data, options).then((res) => res.data);
};

const del = (url, data, options) => {
  return axios.delete(url, data, options).then((res) => res.data);
};

const service = {
  get,
  post,
  put,
  del,
  api,
};

export default service;

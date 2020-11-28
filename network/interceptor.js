export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    document.body.classList.add("loading-indicator");
  }
  return request;
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response)) {
    document.body.classList.remove("loading-indicator");
  }
  return response;
};

export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    document.body.classList.remove("loading-indicator");
  }
  return Promise.reject({ ...error });
};

import config from "../config.json";

export const getApiPath = (path) => {
  return config.apiEndpoint + path;
};

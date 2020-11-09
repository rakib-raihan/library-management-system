import http from "./httpServices";
import config from "../config.json";

export function getCustomers() {
  return http.get(getPath("customer"));
}

export const getPath = (path) => {
  return config.apiEndpoint + path;
};

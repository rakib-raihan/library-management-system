import http from "./httpServices";
import config from "../config.json";

export function getBooks() {
  return http.get(getPath("book"));
}

export const getPath = (path) => {
  return config.apiEndpoint + path;
};

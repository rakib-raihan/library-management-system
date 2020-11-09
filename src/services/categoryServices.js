import http from "./httpServices";
import config from "../config.json";

export function getCategories() {
  return http.get(getPath());
}

export function createCategory(category) {
  return http.post(getPath(), category);
}

export const getPath = (path) => {
  return config.apiEndpoint + "category";
};

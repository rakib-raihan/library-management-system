import http from "./httpServices";
import config from "../config.json";

export function getAuthors() {
  return http.get(getPath());
}

export function createAuthor(author) {
  return http.post(getPath(), author);
}

export const getPath = () => {
  return config.apiEndpoint + "author";
};

import http from "./httpServices";
import config from "../config.json";

export function getIssues() {
  return http.get(getPath("issue"));
}

export const getPath = (path) => {
  return config.apiEndpoint + path;
};

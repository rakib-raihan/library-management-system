import http from "./httpServices";
import config from "../config.json";
import { toast } from "react-toastify";

export function getPublishers() {
  return http.get(getPath());
}

export function createPublisher(publisher) {
  return http.post(getPath(), publisher);
}

export const getPath = () => {
  return config.apiEndpoint + "publisher";
};

import { get } from "./utils";

export const getCourses = (email) => {
  return get(`/jsonapi/v1/courses?email=${email}`);
}
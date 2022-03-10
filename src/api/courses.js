import { get } from "./utils";

export const getCourses = () => {
  return get(`/jsonapi/v1​/courses`);
}
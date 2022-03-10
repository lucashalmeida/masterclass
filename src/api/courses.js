import { get, post, del } from "./utils";
const EMAIL = 'lucashalmeida@gmail.com';

// I really don't like passing the email here, but for now it's ok.
export const getCourses = () => {
  return get(`/jsonapi/v1/courses?email=${EMAIL}`);
}

export const addToFavorites = (courseId) => {
  return post(`/jsonapi/v1/favorite`, { "course_id": courseId, "email": EMAIL })
}

export const removeFromFavorites = (courseId) => {
  return del(`/jsonapi/v1/favorite`, { "course_id": courseId, "email": EMAIL })
}
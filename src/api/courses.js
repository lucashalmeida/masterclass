import { get, post, del } from "./utils";
const EMAIL = 'lucashalmeida@gmail.com';

export const getCourses = async (offset) => {
  const courses = await get(`/jsonapi/v1/courses?email=${EMAIL}&page[limit]=15&page[offset]=${offset}`);
  return courses.reduce((all, course) => {
    all[course.id] = course;
    return all;
  }, {})
}

export const addToFavorites = (courseId) => {
  return post(`/jsonapi/v1/favorite`, { "course_id": courseId, "email": EMAIL })
}

export const removeFromFavorites = (courseId) => {
  return del(`/jsonapi/v1/favorite`, { "course_id": courseId, "email": EMAIL })
}

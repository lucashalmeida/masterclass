import React, { useState, useEffect } from "react";
import { CourseCard } from "./Card";
import { Filter } from "./Filter";
import { getCourses } from "./api/courses";

export const Catalog = ({ user }) => {

  const [courses, setCourses] = useState({});
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setCourses(await getCourses());
    }
    fetchCourses();
  }, []);

  const updateCourse = async (updatedCourse) => {
    const updated = {
      ...courses,
    }
    updated[updatedCourse.id] = updatedCourse;
    setCourses(updated)
  };

  return (
    <>
      <Filter title="Show Only Favorites" onlyFavorites={onlyFavorites} setOnlyFavorites={setOnlyFavorites} />
      {
        Object.keys(courses).map(courseId => {
          const course = courses[courseId];
          if (onlyFavorites) {
            return (
              course.favorite &&
              <CourseCard key={course.id} course={course} user={user} onCardClickCallback={updateCourse} />
            )
          } else {
            return (
              <CourseCard key={course.id} course={course} user={user} onCardClickCallback={updateCourse} />
            )
          }
        })
      }
    </>
  )
}
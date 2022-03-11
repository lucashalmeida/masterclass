import React, { useState, useEffect } from "react";
import { CourseCard } from "./Card";
import { Filter } from "./Filter";
import { getCourses } from "./api/courses";

export const Catalog = ({ user }) => {

  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState({});
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchCourses = async () => {
      setCourses(await getCourses(offset));
      setLoading(false);
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

  const courseIds = Object.keys(courses);

  return (
    <>
      {courseIds.length > 0 &&
        <>
          <Filter title="Show Only Favorites" onlyFavorites={onlyFavorites} setOnlyFavorites={setOnlyFavorites} />
          {
            courseIds.map(courseId => {
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
      }
      {
        loading && <>LOADING</>
      }
    </>
  )
}
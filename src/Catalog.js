import React, { useState, useEffect } from "react";
import { CourseCard } from "./Card";
import { Filter } from "./Filter";
import { getCourses } from "./api/courses";

export const Catalog = ({ user }) => {

  const [courses, setCourses] = useState([]);
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setCourses(await getCourses());
    }
    fetchCourses();
  }, []);

  return (
    <>
      <Filter title="Toggle Favorites" onlyFavorites={onlyFavorites} setOnlyFavorites={setOnlyFavorites} />
      {
        courses.map(course => {
          if (onlyFavorites) {
            return (
              course.favorite &&
              <CourseCard key={course.id} course={course} user={user} onFavoriteSuccess={async () => { setCourses(await getCourses()) }} />
            )
          } else {
            return (
              <CourseCard key={course.id} course={course} user={user} onFavoriteSuccess={async () => { setCourses(await getCourses()) }} />
            )
          }
        })
      }
    </>
  )
}
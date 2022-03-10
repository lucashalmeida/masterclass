import React, { useState, useEffect } from "react";
import { CourseCard } from "./Card";
import { getCourses } from "./api/courses";

export const Catalog = ({ user }) => {

  const [courses, setCourses] = useState([]);

  useEffect(async () => {
    setCourses(await getCourses());
  }, []);

  return (
    <>
      {
        courses.map(course => (
          <CourseCard key={course.id} course={course} user={user} onFavoriteSuccess={async () => { setCourses(await getCourses()) }} />
        ))
      }
    </>
  )
}
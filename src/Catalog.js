import React, { useState, useEffect } from "react";
import { CourseCard } from "./Card";
import { getCourses } from "./api/courses";

export const Catalog = ({ user }) => {

  const [courses, setCourses] = useState([]);

  useEffect(async () => {
    const courses = await getCourses(user.email);
    console.info(courses);
    setCourses(courses);
  }, []);

  return (
    <>
      {
        courses.map(course => (
          < CourseCard title={course.title} instructor_name={course.instructor_name} instructor_image_url={course.instructor_image_url} />
        ))
      }
    </>
  )
}
import React, { useState, useEffect } from "react";
import { getCourses } from "./api/courses";

export const Catalog = ({ user }) => {

  const [courses, setCourses] = useState([]);

  useEffect(async () => {
    const courses = await getCourses(user.email);
    console.info(courses);
    setCourses(courses);
  }, []);

  return (
    <section>
    </section>
  )
}
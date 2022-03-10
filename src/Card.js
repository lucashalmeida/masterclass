import React from "react";
import './Card.css';

const InstructorImage = ({ instructor_image_url }) => {
  return (
    <img className="instructor-image" src={instructor_image_url}>
    </img>
  )
}

const CourseTitleAndDescription = ({ title, instructor_name }) => {
  return (
    <div className="course-title-description">
      <div className="instructor-name" >{instructor_name}</div>
      <div className="course-title">{title}</div>
    </div>
  )
}

export const CourseCard = ({ title, instructor_name, instructor_image_url }) => {

  return (
    <div className="course-card">
      <InstructorImage instructor_image_url={instructor_image_url} />
      <CourseTitleAndDescription title={title} instructor_name={instructor_name} />
    </div>
    // <div className="course-card">
    //   {instructor_name}
    //   {title}
    // </div>
  )
}

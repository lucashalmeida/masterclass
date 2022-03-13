import React, { forwardRef } from "react";
import './Card.css';
import { addToFavorites, removeFromFavorites } from "./api/courses";


export const CourseCard = forwardRef(({ course, onCardClickCallback }, ref) => {
  const className = `course-card ${course.favorite ? 'favorite' : ''}`
  return (
    <div className={className} onClick={() => onCardClick(course, onCardClickCallback)} ref={ref}>
      <InstructorImage instructor_image_url={course.instructor_image_url} />
      <CourseTitleAndDescription title={course.title} instructor_name={course.instructor_name} />
    </div>
  )
})

const InstructorImage = ({ instructor_image_url }) => {
  return (
    <img className="instructor-image" src={instructor_image_url}>
    </img>
  )
}

const CourseTitleAndDescription = ({ title, instructor_name }) => {
  return (
    <div className="course-title-description">
      <div className="instructor-name" >
        <span>
          {instructor_name}
        </span>
      </div>
      <div className="course-title">{title}</div>
    </div>
  )
}

// Should throttle to avoid the user clicking many times
const onCardClick = async (course, onCardClickCallback) => {
  if (course.favorite) {
    removeFromFavorites(course.id);
  } else {
    addToFavorites(course.id);
  }
  course.favorite = !course.favorite
  onCardClickCallback(course);
}

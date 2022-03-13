import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";

import "./Catalog.css";

import { CourseCard } from "./Card";
import { Filter } from "./Filter";
import { getCourses } from "./api/courses";

const PAGE_SIZE = 15;

export const Catalog = ({ user }) => {

  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [coursesLookUp, setCoursesLookUp] = useState({});
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);


  useEffect(() => {
    const fetchCourses = async () => {
      if (hasMore) {
        setLoading(true);
        const moreCourses = await getCourses(offset);
        if (moreCourses.length === 0) {
          setHasMore(false);
        }
        setCourses([
          ...courses,
          ...moreCourses,
        ]);
        setLoading(false);
      }
    }
    fetchCourses();
  }, [offset]);

  useEffect(() => {
    courses.map((course, i) => {
      coursesLookUp[course.id] = i;
    });
  }, [courses, coursesLookUp]);

  const updateCourse = async (updatedCourse) => {
    setCourses(previous => {
      const index = coursesLookUp[updatedCourse.id]
      previous[index] = updatedCourse;
      return [...previous];
    })
  };

  const courseIds = Object.keys(courses);

  const observer = useRef();
  const loadMoreRef = useCallback((lastCourse) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setOffset(offset + PAGE_SIZE);
      }
    });
    if (lastCourse) observer.current.observe(lastCourse);
  }, [loading]);

  return (
    <div className="catalog">
      {courseIds.length > 0 &&
        <>
          <Header>
            <Filter title="Show Only Favorites" onlyFavorites={onlyFavorites} setOnlyFavorites={setOnlyFavorites} />
          </Header>
          <Body>
            {
              courseIds.map((courseId, i) => {
                const shouldLoadMore = courseIds.length - 2 === i + 1; // Load more on third last
                const course = courses[courseId];
                const courseElement = <CourseCard key={course.id} course={course} user={user} onCardClickCallback={updateCourse} ref={shouldLoadMore ? loadMoreRef : null} />;
                if (onlyFavorites) {
                  return course.favorite && courseElement;
                } else {
                  return courseElement;
                }
              })
            }
          </Body>
        </>
      }
      {
        loading && <>LOADING</>
      }
    </div>
  )
}

const Header = ({ children }) => {
  return (
    <div className="catalog-header">
      {children}
    </div>
  )
}

const Body = ({ children }) => {
  return (
    <div className="catalog-body">
      {children}
    </div>
  )
}
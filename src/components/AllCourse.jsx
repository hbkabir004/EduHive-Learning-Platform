import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

export const CourseContext = createContext();
const AllCourse = () => {
    const allCourses = useLoaderData();
    // console.log(allCourses);
    return (
        <CourseContext.Provider value={allCourses}>
            <h1>{allCourses.length}</h1>
            {
                allCourses.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }
        </CourseContext.Provider>
    );
};

export default AllCourse;
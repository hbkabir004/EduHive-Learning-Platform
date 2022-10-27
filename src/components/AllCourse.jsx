import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const AllCourse = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div>
            {
                allCourses.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }
        </div>
    );
};

export default AllCourse;
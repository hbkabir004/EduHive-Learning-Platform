import React, { createContext, useEffect, useState } from 'react';
import CourseCard from './CourseCard';

export const CourseContext = createContext();
const AllCourse = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://eduhive-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <CourseContext.Provider value={courses}>
            <h1 className='font-semibold text-xl p-5 rounded-md shadow-md mx-10 text-center text-deep-purple-accent-400 hover:shadow-xl hover:text-gray-700'>All Courses: {courses.length}</h1>

            <div className='grid grid-cols-2 py-5'>
                {
                    courses.map(course => <CourseCard
                        key={course.id}
                        course={course}
                    ></CourseCard>)
                }
            </div>
        </CourseContext.Provider>
    );
};

export default AllCourse;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCourse from './CategoryCourse';

const AllCategoryCourses = () => {
    const allCourses = useLoaderData();
    const name = allCourses.map(courses => courses.categoryName);
    // console.log(name);
    // const { title, category, price, about } = allCourses;

    return (
        <div>
            <h1 className='font-semibold text-xl p-5 rounded-md shadow-md mx-10 text-center text-deep-purple-accent-400 hover:shadow-xl hover:text-gray-700'>{name[0]} Courses: {allCourses.length}</h1>
            <div className='grid grid-cols-2 py-5'>
                {
                    allCourses.map(course => <CategoryCourse
                        key={allCourses.id}
                        singleCourse={course}
                    ></CategoryCourse>)
                }
            </div>
        </div>
    );
};

export default AllCategoryCourses;
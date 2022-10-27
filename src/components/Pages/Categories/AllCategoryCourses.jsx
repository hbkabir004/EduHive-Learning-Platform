
import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Categories from './Categories';
import CategoryCourse from './CategoryCourse';

const AllCategoryCourses = () => {
    const allCourses = useLoaderData();
    const name = allCourses.map(courses => courses.categoryName);

    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='grid grid-cols-3'>
                <div className='col-span-1'>
                    <Categories></Categories>
                </div>
                <div className='col-span-2'>
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

                </div>

            </div>

        </div>

    );
};

export default AllCategoryCourses;
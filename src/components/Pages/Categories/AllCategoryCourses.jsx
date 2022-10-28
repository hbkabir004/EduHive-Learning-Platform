import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from './Categories';
import CategoryCourse from './CategoryCourse';

const AllCategoryCourses = () => {
    const allCourses = useLoaderData();
    const name = allCourses.map(courses => courses.categoryName);

    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='grid lg:grid-cols-3 grid-cols-1'>
                <div className='lg:col-span-1'>
                    <Categories></Categories>
                </div>
                <div className='lg:col-span-2'>
                    <div>
                        <div className='flex justify-evenly font-semibold text-xl p-5 rounded-md shadow-md mx-10 text-center text-deep-purple-accent-400 hover:shadow-xl hover:text-gray-700 dark:bg-black dark:text-white'>
                            <h1 className='mx-auto'>{name[0]} Courses: {allCourses.length}</h1>
                        </div>

                        <div className='grid lg:grid-cols-2 grid-cols-1 py-5'>
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
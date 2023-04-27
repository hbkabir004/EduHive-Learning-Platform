import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import CategoryCourse from './CategoryCourse';

const AllCategoryCourses = () => {
    // const courses = useContext(CourseContext);
    // console.log(courses);
    const [categoryCourses, setCategoryCourses] = useState([]);

    useEffect(() => {
        fetch(`https://eduhive-server.vercel.app/courses/category/1`)
            .then(res => res.json())
            .then(data => setCategoryCourses(data))
    }, [])
    // const allCourses = useLoaderData();
    // console.log(allCourses);

    const name = categoryCourses.map(courses => courses.categoryName);

    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='grid lg:grid-cols-3 grid-cols-1'>
                <div className='lg:col-span-1'>
                    <Categories></Categories>
                </div>
                <div className='lg:col-span-2'>
                    <div>
                        <div className='flex justify-evenly font-semibold text-xl p-5 rounded-md shadow-md mx-10 text-center text-deep-purple-accent-400 hover:shadow-xl hover:text-gray-700 dark:bg-black dark:text-white'>
                            <h1 className='mx-auto'>{name[0]} Courses: {categoryCourses.length}</h1>
                        </div>

                        <div className='grid lg:grid-cols-2 grid-cols-1 py-5'>
                            {
                                categoryCourses.map(course => <CategoryCourse
                                    key={categoryCourses.id}
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
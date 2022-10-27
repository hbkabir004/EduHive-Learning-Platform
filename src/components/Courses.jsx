import React, { useContext } from 'react';
import { CourseContext } from './AllCourse';
import Categories from './Categories';
import CourseCard from './CourseCard';

const Courses = () => {
    const allCourses = useContext(CourseContext);
    console.log(allCourses);
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='grid grid-cols-3'>
                <div className='col-span-1'>
                    <Categories></Categories>
                </div>
                <div className='col-span-2'>
                    {/* <AllCourse></AllCourse> */}
                    <CourseCard></CourseCard>
                </div>

            </div>

        </div>
    );
};

export default Courses;
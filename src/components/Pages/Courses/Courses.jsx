import React from 'react';
import Categories from '../Categories/Categories';
import AllCourse from './AllCourse';

const Courses = () => {
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='grid lg:grid-cols-3 grid-cols-1'>
                <div className='lg:col-span-1'>
                    <Categories></Categories>
                </div>
                <div className='lg:col-span-2'>
                    <AllCourse></AllCourse>
                </div>
            </div>
        </div>
    );
};

export default Courses;
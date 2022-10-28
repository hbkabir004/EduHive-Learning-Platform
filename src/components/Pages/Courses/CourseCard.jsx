import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ singleCourse }) => {
    const { id, title, price, about, img } = singleCourse;

    return (
        <div className='dark:bg-gray-600'>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

                <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={img} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{about}</p>
                    <h6 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Price: ${price}</h6>
                    <Link to={`/courses/${id}`} className="inline-flex items-center text-blue-600 hover:underline font-semibold">
                        Get premium access
                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CourseCard;
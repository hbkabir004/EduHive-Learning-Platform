import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Checkout = () => {
    const selectedCourse = useLoaderData();
    const { id, title, categoryName, price, about, img } = selectedCourse;

    return (
        <div className='dark:bg-gray-600'>
            <div className='flex justify-center align-middle px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 my-40'>
                <div ref={ref} className="p-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Pdf targetRef={ref} filename="course.pdf">
                        {({ toPdf }) => <Link to={`/checkout/${id}`}>
                            <div className='flex justify-center bg-purple-50 ml-64 p-2 rounded-lg font-semibold text-gray-500 mb-5'>
                                <button
                                    onClick={toPdf}
                                    className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </button>
                            </div>
                        </Link>}
                    </Pdf>

                    <img className="rounded-t-lg" src={img} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <h6 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Category: {categoryName}</h6>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{about}</p>
                    <h6 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Price: ${price}</h6>

                </div>
            </div>
        </div >
    );
};

export default Checkout;
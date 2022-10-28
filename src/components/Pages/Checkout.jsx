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
                    <img className="rounded-t-lg" src={img} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <h6 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Category: {categoryName}</h6>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{about}</p>
                    <h6 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Price: ${price}</h6>
                    <Pdf targetRef={ref} filename="course.pdf">
                        {({ toPdf }) => <Link to={`/checkout/${id}`}><button className='bg-deep-purple-accent-400 text-white p-3 mt-5 rounded-md hover:bg-gray-400 hover:text-black' onClick={toPdf}>Download as Pdf</button></Link>}
                    </Pdf>

                </div>
            </div>
        </div >
    );
};

export default Checkout;
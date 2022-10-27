import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const selectedCourse = useLoaderData();
    const { id, title, categoryName, price, about, img } = selectedCourse;

    return (
        <div className='flex justify-center align-middle px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 my-40'>
            <div class="p-20 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class="rounded-t-lg" src={img} alt="" />
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <h6 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Category: {categoryName}</h6>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{about}</p>
                <h6 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Price: ${price}</h6>

            </div>
        </div>
    );
};

export default Checkout;
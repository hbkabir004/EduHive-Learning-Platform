import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostCheckout = () => {
    const downloadedCourse = useLoaderData();
    const { id, title, categoryName, price, img, about } = downloadedCourse;
    return (
        <div>

            <div class='dark:bg-black lg:w-1/2 px-4 py-5 lg:mx-auto mx-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 my-52 align-middle shadow-lg rounded-lg border hover:bg-gray-100 dark:hover:bg-slate-900 '>
                <div class="flex justify-between items-center mb-4 ">
                    <div className='flex text-green-500 justify-center'>
                        <div className='hover:text-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white ml-5">Just Checked Out</h5>
                    </div>
                    <div class="text-sm font-medium text-blue-600 hover:text-green-500 dark:hover:text-green-500 hover:font-semibold dark:text-blue-500">
                        Downloaded
                    </div>

                </div>
                <div class="flow-root">
                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0 ">
                                    <img class="lg:w-8 lg:h-8 w-32 rounded-full" src={img} />
                                    <p class="lg:hidden block my-2 text-sm font-semibold ml-2 text-gray-900 truncate dark:text-white">
                                        {title}
                                    </p>
                                    <p class="lg:hidden block my-2 text-sm font-semibold ml-2 truncate dark:text-gray-400">
                                        Category: {categoryName}
                                    </p>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="hidden lg:block text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {title}
                                    </p>
                                    <p class="hidden lg:block text-sm text-gray-500 truncate dark:text-gray-400">
                                        Category: {categoryName}
                                    </p>
                                    <p class="hidden lg:block text-sm text-gray-500 truncate dark:text-gray-400">
                                        Course ID: {id}
                                    </p>
                                    <p class="hidden lg:block text-sm text-gray-500 truncate dark:text-gray-400">
                                        {about}
                                    </p>
                                </div>

                                <div class="lg:inline-flex items-center lg:text-base font-semibold text-gray-900 dark:text-white text-xl">
                                    Price: ${price}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default PostCheckout;    
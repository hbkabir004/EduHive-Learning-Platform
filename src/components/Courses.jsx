import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const Courses = () => {
    const allCategories = useLoaderData();
    const categories = allCategories.data;
    // console.log(categories);
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='grid grid-cols-3'>
                <div className='col-span-1'>
                    <h1 className='font-semibold text-xl p-5 rounded-md shadow-md mx-10 text-center text-deep-purple-accent-400 hover:shadow-xl hover:text-gray-700'>Course Categories</h1>
                    <div className='font-semibold p-5 rounded-md shadow-md mx-10 text-center hover:shadow-xl'>
                        {
                            categories.map(category => <Category
                                key={category.id}
                                category={category}
                            ></Category>)
                        }
                    </div>
                </div>

                <div className='col-span-2'>
                    <h1>right side</h1>
                </div>

            </div>

        </div>
    );
};

export default Courses;
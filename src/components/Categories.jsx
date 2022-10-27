import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const Categories = () => {
    const allCategories = useLoaderData();
    const categories = allCategories.data;
    return (
        <div>
            <h1 className='font-semibold text-xl p-5 rounded-md shadow-md mx-10 text-center text-deep-purple-accent-400 hover:shadow-xl hover:text-gray-700'>Course Categories</h1>
            <div className='font-semibold py-5 rounded-md mx-10 text-center'>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>

        </div>
    );
};

export default Categories;
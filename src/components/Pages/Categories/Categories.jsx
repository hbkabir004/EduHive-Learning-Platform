import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://eduhive-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h1 className='dark:bg-black dark:text-white  font-semibold text-xl p-5 rounded-md shadow-md mx-10 text-center text-deep-purple-accent-400 hover:shadow-xl hover:text-gray-700'>Course Categories: {categories.length}</h1>

            <div className='font-semibold py-5 rounded-md mx-10 text-center '>
                {
                    categories.map(category => <Link to={`/courses/category/${category.id}`}>
                        {
                            <Category
                                key={category.id}
                                category={category}
                            ></Category>
                        }
                    </Link>)
                }
            </div>

        </div>
    );
};

export default Categories;
import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { name } = category;
    console.log(name);
    return (
        <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <ul>
                <li className=' sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2 hover:shadow-lg hover:bg-yellow-200 hover:rounded-lg hover:text-deep-purple-accent-400 hover:font-semibold hover:text-xl hover:px-10 border'><Link>{name}</Link></li>
            </ul>
        </div>
    );
};

export default Category;
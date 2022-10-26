import React from 'react';

const Category = ({ category }) => {
    const { name, logo, total } = category;
    console.log(name);
    return (
        <div>
            {/* // <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24'> */}
            {/* <ul>
                <li className=' sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2 hover:shadow-lg hover:bg-yellow-200 hover:rounded-lg hover:text-deep-purple-accent-400 hover:font-semibold hover:text-xl hover:px-10 border'><Link>{name}</Link></li>
            </ul> */}


            <div class="my-5 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={logo} alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{total} Courses</span>

                </div>
            </div>

        </div>
    );
};

export default Category;
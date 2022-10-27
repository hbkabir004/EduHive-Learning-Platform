import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../components/Categories';
import Header from '../components/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className='grid grid-cols-3'>
                    <div className='col-span-1'>
                        <Categories></Categories>
                    </div>
                    <div className='col-span-2'>
                        <Outlet></Outlet>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Main;
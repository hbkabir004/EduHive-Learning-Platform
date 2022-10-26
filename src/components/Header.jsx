import React, { useContext, useState } from 'react';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);
    console.log(user);

    const handleLogout = () => {
        logout()
            .then(toast.warning('User logged out!'))
            .catch(error => console.log(error))
    }

    /* //For Theme Switcher
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    const handleThemeToggle = () => {
        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    } */
    return (
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="relative flex items-center justify-between">
                <div class="flex items-center">
                    <Link
                        to="/"
                        aria-label="Learn with Aungstrome"
                        title="Learn with Aungstrome"
                        class="inline-flex items-center mr-8"
                    >
                        <svg
                            class="w-8 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                        >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Aungstrome EduHive
                        </span>
                    </Link>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/"
                                aria-label="Our product"
                                title="Our product"
                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                aria-label="Our product"
                                title="Our product"
                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                aria-label="FAQ"
                                title="FAQ"
                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                aria-label="Blog"
                                title="Blog"
                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul class="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span className='mr-5 text-deep-purple-accent-400 font-semibold'>{user?.displayName}</span>
                                        <button
                                            onClick={handleLogout}
                                            className='px-8 py-3 font-semibold rounded-md bg-deep-purple-accent-400 hover:bg-gray-700 hover:text-white text-gray-100'>Log out</button>
                                    </>
                                    :
                                    <>
                                        <Link
                                            to="/signin"
                                            aria-label="Sign in"
                                            title="Sign in"
                                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                            Sign in
                                        </Link>
                                        <Link
                                            to="/signup"
                                            class="ml-5 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                            aria-label="Sign up"
                                            title="Sign up"
                                        >
                                            Sign up
                                        </Link>
                                    </>
                            }
                        </>
                    </li>
                    {user?.photoURL ?

                        <img
                            className='w-10 h-10 rounded-full'
                            src={user?.photoURL}>
                        </img>
                        : <FaUser></FaUser>
                    }


                    {/* <button
                        onClick={handleThemeToggle}
                        id="theme-toggle"
                        type="button"
                        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                        <svg
                            id="theme-toggle-dark-icon"
                            class="hidden w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                        <svg
                            id="theme-toggle-light-icon"
                            class="hidden w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button> */}
                </ul>

                <div class="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div class="absolute top-0 left-0 w-full">
                            <div class="p-5 bg-white border rounded shadow-sm">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label="Company"
                                            title="Company"
                                            class="inline-flex items-center"
                                        >
                                            <svg
                                                class="w-8 text-deep-purple-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeMiterlimit="10"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <rect x="3" y="1" width="7" height="12" />
                                                <rect x="3" y="17" width="7" height="6" />
                                                <rect x="14" y="1" width="7" height="6" />
                                                <rect x="14" y="11" width="7" height="12" />
                                            </svg>
                                            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                Courses
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul class="space-y-4">
                                        <li>
                                            <Link
                                                to="/"
                                                aria-label="Our product"
                                                title="Our product"
                                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Product
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/"
                                                aria-label="Our product"
                                                title="Our product"
                                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Features
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/"
                                                aria-label="FAQ"
                                                title="FAQ"
                                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog"
                                                aria-label="Blog"
                                                title="Blog"
                                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link
                                                to="/"
                                                aria-label="Sign in"
                                                title="Sign in"
                                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Sign in
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/"
                                                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Sign up
                                            </Link>
                                        </li> */}

                                        <li>
                                            <>
                                                {
                                                    user?.uid ?
                                                        <>
                                                            <span className='mr-5 text-deep-purple-accent-400 font-semibold'>{user?.displayName}</span>
                                                            <button
                                                                onClick={handleLogout}
                                                                className='px-8 py-3 font-semibold rounded-md bg-deep-purple-accent-400 hover:bg-gray-700 hover:text-white text-gray-100'>Log out</button>
                                                        </>
                                                        :
                                                        <>
                                                            <Link
                                                                to="/signin"
                                                                aria-label="Sign in"
                                                                title="Sign in"
                                                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                            >
                                                                Sign in
                                                            </Link>
                                                            <Link
                                                                to="/signup"
                                                                class="ml-5 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                                aria-label="Sign up"
                                                                title="Sign up"
                                                            >
                                                                Sign up
                                                            </Link>
                                                        </>
                                                }
                                            </>
                                        </li>
                                        {user?.photoURL ?

                                            <img
                                                className='w-10 h-10 rounded-full'
                                                src={user?.photoURL}>
                                            </img>
                                            : <FaUser></FaUser>
                                        }

                                        {/* <li>
                                           <Nav>
                                            <>
                                                {
                                                    user?.uid ?
                                                        <>
                                                            <span>{user?.displayName}</span>
                                                            <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                                        </>
                                                        :
                                                        <>
                                                            <Link to='/login'>Login</Link>
                                                            <Link to='/register'>Register</Link>
                                                        </>
                                                }


                                            </>
                                            <Link to="/profile">
                                                {user?.photoURL ?
                                                    <Image
                                                        style={{ height: '30px' }}
                                                        roundedCircle
                                                        src={user?.photoURL}>
                                                    </Image>
                                                    : <FaUser></FaUser>
                                                }
                                            </Link>
                                        </Nav>
                                        </li> */}

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
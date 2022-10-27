import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded p-5 dark:bg-gray-900">
                    <a href="/" aria-label="Article">
                        <img
                            src="https://i.ytimg.com/vi/zDqwbiCyur8/maxresdefault.jpg"
                            className="object-cover w-full h-64 rounded"
                            alt=""
                        />
                    </a>
                    <div className="py-5">
                        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase dark:text-white">
                            13 Jul 2022
                        </p>
                        <a
                            href="/"
                            aria-label="Article"
                            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            <p className="dark:text-white text-2xl font-bold leading-5 dark:hover:text-deep-purple-accent-700">What is cors?</p>
                        </a>
                        <p className="mb-4 text-gray-700 dark:text-white ">
                            Cross-origin resource sharing (CORS) is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. It allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="/"
                                aria-label="Likes"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="6 23 1 23 1 12 6 12"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p classname="dark:text-white">5.2K</p>
                            </a>
                            <a
                                href="/"
                                aria-label="Comments"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="23 5 23 18 19 18 19 22 13 18 12 18"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <polygon
                                            points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold dark:text-white">61</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded p-5 dark:bg-gray-900">
                    <a href="/" aria-label="Article">
                        <img
                            src="https://firebase.google.com/images/social.png"
                            className="object-cover w-full h-64 rounded"
                            alt=""
                        />
                    </a>
                    <div className="py-5">
                        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase dark:text-white">
                            22 Oct 2022
                        </p>
                        <a
                            href="/"
                            aria-label="Article"
                            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            <p className="dark:text-white text-2xl font-bold leading-5 dark:hover:text-deep-purple-accent-700">Why are we using firebase? What other options do we have to implement authentication?</p>
                        </a>
                        <p className="mb-4 text-gray-700 dark:text-white">
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                            <br></br>
                            Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                        <div className="flex space-x-4">
                            <a
                                href="/"
                                aria-label="Likes"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="6 23 1 23 1 12 6 12"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold dark:text-white">7.4K</p>
                            </a>
                            <a
                                href="/"
                                aria-label="Comments"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="23 5 23 18 19 18 19 22 13 18 12 18"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <polygon
                                            points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold dark:text-white">81</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded p-5 dark:bg-gray-900">
                    <a href="/" aria-label="Article">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHRiS6kPI35qAooa93F3BFl98z5Bhe3QX4pA&usqp=CAU"
                            className="object-cover w-full h-64 rounded"
                            alt=""
                        />
                    </a>
                    <div className="py-5">
                        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase dark:text-white">
                            4 Aug 2022
                        </p>
                        <a
                            href="/"
                            aria-label="Article"
                            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            <p className="text-2xl dark:hover:text-deep-purple-accent-700 font-bold leading-5 dark:text-white ">How does the private route work?</p>
                        </a>
                        <p className="mb-4 text-gray-700 dark:hover:text-deep-purple-accent-700 dark:text-white">
                            The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="/"
                                aria-label="Likes"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="6 23 1 23 1 12 6 12"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold dark:text-white">7.4K</p>
                            </a>
                            <a
                                href="/"
                                aria-label="Comments"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="23 5 23 18 19 18 19 22 13 18 12 18"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <polygon
                                            points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold dark:text-white">81</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded dark:bg-gray-900 p-5">
                    <a href="/" aria-label="Article">
                        <img
                            src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/01/node-js-logo.png?fit=1200%2C600&ssl=1"
                            className="object-cover w-full h-64 rounded"
                            alt=""
                        />
                    </a>
                    <div className="py-5">
                        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase dark:text-white">
                            28 Sep 2022
                        </p>
                        <a
                            href="/"
                            aria-label="Article"
                            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            <p className="text-2xl dark:hover:text-deep-purple-accent-700 font-bold leading-5 dark:text-white">
                                What is Node? How does Node work?
                            </p>
                        </a>
                        <p className="mb-4 text-gray-700  dark:text-white">
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="/"
                                aria-label="Likes"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="6 23 1 23 1 12 6 12"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold dark:text-white">4.7K</p>
                            </a>
                            <a
                                href="/"
                                aria-label="Comments"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="23 5 23 18 19 18 19 22 13 18 12 18"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <polygon
                                            points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold dark:text-white">32</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blog;
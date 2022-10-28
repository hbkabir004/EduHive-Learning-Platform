import React, { useState } from 'react';

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center">
                    <a href="/" className="mb-6 sm:mx-auto">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                            <svg
                                className="w-10 h-10 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </a>
                    <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative dark:text-gray">Frequently Asked Questions</span>
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg dark:text-white">
                            This page is a central hub where its customers can always go to with their most common questions. These are the most popular questions about EduHive.
                        </p>
                    </div>
                </div>
                <div className="space-y-4 dark:bg-black dark:text-white">
                    <Item title="Solve problems with your Coursera account">
                        If you need to change your Coursera account settings, like your name, email address, or password, you can use your Settings page.
                    </Item>
                    <Item title="What about the Video translations?">
                        To see translated subtitles for a video, turn subtitles on and choose the language you want to see subtitles in. <br></br>
                        You can see what languages are available for a course by checking the course's description page. If a language is listed, that means at least 80\% of the course's video subtitles have been translated. When you search for courses, you can filter your search to find courses that have translations in certain languages.
                    </Item>
                    <Item title="How I can Change my subscription plan">
                        Some Specializations are available for subscriptions on a monthly plan. Your credit card will be charged every month as long as your subscription is active. You can cancel a subscription any time.
                    </Item>
                    <Item title="What about the Refund policies?">
                        If you decide not to complete a course or Specialization that you've paid for, Eduhive may be able to refund your payment depending on our refund policies. You can read our refund policies in full in Coursera's Terms of Use.
                    </Item>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
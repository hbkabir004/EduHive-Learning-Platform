import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from './Categories';
import CategoryCourse from './CategoryCourse';

const AllCategoryCourses = () => {
    const allCourses = useLoaderData();
    const name = allCourses.map(courses => courses.categoryName);

    //PDF
    const printRef = React.useRef();

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
    };



    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='grid lg:grid-cols-3 grid-cols-1'>
                <div className='lg:col-span-1'>
                    <Categories></Categories>
                </div>
                <div className='lg:col-span-2'>
                    <div>
                        <div className='flex justify-evenly font-semibold text-xl p-5 rounded-md shadow-md mx-10 text-center text-deep-purple-accent-400 hover:shadow-xl hover:text-gray-700 dark:bg-black dark:text-white'>
                            <h1 className='mx-auto'>{name[0]} Courses: {allCourses.length}</h1>
                            <div
                                onClick={handleDownloadPdf}
                                className="lg:px-0 pr-2 text-gray-500 transition-colors duration-300 hover:text-teal-accent-400" rel="noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </div>
                        </div>


                        {/*  */}

                        {/* <button className='rounded-lg border-gray-900 bg-deep-purple-accent-400' type="button" 
                            Download as PDF
                        </button> */}
                        <div className='grid lg:grid-cols-2 grid-cols-1 py-5'>
                            {
                                allCourses.map(course => <CategoryCourse
                                    key={allCourses.id}
                                    singleCourse={course}
                                ></CategoryCourse>)
                            }
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default AllCategoryCourses;
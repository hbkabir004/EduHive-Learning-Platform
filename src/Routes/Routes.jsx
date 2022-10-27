import { createBrowserRouter } from 'react-router-dom';
import AllCategoryCourses from '../components/AllCategoryCourses';
import AllCourse from '../components/AllCourse';
import Blog from '../components/Blog';
import ErrorPage from '../components/ErrorPage';
import FAQ from '../components/FAQ';
import Registration from '../components/Registration';
import SignIn from '../components/SignIn';
import Main from '../layout/Main';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <Registration></Registration>
            },
            {
                path: '/courses',
                element: <AllCourse></AllCourse>,
            },
            {
                path: '/courses/category/:id',
                element: <AllCategoryCourses></AllCategoryCourses>,
                loader: ({ params }) => fetch(`https://eduhive-server.vercel.app/courses/category/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
        ]
    },
])


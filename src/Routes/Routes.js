import { createBrowserRouter } from 'react-router-dom';
import Registration from '../components/Auth/Registration';
import SignIn from '../components/Auth/SignIn';
import Blog from '../components/Pages/Blog';
import AllCategoryCourses from '../components/Pages/Categories/AllCategoryCourses';
import Courses from '../components/Pages/Courses/Courses';
import FAQ from '../components/Pages/FAQ';
import Home from '../components/Pages/Home';
import ErrorPage from '../components/Shared/ErrorPage.jsx';
import Main from '../layout/Main.jsx';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
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
                element: <Courses></Courses>,
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


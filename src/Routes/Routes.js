import { createBrowserRouter } from 'react-router-dom';
import Registration from '../components/Auth/Registration';
import SignIn from '../components/Auth/SignIn';
import Blog from '../components/Pages/Blog';
import AllCategoryCourses from '../components/Pages/Categories/AllCategoryCourses';
import Checkout from '../components/Pages/Checkout';
import Courses from '../components/Pages/Courses/Courses';
import FAQ from '../components/Pages/FAQ';
import Home from '../components/Pages/Home';
import PostCheckout from '../components/Pages/PostCheckout';
import ErrorPage from '../components/Shared/ErrorPage.jsx';
import Main from '../layout/Main.jsx';
import PrivateRoute from './PrivateRoute';

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
                path: '/courses/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://eduhive-server.vercel.app/courses/${params.id}`)
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
                path: '/checkout/:id',
                element: <PrivateRoute><PostCheckout></PostCheckout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://eduhive-server.vercel.app/courses/${params.id}`)
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


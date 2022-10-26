import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Courses from './components/Courses';
import ErrorPage from './components/ErrorPage';
import FAQ from './components/FAQ';
import Main from './components/Main';
import Registration from './components/Registration';
import SignIn from './components/SignIn';

function App() {
  const router = createBrowserRouter([
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
          element: <Courses></Courses>,
          loader: ()=> fetch(`https://eduhive-server.vercel.app/category`)
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
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

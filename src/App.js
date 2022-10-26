import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
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

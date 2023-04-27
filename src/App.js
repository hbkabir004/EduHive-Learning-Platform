import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom/dist';
import './App.css';
import PrivateRoute from './Routes/PrivateRoute';
import Registration from './components/Auth/Registration';
import SignIn from './components/Auth/SignIn';
import Blog from './components/Pages/Blog';
import AllCategoryCourses from './components/Pages/Categories/AllCategoryCourses';
import Checkout from './components/Pages/Checkout';
import Courses from './components/Pages/Courses/Courses';
import FAQ from './components/Pages/FAQ';
import Home from './components/Pages/Home';
import PostCheckout from './components/Pages/PostCheckout';
import ErrorPage from './components/Shared/ErrorPage';
import { history } from "./components/Shared/customRouter";
import { yScrollContext } from "./components/Shared/yScroll";
import Main from './layout/Main';




function App() {
    const { yScroll, setYscroll } = useContext(yScrollContext)
    const location = useLocation()
    const [currHist, setCurrHist] = useState({
        action: "",
        location: {},
        currentKey: ""
    })

    useEffect(() => {
        sessionStorage.setItem('key', location.key)
    }, [location])

    useState(() => {
        const scrolled = () => setYscroll(prev => window.scrollY)
        window.addEventListener('scroll', scrolled)
        return () => {
            window.removeEventListener('scroll', scrolled)
        }
    }, [])

    useEffect(() => {
        return () => {
            sessionStorage.setItem('yvalue', JSON.stringify(yScroll))
        }
    }, [yScroll])

    useEffect(() => {
        return history.listen(({ location, action }) => {
            if (action === "POP") {
                const fwdKey = sessionStorage.getItem('key')
                const yscroll = sessionStorage.getItem('yvalue')
                location = {
                    ...location,
                    state: {
                        forward: {
                            key: fwdKey,
                            yscroll: yscroll
                        },
                        ...location.state
                    }
                }
            }
            setCurrHist({
                ...currHist,
                action: action,
                location: {
                    ...location
                },
                currentKey: location.key
            })
            console.log(action, location.pathname, location.state, location.key);
        });

    }, [])


    useLayoutEffect(() => {
        const { action, location, currentKey } = currHist
        if (action && action === "POP") {
            if (location.state.hasOwnProperty('forward')) {
                if (currentKey === location.state.forward.key) {
                    console.log(`forward ${location.state.forward.yscroll}`)
                }
            } else if (location.state.hasOwnProperty('backward')) {
                if (currentKey === location.state.backward.key) {
                    console.log(`backward ${location.state.backward.yscroll}`)
                    window.scrollTo(0, parseFloat(location.state.backward.yscroll))
                }
            } else {
                window.scrollTo(0, 0)
            }
        } else {
            window.scrollTo(0, 0)
        }
        // console.log(location)
    }, [currHist])

    return (
        <div className='dark:bg-gray-600'>
            {/* <RouterProvider router={routes} /> */}
            <Routes >
                <Route path="/" element={<Main />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>

                    <Route
                        path="/courses/:id"
                        element={<PrivateRoute><Checkout /></PrivateRoute>}
                        loader={({ params }) => fetch(`https://eduhive-server.vercel.app/courses/${params.id}`)}></Route>

                    <Route path="/signin" element={<SignIn />}></Route>
                    <Route path="/signup" element={<Registration />}></Route>
                    <Route path="/courses" element={<Courses />}></Route>

                    <Route
                        path="/courses/category/:id"
                        element={<AllCategoryCourses />}
                        loader={({ params }) => fetch(`https://eduhive-server.vercel.app/courses/category/${params.id}`)}></Route>

                    <Route
                        path="/checkout/:id"
                        element={<PrivateRoute><PostCheckout /></PrivateRoute>}
                        loader={({ params }) => fetch(`https://eduhive-server.vercel.app/courses/${params.id}`)}></Route>

                    <Route path="/faq" element={<FAQ />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>

                </Route>


            </Routes>

        </div>
    );
}

export default App;

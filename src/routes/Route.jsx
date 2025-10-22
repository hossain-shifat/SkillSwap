import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AllCourses from "../pages/AllCourses/AllCourses";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SignUp/SingUp";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children:[
            {
                index: true,
                path:'/',
                Component: Home
            },
            {
                path: '/all-courses',
                loader: () => fetch('/data.json'),
                Component: AllCourses,
            },
            {
                path: '/course-details/:id',
                loader: () => fetch('/data.json'),
                element: <PrivateRoute><CourseDetail></CourseDetail></PrivateRoute>
            },
            {
                path:'/login',
                Component: Login
            },
            {
                path: '/sing-up',
                Component: SingUp
            }
        ]
    }
])

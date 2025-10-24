import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AllCourses from "../pages/AllCourses/AllCourses";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SignUp/SingUp";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import UserProfile from "../pages/UserProfile/UserProfile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement:<ErrorPage/>,
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
            },
            {
                path: '/forget-password',
                Component: ForgetPassword
            },
            {
                path: '/user-profile',
                element: <PrivateRoute><UserProfile/></PrivateRoute>
            },
            {
                path: '/update-profile',
                element: <PrivateRoute><UpdateProfile/></PrivateRoute>
            }
        ]
    }
])

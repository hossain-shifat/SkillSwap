import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AllCourses from "../pages/AllCourses/AllCourses";
import CourseDetail from "../pages/CourseDetail/CourseDetail";


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
                Component: CourseDetail
            }
        ]
    }
])

import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Components/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import About from "../Components/About/About";
import Academics from "../Components/Academics/Academics";
import Admission from "../Components/Admission/Admission";
import Apply from "../Components/Apply/Apply";
import Courses from "../Components/Courses/Courses";
import Blogs from "../Components/Blogs/Blogs";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";

const router=createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:() => fetch('/courses.json')
        },
        {
            path:'/register',
            element:<Register></Register>,
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/academics',
            element:<Academics></Academics>
        },
        {
            path:'/admission',
            element:<Admission></Admission>
        },
        {
            path:'/apply',
            element:<Apply></Apply>
        },
        {
            path:'/courses',
            element:<Courses></Courses>,
            loader:() => fetch('/courses.json')
        },
        {
            path:'/course/:id',
            element:<PrivateRoute><Blogs></Blogs></PrivateRoute>,
            loader:() => fetch('/courses.json')
        }
      ]
    },
  ]);
  export default router;
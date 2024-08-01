import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Buy from "../Pages/Buy/Buy";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout/>,
        errorElement:<h1>ErrorPage</h1>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signUp',
                element:<SignUp/>   
            },
            {
                path:'/buy',
                element:<Buy/>
            },
            {
                path:'/property/:id',
                element:<PropertyDetails/>
            }
        ]
    }
])
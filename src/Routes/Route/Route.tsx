import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/contactus',
                element:<ContactUs></ContactUs>
            }
        ]
    }
])

export default router;
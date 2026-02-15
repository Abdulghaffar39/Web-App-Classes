import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./Containers/Home/home";
import About from "./Containers/About/about";
import SignupForm from "./Containers/Signup/Signup";
import LoginForm from "./Containers/Login/Login";
import Contact from "./Containers/Contact/Contact";
import Setting from "./Containers/SettingSetting";
// import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <>404 not found</>,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "signup", element: <SignupForm /> }, 
            { path: "login", element: <LoginForm /> }, 
            { path: "contact", element: <Contact /> }, 
            { path: "setting", element: <Setting /> },
        ],
    },
]);


export default router;
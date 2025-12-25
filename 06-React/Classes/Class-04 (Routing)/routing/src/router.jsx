import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./Containers/Home/index.jsx";
import About from "./Containers/About/about.jsx";
// import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <>404 not found</>,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            // { path: "setting", element: <Setting /> },
        ],
    },
]);


export default router;
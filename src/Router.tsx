import { createBrowserRouter } from "react-router"
import About from "./component/Abute"
import Navbar from "./component/Navbar"
import Home from "./component/Home"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar/>,
        errorElement: <h1>error</h1>,
        children: [
            { path: '/', element: <Home /> },
            { path: 'about', element: <About /> },
        ]
    }
])






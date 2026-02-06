import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";


const router = createBrowserRouter([
    {path: "/", element: <HomePage/>}
])

export function AppRouter(){
    return < RouterProvider router={router} />
}
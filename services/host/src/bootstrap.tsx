
import {createRoot} from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from './components/App/App';
import Login from "./pages/login/Login";
import About from "./pages/about/About";

const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/about',
            element: <About />
        }
      ]
    },
])

container.render(<RouterProvider router={router} />)
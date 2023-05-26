import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Education from "../pages/Education/Education";
import Skills from "../pages/Skills/Skills";
import Resume from "../pages/Resume/Resume";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Portfolio from "../pages/Portfolio/Portfolio";
import About from "../pages/About/About";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/education',
                element: <Education></Education>
            },
            {
                path: '/portfolio',
                element: <Portfolio></Portfolio>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/resume',
                element: <Resume></Resume>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/',
                element: <About></About>
            },
        ]
    }
])
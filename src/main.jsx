import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Layout/Root';
import Home from './Pages/HomeOne/Home';
import AboutPage from './Pages/About/AboutPage';
import Service from './Pages/Service/ServicePage';
import Project from './Pages/Project/ProjectPage';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import Team from './Pages/Team/Team';
import Blog from './Pages/Blog/Blog';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import Pricing from './Pages/Pricing/Pricing';
import Faq from './Pages/Faq/FaqPage';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: "/about", Component: AboutPage },
            { path: "/servicePage", Component: Service },
            { path: "/service-details", Component: ServiceDetails },
            { path: "/ProjectPage", Component: Project },
            { path: "/project-details", Component: ProjectDetails },
            { path: "/team", Component: Team },
            { path: "/blog", Component: Blog },
            { path: "/blog-details", Component: BlogDetails },
            { path: "/price", Component: Pricing },
            { path: "/faqpage", Component: Faq },
            { path: "/contact", Component: Contact },
            { path: "*", Component: Error },
        ],
    },
]);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />,
    </StrictMode>,
)

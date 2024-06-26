import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createRoutesFromElements, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./components/Home/Home.jsx";
import About from './components/About/About.jsx';
import Github, { GitInfoLoader } from './components/Github/Github.jsx'
import Contact from "./components/Contact/ContactUs.jsx";
// import Github from './components/Github/Github.jsx';
// const router = createBrowserRouter([
//  {
//    path: "/",
//    element: <Layout />,
//    children: [
//      {
//        path: "",
//        element: <Home />
//      },
//      {
//        path: "about",
//        element: <About />
//      },
//      {
//        path: "contact",
//       element: <Contact />
//      },
//      {
//        path: "github",
//        element: <Github />
//      }
//    ]
//  },
//])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />

      <Route path='about' element={<About />} />

      <Route path='contact' element={<Contact />} />

      <Route

        loader={GitInfoLoader}
        path='github/:id'
        element={<Github />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

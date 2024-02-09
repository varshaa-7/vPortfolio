import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'atropos/css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/user/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/> ,
//     children:[{
//       path:"",
//       element: <Home/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     }
//   ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element ={<Layout/>}>
    <Route path='' element ={<Home/>}/>
    <Route path='about' element ={<About/>}/>
    <Route path='contact' element ={<Contact/>}/>
    <Route path='user/' element ={<User/>}>
      <Route path='userid' element ={<User/>}/>
    </Route>
    <Route loader={githubInfoLoader} path='github' element ={<Github/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import './App.css'
// import LandingPage from './components/LandingPage'
import { 
  createBrowserRouter,
  RouterProvider,
 } from 'react-router-dom'
import SignUp from './Auth/SignUp'
import Login from './Auth/Login'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Category from './Pages/Category'
import Details from './Pages/Details'
// import UserLayout from './components/UserLayout'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/category",
          element: <Category/>
        },
        {
          path: "/details",
          element: <Details/>
        },
        {
          path: "/cart",
          element: <Cart/>
        },
        
        {
          path:"/signUp",
          element: <SignUp/>
        },
        {
          path:"/login",
          element: <Login/>
        },
        // {
        //   path: "landingPage",
        //   element: <LandingPage/>
        // }
      ]
    }
  ])
  return (
    <div className='TheMainBody'>
      <RouterProvider router={router}/>
      {/* <ToastContainer position='top-right' autoClose="1000"/>\ */}
    </div>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home';
import Login from './Components/Login';
import Resgister from './Components/Resgister';
import AuthProviders from './Providers/AuthProviders';
import Orders from './Components/Orders';
import PrivatRoute from './Routes/PrivatRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:'/register',
        element: <Resgister></Resgister>
      },
      {
        path: '/orders',
        element: <PrivatRoute><Orders></Orders></PrivatRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProviders>
      <RouterProvider router={router} ></RouterProvider>
      </AuthProviders>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './Comonents/Home/Home';
import MainNews from './Comonents/Main/MainNews/MainNews';
import AuthLayout from './Comonents/AuthLayout/AuthLayout';
import Register from './Comonents/AuthLayout/Register';
import Login from './Comonents/AuthLayout/Login';
import AuthProvider from './Provider/AuthProvider';
import NewsDetails from './Comonents/MainSection/NewsDetails';
import PrivateRoute from './Comonents/PrivateRouter/PrivateRoute';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '',
        element: <Navigate to={`/category/01`}></Navigate>
      },
      {
        path: '/category/:id',
        element: <MainNews></MainNews>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: '/news/:id',
    element:
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>,
    loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path: '*',
    element: <h1>Error</h1>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

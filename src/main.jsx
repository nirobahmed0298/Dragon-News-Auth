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
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ],
  },
  {
    path: '*',
    element: <h1>Error</h1>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import FormComponent from './components/forms/FormComponent.tsx'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import HubComponent from './components/HubComponent.tsx'
import Before from './components/before/Before.tsx'
import AdminComponent from './components/AdminComponent.tsx'


const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children:[
    {
      path:"/",
      element: <HubComponent/>
    },
    {
      path: "/adminview",
      element: <AdminComponent/>,
    },
    {
      path: "/form",
      element: <FormComponent/>,
    },
  ]
},])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

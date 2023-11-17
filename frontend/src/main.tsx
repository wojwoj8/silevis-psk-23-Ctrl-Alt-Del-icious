import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import FormComponent from './components/FormComponent.tsx'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Doc1 from './components/pdf/Doc1v1.tsx'
import HubComponent from './components/HubComponent.tsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children:[
    {
      path:"/",
      element: <HubComponent/>
    },
    {
      path: "/form",
      element: <FormComponent/>,
    },
    {
      path:"/doc1",
      element: <Doc1/>
    }
  ]
},])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

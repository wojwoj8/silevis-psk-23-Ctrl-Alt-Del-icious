import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import FormComponent from './components/FormComponent.tsx'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children:[
    {
      path: "/form",
      element: <FormComponent/>,
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

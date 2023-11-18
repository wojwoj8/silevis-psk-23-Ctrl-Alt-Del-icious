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
import After from './components/after/After.tsx'
import Documents from './components/documents/Documents.tsx'
import AdminComponent from './components/AdminComponent.tsx'
import UserPanel from './components/UserPanel.tsx'
import AdminAtt1 from './components/AdminAtt1.tsx'
import PoadnieForm from './components/forms/PodanieForm.tsx'
import OswiadczenieForm from './components/forms/OswiadczenieForm.tsx'
import PoPraktyce from './components/PoPraktyce.tsx'
import Dokumenty from './components/Dokumenty.tsx'
import Login from './components/Login.tsx'
import SprawozdanieForm from './components/forms/SprawozdanieForm.tsx'


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
    {
      path: "/userpanel",
      element: <UserPanel/>,
    },
    {
      path:"/oswiadczenie",
      element: <OswiadczenieForm/>
    },
    {
      path: "/adminatt1",
      element: <AdminAtt1/>,
    },
    {
      path: "/przed",
      element: <Before/>
    },
    {
      path: "/po",
      element: <After/>
    },
    {
      path: "/dokumenty",
      element: <Documents/>
    },
    {
      path:"/umowapdf",
      element: <FormComponent/>
    },
    {
      path:"/umowapdf/:id",
      element: <FormComponent/>
    },
    {
      path:"/podanie",
      element: <PoadnieForm/>
    },
    {
      path:"/oswiadczenie",
      element: <OswiadczenieForm/>
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/sprawozdanie",
      element: <SprawozdanieForm/>
    },
    {
      path:"/admin",
      element:<AdminComponent/>
    },
    {
      path:"/po",
      element:<PoPraktyce/>
    },
    {
      path:"/dokumenty",
      element:<Dokumenty/>
    }
  ]
},])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BannerComponent from './components/BannerComponent'
import HubComponent from './components/HubComponent'


import './App.css'
function App() {
 const client = ""
  return (
    <>
      <Header/>
      <BannerComponent/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App

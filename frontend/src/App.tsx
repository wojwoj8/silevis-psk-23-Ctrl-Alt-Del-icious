import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BannerComponent from './components/BannerComponent'
import NavigationComponent from './components/NavigationComponent'
import HubComponent from './components/HubComponent'


function App() {
 const client = ""
  return (
    <>
      <Header/>
      <NavigationComponent/>
      <BannerComponent/>
      <HubComponent/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App

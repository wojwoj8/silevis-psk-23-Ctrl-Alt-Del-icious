import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BannerComponent from './components/BannerComponent'


import './App.css'
import { LanguageProvider } from './context/LanguageContext'
function App() {
  return (
    <>
      <LanguageProvider>
        <Header/>
        <BannerComponent/>
        <Outlet/>
        <Footer/>
      </LanguageProvider>
    </>
  )
}

export default App

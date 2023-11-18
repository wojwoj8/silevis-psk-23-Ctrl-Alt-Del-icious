import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import LanguageContext from '../context/LanguageContext'


export default function Header() {
  const {language, changeLanguage} = useContext(LanguageContext)
  const [userData, setUserData] = useState()
  const userDataCookie = Cookies.get('userData');
  let userDataJson

  useEffect(()=>{
   
        if (userDataCookie) {
            userDataJson = JSON.parse(userDataCookie);
            setUserData(userDataJson)
           
            
        } else {
            console.log('userData cookie not found');
        }
        
      
    
    
},[userDataCookie])
  return (
  <nav className="navbar navbar-expand-lg orange5">
    <div className="container-fluid">
      <div className="vr text-white ms-5"></div>
      <Link to="/" className="navbar-brand text-light ms-3">Politechnika Świętokrzyska</Link>
      <div className="h3 ps-1 m-2 text-white"> WEAiI</div>
      <div className="vr text-white"></div>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> </ul>

        <div className="vr text-white "></div>
        <div className="d-flex mx-3 text-white"><button onClick={changeLanguage}>language: {language}</button></div>
        <div className="vr text-white"></div>
        
        <div className="vr text-white"></div>
        {userData ? (
           <Link to="/logout" className="d-flex mx-3 text-white">Logout</Link>
        ) :(
          <Link to="/login" className="d-flex mx-3 text-white">Login</Link>
        )
        }
         
        <div className="vr text-white"></div>
        {userData && userData.staffStatus === 2 ? (
          <Link to="/admin" className="d-flex mx-3 text-white">Admin</Link>
        ) : (
          <Link to="/userpanel" className="d-flex mx-3 text-white">User</Link>
          
        )}
        
        <div className="vr text-white me-5"></div>
        <p className='d-flex mx-3 text-white'>{userData && userData.firstName}</p>
        <div className="vr text-white me-5"></div>


    </div>
  </nav>
  )
}
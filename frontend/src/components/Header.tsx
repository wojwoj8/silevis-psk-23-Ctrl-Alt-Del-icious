import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';



export default function Header() {
  const [language, setLanguage] = useState('pl');
  const [userData, setUserData] = useState()
  const userDataCookie = Cookies.get('userData');
  let userDataJson

  useEffect(()=>{
    console.log(userDataCookie)
        if (userDataCookie) {
            userDataJson = JSON.parse(userDataCookie);
            setUserData(userDataJson)
           
            
        } else {
            console.log('userData cookie not found');
        }
        
},[userDataCookie])

  const Logout = () =>{
    document.cookie = 'userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setUserData('')
  }


  return (
  <nav className="navbar navbar-expand-lg orange5">
    <div className="container-fluid">
      <div className="vr text-white ms-5"></div>
      <Link to="/" className="navbar-brand text-light ms-3">Politechnika Świętokrzyska</Link>
      <div className="h3 ps-1 m-2 text-white"> WEAiI</div>
      <div className="vr text-white"></div>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> </ul>

        <div className="vr text-white "></div>
        <div className="d-flex mx-3 text-white"><button onClick={()=>{language==='pl'?setLanguage('en'):setLanguage('pl')}}>language: {language}</button></div>
        <div className="vr text-white"></div>
        
        <div className="vr text-white"></div>
        {userData ? (
           <button className="btn btn danger d-flex mx-3 text-white" onClick={Logout}>Logout</button>
        ) :(
          <Link to="/login" className="d-flex mx-3 text-white">Login</Link>
        )
        }
         
        <div className="vr text-white"></div>
        {userData && userData.staffStatus === 2 ? (
          <Link to="/admin" className="d-flex mx-3 text-white">Admin</Link>
        ) : (
          <></>
          
        )}
        {userData && userData.staffStatus === 0 ? (
          <Link to="/userpanel" className="d-flex mx-3 text-white">User</Link>
        ) : (
          <></>
          
        )}
        
        <div className="vr text-white me-5"></div>
        <p className='d-flex mx-3 text-white'>{userData && userData.firstName}</p>
        <div className="vr text-white me-5"></div>


    </div>
  </nav>
  )
}
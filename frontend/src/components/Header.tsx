import { Link } from 'react-router-dom'
import { useState } from 'react';


export default function Header() {
  const [language, setLanguage] = useState('pl');

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
        <Link to="/login" className="d-flex mx-3 text-white">Login</Link>
        <div className="vr text-white"></div>
        <Link to="/userpanel" className="d-flex mx-3 text-white">User</Link>
        <div className="vr text-white"></div>
        <Link to="/admin" className="d-flex mx-3 text-white">Admin</Link>
        <div className="vr text-white me-5"></div>


    </div>
  </nav>
  )
}
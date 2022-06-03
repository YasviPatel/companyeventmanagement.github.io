import React,{useEffect} from "react";
import './Events';
import './Home';
import {Link, NavLink,useNavigate} from "react-router-dom";
import './contact'
// import './Profile'
import './Login.js'
import './start'

import {db, auth} from "./firebase"

// const handleLogout = () => {

//   setUser({});
//   setEmail("");
//   setPassword("");
//   localStorage.clear();
// }; 

// let navigate = useNavigate();
// useEffect(() => {
//   let authToken = sessionStorage.getItem('Auth Token')
//   console.log(authToken)
//   if (authToken) {
//       navigate('/')
//   }

//   if (!authToken) {
//       navigate('/')
//   }
// }, [])
// const handleLogout = () => {
//   sessionStorage.removeItem('Auth Token');
//   navigate('/')
// }

export default function Navbar(){
            return (
            <>
            <header id="header" className="fixed-top d-flex align-items-cente">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

      <h1 className="logo me-auto me-lg-0"><a>DigiMail Events</a></h1>
      <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><Link className="nav-link scrollto " to="/home">Home</Link></li>
          <li><Link className="nav-link scrollto" to="/events">Events</Link></li>
          {/* <li><Link className="nav-link scrollto" to="/profile">Profile</Link></li> */}
          <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>
          {/* <li><a className="nav-link scrollto" href="#events">Events</a></li>
          <li><a className="nav-link scrollto" href="#chefs">Chefs</a></li>
          <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li> */}
          {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          {/* <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Log out</a> */}
      {/* <a href="/" className="book-a-table-btn scrollto d-none d-lg-flex">Log out</a> */}
      <Link className="book-a-table-btn scrollto d-none d-lg-flex" to="/login">Sign out</Link>

      {/* <button  className="book-a-table-btn scrollto d-none d-lg-flex" style={{color:"black"}} onClick={auth.signOut}>Sign out</button> */}

    </div>
  </header>
  </>
            );
}

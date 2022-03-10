import React from "react";
import {Link, NavLink} from "react-router-dom";
// import Footer from "./Footer";
import "./Login";
// import Navbar from "./navbar";
import'./Signup'


export default function Home(){
            return (
            <>
            {/* <Navbar/> */}
            <section id="hero" className="d-flex align-items-center">
    <div className="container position-relative text-center text-lg-start">
      <div className="row">
        <div className="col-lg-8">
          <h1>Welcome to <span>DigiMail</span></h1>
          <h2>Lets break the routine!</h2>

          <div className="btns">
            <Link to='/login' className="btn-menu animated fadeInUp scrollto">Login</Link>
            <Link to='/signup' className="btn-book animated fadeInUp scrollto">Sign up</Link>
          </div>
        </div>
        {/* <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative">
          <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" className="glightbox play-btn"></a>
        </div> */}

      </div>
    </div>
  </section>

  <main id="main">
   
    {/* <Footer/> */}
  </main>
            </>
        );
}
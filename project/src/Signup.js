import React, { useState } from "react";
import "./Signup.css";

import { Link, Navigate, NavLink,useNavigate } from "react-router-dom";
import "./Login.js";
// import Navbar from "./navbar";
// import Footer from "./Footer";
import {db, auth} from "./firebase"
// import Alert from "./alerts";
import validator from 'validator'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [fname, setfname] = useState("")
  const [lname, setlname] = useState("")
  const [eid, seteid] = useState("")
  const [mno, setmno] = useState("")
  const [dept, setdept] = useState("")
  // const [alert,setAlert]=useState(null);

  const navigate=useNavigate();
   
  // const showAlert =(message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  //   setTimeout(()=>{
  //     setAlert(null);
  //   },1500);
  // }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // const [emailError, setEmailError] = useState('')

    // const validateEmail = (e) => {
    //   var email = e.target.value
    
    //   if (validator.isEmail(email)) {
    //     setEmailError('Valid Email :)')
    //   } else {
    //     setEmailError('Enter valid Email!')
    //   }
    // }
  
    
  //  const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
     auth.createUserWithEmailAndPassword(email, password)
    .then(()=>{
    db.collection("User").add({
        email:email, 
        password: password,
        fname: fname,
        lname: lname,
        eid:eid,
        mno: mno,
        dept: dept
      })
      // .catch((error) => {
      //   if (error.code === 'auth/email-already-in-use') {
      //     toast.error('Email Already in Use');
      //   }
      //   showAlert(error,"warning");
      // })
      .then((doc)=>{
        db.collection('User').doc(doc.id).update({id:doc.id})
      })
      .then(()=>{
        alert("Signed up sucessfully");
        navigate("/home")})

    })
  }


  return (
    <>
      <div className="bg">
        {/* <Navbar /> */}
        <form method="POST" onSubmit={handleSubmit}>
          <div className="container1">
            <h1 className="h1Style">Sign up</h1>
            <div className="horizontal rule">
              <label>
                <b style={{color:"#d9ba85"}}>First Name</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter First Name"
                // value={user.fname}
                // onChange={getUserData}
                name="fname"
                id="fname"
                onChange={(e) => setfname(e.target.value)}
                required
              />

              <label>
                <b style={{color:"#d9ba85"}}>Last Name</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter Last Name"
                // value={user.lname}
                // onChange={getUserData}
                name="lname"
                id="lname"
                onChange={(e) => setlname(e.target.value)}
                required
              />

              <label>
                <b style={{color:"#d9ba85"}}>Email</b>
              </label>
              <input
                className="input1"
                type="email"
                placeholder="Enter Email"
                // value={user.email}
                // onChange={getUserData}
                name="email"
                id="email"
                // onChange={(e)=>validateEmail(e.target.value)}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {/* <span style={{
               fontWeight: 'bold',
               color: 'red',
               }}>{emailError}</span> */}

              <label>
                <b style={{color:"#d9ba85"}}>Employee Id</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter Employee Id"
                // value={user.eid}
                // onChange={getUserData}
                name="eid"
                id="eid"
                pattern="[0-9]{2}[A-Z]{5}[0-9]{3}"
                onChange={(e) => seteid(e.target.value)}
                required
              />

              <label>
                <b style={{color:"#d9ba85"}}>Department</b>
              </label>
              <select className='input1' id="dept" name="dept" onChange={(e) => setdept(e.target.value)} required>
            <option value="IT Department" >IT Department</option>
            <option value="none" disabled="true" selected="false" hidden="true">Select Department</option>  
            <option value="HR Department">HR Department</option>
            <option value="General Management">General Management</option>
            <option value="Marketing Department">Marketing Department</option>
            <option value="Financial Department">Financial Department</option>
            </select>
              {/* <input
                className="input1"
                type="text"
                placeholder="Enter Department"
                // value={user.dept}
                // onChange={getUserData}
                name="dept"
                id="dept"
                onChange={(e) => setdept(e.target.value)}
                required
              /> */}
              {/* <select id="dept">
              placeholder="Enter Department"
              <option value="Human resources">Human Resources</option>
              <option value="IT">IT</option>
              <option value="General Management">General management</option>
              <option value="Marketing">Marketing</option>
              onChange={(e) => setdept(e.target.value)}
              required
              </select> */}

              <label>
                <b style={{color:"#d9ba85"}}>Mobile Number</b>
              </label>
              <input
                className="input1"
                type="tel"
                placeholder="Enter Mobile no. of 10 digits"
                // value={user.mno}
                // onChange={getUserData}
                name="mno"
                id="mno"
                pattern="[1-9]{1}[0-9]{9}"
                onChange={(e) => setmno(e.target.value)}
                required
              />

              <label>
                <b style={{color:"#d9ba85"}}>Password</b>
              </label>
              <input
                className="input1"
                type="password"
                placeholder="Enter Password"
                // value={user.psw}
                // onChange={getUserData}
                name="psw"
                id="psw"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" onClick='save(); this.disabled = true;'className="registerbtn">
              Submit
            </button>
            <div className="signin">
              <p>
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>
            {/* <Alert alert={alert}/> */}
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  );
  };

export default Signup;
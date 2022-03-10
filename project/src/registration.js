import React, {useState} from 'react'
import Footer from './Footer'
import Navbar from './navbar'
import PayPal from './paypal'
// import test from './test.html'
// import razorpay from './razorpay'
import './Registration.css'
import {db} from "./firebase"
<script src="smtpjs.com/v3/smtp.js"></script>


const Registration = (props) => {

  const [checkout, setCheckOut] = useState(false);

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const[employeeid,setEmployeeid]=useState("");
  const[department,setDepartment]=useState("");
  // const[people,setPeople]=useState("");

  
  
    

   const handleSubmit = () => {
    console.log(name)
    var a=localStorage.getItem("Eventid").trim()
    
  //   debugger;
  //  console.log(name);
  const validateInput = ({ name, email, phone,employeeid,department }) => {
    if (!name.trim()) {
      return false;
    }
    if (!email.trim()) {
      return false;
    }
    if (!phone.trim()) {
      return false;
    }
    if (!employeeid.trim()) {
      return false;
    }
    if (!department.trim()) {
      return false;
    }

  
    // other validations
  
    return true;
  };


  const validInput = validateInput({ name, email, phone,employeeid,department });

  if (!validInput) {
    alert("Fill all the fields")
    setCheckOut(false);
    return null;
  }


    db.collection("Events").doc(a).collection('participants').add({
        name:name, 
        email:email,
        phone:phone,
        employeeid:employeeid,
        department:department,
        // people:people,
        
      })
      // .then((doc) => {
      //   console.log("hello from participants")
      //   console.log(doc.id);
      //   console.log(a);
      //   db.collection("Events")
      //     .doc(a)
      //     .collection('participants')
      //     .update({ id: doc.id })
      //     .then(() => {
      //       alert("Registered sucessfully");
      //       // navigate("/admin");
      //     });
      // });

      // sendEmail();
      
      // .then((doc)=>{
      //   db.collection('Events').doc(doc.id).update({id:doc.id}).then(()=>{navigate("/admin")})
        
      // }
      // )
    }
      

  const makePayment=()=>{
    console.log("hello");
    console.log(name);
    setCheckOut(true)
    handleSubmit()
  }

    return (
        <>
        <div className='bg2'>
          <Navbar/>
         
            <section id="book-a-table" className="book-a-table">
      <div className="container">

        <div className="section-title">
      
          <br/>
          <br/>
          <br/>
          <br/>
          <p>Register for Event</p>
        </div>

        <div className="php-email-form">
          <div className="col">
            <div className="col-lg-4 col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" rules={{ required: true }} placeholder="Name of participant" data-rule="minlen:4" data-rule-requied="true" data-msg="Please enter at least 4 chars" autocomplete="off" onChange={(e) => setName(e.target.value)} required/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3  mt-md-0">
              <input type="email" className="form-control" name="email" id="email" rules={{ required: true }} placeholder="Your Email" data-rule="email" data-rule-requied="true" data-msg="Please enter a valid email" autocomplete="off" onChange={(e) => setEmail(e.target.value)} required/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3  mt-md-0">
              <input type="tel" className="form-control" name="phone" id="phone" rules={{ required: true }} placeholder="Your Phone" data-rule-pattern="[1-9]{1}[0-9]{9}" data-rule-requied="true" data-msg="Enter valid phone number" autocomplete="off" onChange={(e) => setPhone(e.target.value)} required/>
              <div className="validate"></div>
            </div>

             {/* <div className="col-lg-4 col-md-6 form-group mt-3  mt-md-0">
              <input type="text" className="form-control" name="department" id="department" rules={{ required: true }} placeholder="Department" data-rule="minlen:4" data-rule-requied="true" data-msg="Please enter at least 4 chars" onChange={(e) => setDepartment(e.target.value)} required/> 
              <div className="validate"></div>
            </div>  */}

            <div className="col-lg-4 col-md-6 form-group mt-3  mt-md-0">
            <select className='form-control' id="department" onChange={(e) => setDepartment(e.target.value)}>
            <option value="IT Department" >IT Department</option>
            <option value="none" disabled="true" selected="false" hidden="true">Select Department</option>  
            <option value="HR Department">HR Department</option>
            <option value="General Management">General Management</option>
            <option value="Marketing Department">Marketing Department</option>
            <option value="Financial Department">Financial Department</option>
            </select>
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3  mt-md-0">  
              <input type="text" name="Employee id" className="form-control" id="Employee id" rules={{ required: true }} placeholder="Employee id" data-rule-pattern="[1-9]{2}[A-Z]{5}[0-9]{3}" data-rule-requied="true" data-msg="Please enter correct employee id" onChange={(e) => setEmployeeid(e.target.value)} required/>
              <div className="validate"></div>
            </div>

            
         
            {/* <div className="col-lg-4 col-md-6 form-group mt-3  mt-md-0">
              <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" onChange={(e) => setPeople(e.target.value)} required/>
              <div className="validate"></div>
            </div> */}
          </div>
          
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
          </div>
          <div className="text-right">
            {checkout ? (
              <PayPal/>
              // <razorpay/>
            ) : (
            <button type="submit" onClick={makePayment}>Payment</button>
            )}
            </div>
        

      </div>
      </div>
      
    </section>
    
    </div>
    
    <Footer/>
        </>
    )
}

export default Registration

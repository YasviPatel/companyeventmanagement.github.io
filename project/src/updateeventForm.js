import React, { Component } from 'react'
import './addevent.css'
import {useState, useEffect} from 'react'
import { db } from './firebase';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateeventForm = () => {

  const navigate=useNavigate();

  const[time,setTime]=useState("");
      const[loc,setLoc]=useState("");
      const[date,setDate]=useState("");
      const location=useLocation();

      useEffect(() => {
        // console.log("hello")
        console.log(localStorage.getItem("Eventid"))
        var a=localStorage.getItem("Eventid").trim()
        console.log(a.length)
        db.collection("Events").doc(a).get().then((Event)=>{
          setTime(Event.time)
          setLoc(Event.location)
          setDate(Event.date)
        })
      
        
      }, [''])
      
      const updateevent=()=>{
        var a=localStorage.getItem("Eventid").trim()
        console.log(a.length)
        db.collection("Events").doc(a).update({
          time:time,
          location: loc,
          date: date
          
        }).then(()=>{
          alert("Event updated successfully")
          navigate('/admin');
        })
      
        
      }

    return (
        <>
            <div className='bg1'>
            <div className='container'>
            
              <h2 style={{color:"white"}}>Update Event</h2>
  
  <div className="form-group">
  <label
                for="exampleFormControlInput1"
                style={{ color: "white" }}
              >
                Location
              </label>
              <select
                className="input1"
                id="dept"
                name="dept"
                onChange={(e) => setLoc(e.target.value)}
                required
              >
                <option value="Seminar hall">Seminar hall</option>
                <option
                  value="none"
                  disabled="true"
                  selected="false"
                  hidden="true"
                >
                  Select Location
                </option>
                <option value="Main garden">Main garden</option>
                <option value="Multi-media hall">Multi-media hall</option>
                <option value="Conference room-1">Conference room-1</option>
                <option value="Conference room-2">Conference room-2</option>
              </select>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1" style={{color:"white"}}>Date</label>
    <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Enter date" onChange={(e) => setDate(e.target.value)}/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1" style={{color:"white"}}>Time</label>
    <input type="time" className="form-control" id="exampleFormControlInput1" placeholder="Enter time" onChange={(e) => setTime(e.target.value)}/>
  </div>
  
  {/* <div className="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div> */}
  {/* <div className="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div> */}
 
  <div className="text-center"><button type="submit" onClick={updateevent}>Submit</button></div>

</div>
    </div>

        </>
    )
}

export default UpdateeventForm

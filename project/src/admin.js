import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import  './addevent';
import './updateevent';
import './deleteevent';
import './viewdetails';
import  './admin.css';

 const Admin = () =>{

  const navigate=useNavigate()

  const Updateevent=()=>{
    navigate('/updateevent',{navigation:navigate,id:1})

  }

  return <>
  <div className='bg1'>
     <div className='mid1'>
     Admin can manage events from here
   <br/>
     <Link to="/addevent" className="book-a-table-btn ">Add event</Link>
     <Link to="/updateevent" className="book-a-table-btn " onClick={Updateevent}>Manage Events</Link>
     {/* <Link to="/deleteevent" className="book-a-table-btn ">Delete event</Link> */}
     {/* <Link to="/viewdetails" className="book-a-table-btn ">View participants details</Link> */}
     </div>
     </div>
  </>;
}

export default Admin;

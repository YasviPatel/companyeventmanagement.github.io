// import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./navbar";
import { Link, NavLink } from "react-router-dom";
import "./updateeventForm";
import { db } from "./firebase";
import Frame from "react-frame-component";
import './events.css'
import { useNavigate } from "react-router-dom";

import React, { Component } from "react";

class Updateevents extends Component {
    id=''
    
     updateevent=(id)=>{
           console.log("hello");
    }

    deleteevent=(id)=>{
        console.log(id);
        db.collection('Events').doc(id).delete().then(()=>{
            // window.location.reload(false).then(()=>{
                alert("Event deleted")
            // })
            
        })
    }

    state = {
        info: [],
    };

    fetchData = () => {
        db.collection("Events")
            .get()
            .then((querySnapshot) => {
                // Loop through the data and store
                // it in array to display
                querySnapshot.forEach((element) => {
                    var data = element.data();
                    // console.log(data);
                    let { info } = this.state;
                    info.push(data);
                    this.setState({ info });
                });
            });
    };

    componentDidMount = () => {
        this.fetchData();
    };

    render() {
        
        return (
            <div>
                {/* <Navbar /> */}
                {/* <p style={myStyle}>Events</p> */}
                {this.state.info.map((Events, index) => (
                  
                    <div className="btns">
                        <div>
                            <section id="events" className="events">
                                <div className="container">
                                    <br />
                                    <br />
                                    <br />
                                    <br/>

                                    {/* <div className="section-title">
                                        <p>Events</p> */}
                                        {/* <p>Organize Your Events in our Restaurant</p> */}
                                    {/* </div> */}


                                    <div className="events-slider swiper">
                                        <div className="swiper-wrapper">

                                            <div className="swiper-slide">
                                                <div className="row event-item">
                                                    <div className="col-lg-6">
                                                        <img src={Events.image} className="img-fluid" alt="" height={683} width={1024}/>
                                                    </div>

                                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                                        <h3>{Events.name}</h3>
                                                        <div className="price">
                                                            {/* <p><span>$189</span></p> */}
                                                        </div>

                                                        <p className="fst-italic">
                                                            Location:     {Events.location}
                                                        </p>
                                                        <ul>
                                                            <li><i className="bi bi-check-circled"></i>Date:   {Events.date}</li>
                                                            <li><i className="bi bi-check-circled"></i>Time:   {Events.time}</li>
                                                            <li><i className="bi bi-check-circled"></i>Fees:   {Events.amount}/-</li>
                                                            {/* <li><i className="bi bi-check-circled"></i>No.of Participants required:  {Events.noOfParticipants}</li> */}
                                                        </ul>


                                                        <p>
                                                            {Events.desc}
                                                            
                                                        </p>
                                                        <Link  to={{pathname:"/updateeventForm"}} className="book-a-table-btn " onClick={()=>{console.log("button clicked");
                                                    localStorage.setItem("Eventid",this.state.info[index].id)}} >Update</Link>

                                                    <button  to="/updateeventForm" className="book-a-table-btn " style={{color:"black"}} onClick={()=>{
                                                        this.id=Events.id;
                                                        // console.log(this.id);
                                                        var events=this.state.info[index].id
                                                        console.log(events);
                                                        this.deleteevent(events)
                                                    }}>Delete</button>
                                                    <Link  to="/viewdetails" className="book-a-table-btn " onClick={()=>{console.log("button clicked");
                                                    localStorage.setItem("Eventid",this.state.info[index].id)}}>View participants details</Link>
                                                        {/* <Link to="/" className="book-a-table-btn ">Update</Link>
                                <Link to="/" className="book-a-table-btn ">Delete</Link> */}



                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="swiper-pagination"></div>

                                    </div>

                                </div>
                            </section>

                        </div>

                    </div>

                ))}
                {/* <Footer /> */}
            </div>
        )
    }

}


export default Updateevents;
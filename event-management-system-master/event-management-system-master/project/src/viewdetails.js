// import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./navbar";
import { Link, NavLink } from "react-router-dom";
import "./registration";
import { db } from "./firebase";
import Frame from "react-frame-component";
import './events.css'
import './viewdetails.css'
import Registration from "./registration";
import React, { Component } from "react";
import Events from "./Events";
import ReactToPrint from "react-to-print";
// import downloaDetails from "./downloadDetails"

class Viewdetails extends Component {


    state = {
        info: [],
    };

    fetchData = () => {

        var a=localStorage.getItem("Eventid").trim()
        db.collection("Events").doc(a).collection("participants")
            .get()
            .then((querySnapshot) => {
                // var id=querySnapshot.getKey();
                
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
            <div className='bg3'>
            <div>
                {/* <Navbar /> */}
               {/* <button to="/downloadDetails" className="book-a-table-btn ">DownloadDetails</button> */}
                <div className="part">Participants</div>
                <div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Employee ID</th>
            <th>Email</th>
            <th>Phone number</th>
        </tr>
        </thead>
        <tbody>
        {this.state.info.map((Events, index) => (   
        <tr>
            <td>{Events.name}</td>
            <td>{Events.department}</td>
            <td>{Events.employeeid}</td>
            <td>{Events.email}</td>
            <td>{Events.phone}</td>
        </tr>
        ))}
        </tbody>
    </table>
</div>


                {/* <Footer /> */}
                </div>
            </div>
        )
    }

}



export default Viewdetails;
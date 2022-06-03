import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./profile.css";
import "./navbar";
import "./Footer";
import Navbar from "./navbar";
import Footer from "./Footer";
import { db } from "./firebase";

class Profile extends Component {
  state = {
    info: [],
  };

  fetchData = () => {
    db.collection("User")
      .get()
      .then((querySnapshot) => {
        // var id=querySnapshot.getKey();

        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
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
      <>
        <Navbar />
        <div className="bg1">
          <br />
          <br />
          {this.state.info.map((User, index) => (
            <div className="container emp-profile">
              <form method="post">
                <div className="row">
                  <div className="col-md-2">
                    <div className="profile-img">
                      <img
                        src="https://nd.net/wp-content/uploads/2016/04/profile-dummy.png"
                        alt=""
                      />
                      {/* <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* <div className="profile-head"> */}
                    {/* <h5>
                                        Kshiti Ghelani
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6> */}
                    {/* <p className="proile-rating">RANKINGS : <span>8/10</span></p> */}
                    {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li> */}
                    {/* </ul> * */}
                    {/* {/* </div> */}
                  </div>
                  {/* <div className="col-md-2"> */}
                  {/* <a href="logout" classNameName='logcss'>Log out</a> */}
                  {/* <li><Link classNameName="nav-link scrollto logcss" to="/logout">Log out</Link></li>
                    
                    </div> */}
                  {/* <div className="col-md-2"> */}
                  {/* <a href="home" classNameName='logcss'>Home</a> */}
                  {/* <li><Link classNameName="nav-link scrollto logcss" to="/home">Home</Link></li>
                    </div> */}
                </div>
                <div className="row">
                  <div className="col-md-4">
                    {/* <div className="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div> */}
                  </div>
                  <div className="col-md-4">
                    <div className="tab-content profile-tab" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        {/* <div className="row">
                                            <div className="col-md-4">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-4">
                                                <p>Kshiti123</p>
                                            </div>
                                        </div> */}
                        <div className="row">
                          <div className="col-md-4">
                            <label style={{ color: "black" }}>Name</label>
                          </div>
                          <div className="col-md-4">
                            <p>
                              {User.fname} {User.lname}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label style={{ color: "black" }}>Email</label>
                          </div>
                          <div className="col-md-4">
                            <p>xyz@gmail.com</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label style={{ color: "black" }}>Phone</label>
                          </div>
                          <div className="col-md-4">
                            <p>9999999999</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label style={{ color: "black" }}>Department</label>
                          </div>
                          <div className="col-md-4">
                            <p>IT</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label style={{ color: "black" }}>
                              Employee ID
                            </label>
                          </div>
                          <div className="col-md-4">
                            <p>20ITEMP234</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default Profile;

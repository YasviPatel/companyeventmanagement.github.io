import React, { useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import "./addevent.css";
// import "./Signup.css"
import "./Events";
import { db, auth, storage } from "./firebase";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Addevent = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [amount, setAmount] = useState("");
  // const[noOfParticipants,setNoOfParticipants]=useState("");
  const [image, setImage] = useState(null);
  // const [url, setUrl] = useState("");
  const [desc, setDesc] = useState("");
  // const[eid,setEid]=useState("");

  // const handleChange = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };

  // const handleUpload = () => {
  //   const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //   uploadTask.on(
  //     "state_changed",
  //     snapshot => {
  //     },
  //     error => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage
  //         .ref("images")
  //         .child(image.name)
  //         .getDownloadURL()
  //         .then(url => {
  //           setUrl(url);
  //         });
  //     }
  //   );
  // };

  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    //         emailjs.sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
    // .then((result) => {
    // alert("Message Sent, We will get back to you shortly", result.text);
    // },
    // (error) => {
    // alert("An error occurred, Please try again", error.text);
    // });

    //  const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //  auth.createUserWithEmail(email)
    // .then(()=>{
    db.collection("Events")
      .add({
        name: name,
        location: location,
        date: date,
        time: time,
        amount: amount,
        // noOfParticipants:noOfParticipants,
        image: image,
        desc: desc,
        // eid:now()
        // url:url
      })
      .then((doc) => {
        db.collection("Events")
          .doc(doc.id)
          .update({ id: doc.id })
          .then(() => {
            alert("Event added sucessfully");
            navigate("/admin");
          });
      });
    // })
  };

  return (
    <>
      <div className="bg">
        <div className="container">
          <form method="POST" onSubmit={handleSubmit}>
            <h2 style={{ color: "#d9ba85" }}>Add Event</h2>
            <div className="form-group">
              <label
                for="exampleFormControlInput1"
                style={{ color: "#d9ba85" }}
              >
                Event Name
              </label>
              <input
                type="name"
                class="form-control"
                name="name"
                id="exampleFormControlInput1"
                placeholder=" Enter event name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            {/* <div className="form-group">
    <label for="exampleFormControlInput1" style={{color:"#d9ba85"}}>Location</label>
    <input type="name" class="form-control" name="location" id="exampleFormControlInput1" placeholder="Enter location" onChange={(e) => setLocation(e.target.value)}
                required/>
  </div> */}
            <div className="form-group">
              {/* <label> */}

              <label
                for="exampleFormControlInput1"
                style={{ color: "#d9ba85" }}
              >
                Location
              </label>
              <select
                className="input1"
                id="dept"
                name="dept"
                onChange={(e) => setLocation(e.target.value)}
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
              <label
                for="exampleFormControlInput1"
                style={{ color: "#d9ba85" }}
              >
                Date{" "}
              </label>
              <i class="fa fa-calendar" aria-hidden="true"></i>
              <input
                type="date"
                class="form-control"
                name="date"
                id="exampleFormControlInput1"
                placeholder="Enter date"
                minDate={new Date()}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label
                for="exampleFormControlInput1"
                style={{ color: "#d9ba85" }}
              >
                Time
              </label>
              <input
                type="time"
                class="form-control"
                name="time"
                id="exampleFormControlInput1"
                placeholder="Enter time"
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label
                for="exampleFormControlInput1"
                style={{ color: "#d9ba85" }}
              >
                Amount
              </label>
              <input
                type="number"
                class="form-control"
                name="amount"
                id="exampleFormControlInput1"
                placeholder="Enter amount"
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            {/* <div className="form-group">
    <label for="exampleFormControlInput1" style={{color:"#d9ba85"}}>No.of participants required</label>
    <input type="number" class="form-control" name="numberOfParticipants" id="exampleFormControlInput1" placeholder="Enter no.of participants" onChange={(e) => setNoOfParticipants(e.target.value)}
                required/>
  </div>  */}
            <div className="form-group">
              <label
                for="exampleFormControlInput1"
                style={{ color: "#d9ba85" }}
              >
                Enter appropriate image link
              </label>
              <br />
              <input
                type="text"
                class="form-control"
                name="image"
                id="exampleFormControlFile1"
                placeholder="Enter appropriate image for event"
                onChange={(e) => setImage(e.target.value)}
                required
              />
              {/* <button onClick={handleUpload}>Upload</button>    */}
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
            <div className="form-group">
              <label
                for="exampleFormControlTextarea1"
                style={{ color: "#d9ba85" }}
              >
                Add Description
              </label>
              <textarea
                className="form-control"
                name="desc"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addevent;

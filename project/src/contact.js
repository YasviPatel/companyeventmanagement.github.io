import React,{useRef} from "react";
import Footer from "./Footer";
import Navbar from "./navbar";
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("oNB9X1jFw-gRAbkMG");

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j7dcp6p', 'template_8ne0t9h', form.current, 'oNB9X1jFw-gRAbkMG')
      
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Your mail sent sucessfully")
      e.target.reset();
  };
            return (
            <>
            <div className="bg">
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          {/* <h2>Contact</h2> */}
          <p>Contact Us</p>
        </div>
      </div>

      <div data-aos="fade-up">      </div>

      <div className="container">

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              {/* <div className="open-hours">
                <i className="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <p>
                  Monday-Saturday:<br/>
                  11:00 AM - 2300 PM
                </p>
              </div> */}

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 555</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form ref={form}onSubmit={sendEmail} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3  mt-md-0">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3 mt-md-0">
                <textarea className="form-control" name="message" rows="8" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit" value="send" style={{color:"black"}}>Send Mail</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
    </div>
    <Footer/>

            </>
            );
}

export default Contact;
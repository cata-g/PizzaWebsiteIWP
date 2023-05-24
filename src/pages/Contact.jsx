import React from "react";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import map from "../static/images/mapa.jpg";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div
        className="container p-3 contact-container"
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
        }}
      >
        <h1>GET IN TOUCH!</h1>
        <h4>
          We would love to hear your comments, questions, or suggestions
          regarding our service or food.
        </h4>
        <h4>
          Please fill out the following fields, and we will get back to you as
          soon as possible
        </h4>

        <div className="row p-3">
          <div className="col-md-6">
            <p>Address</p>
            <p>Phone Number</p>
            <p>Working Hours</p>
            <img src={map} alt="" height={200} width={400} />
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="inputSubject">Subject</label>
              <input
                type="text"
                className="form-control"
                id="inputSubject"
                placeholder="Enter the subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="inputMessage">Message</label>
              <textarea
                className="form-control"
                id="inputMessage"
                rows="5"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

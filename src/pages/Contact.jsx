import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import map from "../static/images/mapa.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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
            <p className="">
              {/* <img
                src={address}
                alt=""
                style={{
                  width: "25px",
                  height: "25px",
                }}
              /> */}
              <FontAwesomeIcon icon={faLocationDot} />
              <span> Address</span>
            </p>

            <p className="">
              {/* <img
                src={phone}
                alt=""
                style={{
                  width: "25px",
                  height: "25px",
                }}
              /> */}
              <FontAwesomeIcon icon={faPhone} />
              <span> Phone Number</span>
            </p>

            <p className="">
              {/* <img
                src={workingHours}
                alt=""
                style={{
                  width: "25px",
                  height: "25px",
                }}
              /> */}
              <FontAwesomeIcon icon={faCalendar} />
              <span> Working Hours</span>
            </p>

            <img src={map} alt="" height={200} width={400} />
          </div>
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label htmlFor="inputName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Enter your name"
                  name="nameFrom"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter your email"
                  name="emailFrom"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputSubject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputSubject"
                  placeholder="Enter the subject"
                  name="subject"
                  onChange={(event) => setSubject(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputMessage">Message</label>
                <textarea
                  className="form-control"
                  id="inputMessage"
                  rows="5"
                  name="message"
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>

              <div className="float-end form-group">
                <button
                  type="submit"
                  className="button1 btn form-control"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(name == "");
                    if (
                      name === "" ||
                      email === "" ||
                      subject === "" ||
                      message === ""
                    )
                      alert("Please Complete All The Fields");
                    else {
                      const messageobj = {
                        nameFrom: name,
                        emailFrom: email,
                        subject: subject,
                        message: message,
                      };

                      fetch("http://localhost:5000/message/add", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(messageobj),
                      }).then(() => {
                        setName("");
                        setEmail("");
                        setSubject("");
                        setMessage("");
                        alert("Message Sent!!!");
                      });
                    }
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

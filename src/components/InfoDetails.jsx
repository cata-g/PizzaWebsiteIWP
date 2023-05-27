import React from "react";
import { Link } from "react-router-dom";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoDetails() {
  return (
    <div className="container p-5">
      <div className="container p-3">
        <h1 className="mb-2 portocaliu">
          Eat well, Eat Creative, Live Creative.
        </h1>
        <p style={{ fontSize: "20px", fontFamily:"Varela Round, sans-serif"}} className="px-5 py-3 mb-1">
          We are <span style={{fontFamily:"Yanone Kaffeesatz, sans-serif", fontSize:"28px", color:"var(--secondary)"}}>FreshFILS Pizza</span> , a culinary destination rooted in creativity and
          passion. Feel free to explore the process of creating your own pizza
          with our intentionally-sourced ingredients or browse our diverse menu.
          Remember, creativity comes with every bite.
        </p>
      </div>
      <br />
      <div className="row justify-content-center">
        <div className="col-md-3">
          <button className="button1">Our Story</button>
        </div>
        <div className="col-md-3">
          {" "}
          <Link
                className="btn btn-outline-light btn-lg button1 "
                role="button"
                style={{
                  fontFamily: "Varela Round, sans-serif",
                  fontSize: "16px",
                }}
                to="/menu"
              >
                Our Menu 
                
              </Link>
        </div>
        <div className="col-md-3">
        <Link
                className="btn btn-outline-light btn-lg button1"
                role="button"
                style={{
                  fontFamily: "Varela Round, sans-serif",
                  fontSize: "16px",
                }}
                to="/create-your-own"
              >
                Take Me There   
              </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import {faPizzaSlice} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
  return (
    <div
      className="heroImage"
      style={{
        height: "550px",
      }}
    >
      <Navbar />
      <div className="p-5 text-center bg-image rounded-3">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="mt-5">
              <h2
                className="mb-2 text-white"
                style={{
                  fontFamily: "Varela Round, sans-serif",
                  fontSize: "42px",
                }}
              >
                NOT SURE WHAT TO GET?
              </h2>
              <h2
                className="mb-3 verde mt-2"
                style={{
                  overflow: "hidden",
                  fontFamily: "Varela Round, sans-serif",
                }}
              >
                CREATE YOUR OWN!
              </h2>
              <Link
                className="btn btn-outline-light btn-lg buttonhero mt-4"
                role="button"
                style={{
                  textTransform: "uppercase",
                  fontFamily: "Varela Round, sans-serif",
                  fontSize: "16px",
                }}
                to="/create-your-own"
              >
                Take Me There   
                <FontAwesomeIcon icon={faPizzaSlice} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import NavbarLink from "./NavbarLink";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../static/images/logo.png";

export default function Navbar() {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/navbar/get", {
      method: "GET",
      headers: {
        "Content-Type": "applications/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setLinks(resp))
      .catch((error) => console.log(error));
  }, []);

  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse justify-content-start">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              style={{
                width: "60%",
                height: "60%",
              }}
            />
          </Link>
        </div>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarCenteredExample"
        >
          <ul class="navbar-nav mb-2 mb-lg-0">
            {links.map((item) => {
              return (
                <NavbarLink name={item.name} link={item.href} key={item.name} />
              );
            })}
          </ul>
        </div>
        <div class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/cart"
                style={{
                  fontFamily: "Yanone Kaffeesatz, sans-serif",
                  color: "white",
                  fontSize: "22px",
                  letterSpacing: "0.05rem",
                  fontWeight: "400",
                  textTransform: "uppercase",
                }}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{
                    color: "white",
                  }}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn button1"
                aria-current="page"
                to="/menu"
                style={{
                  fontFamily: "Yanone Kaffeesatz, sans-serif",
                  color: "white",
                  fontSize: "22px",
                  letterSpacing: "0.05rem",
                  fontWeight: "400",
                  textTransform: "uppercase",
                }}
              >
                Order Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

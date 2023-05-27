import React, { useEffect, useState } from "react";
import NavbarLink from "./NavbarLink";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
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
    <div>
      <div className="row">
        <div className="col-md-1">
          <p className="p-4" style={{ color: "white" }}>
            Logo
          </p>
        </div>
        <div className="col-md-10">
          <nav className="navbar navbar-expand-sm">
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                {links.map((item) => {
                  return (
                    <NavbarLink
                      name={item.name}
                      link={item.href}
                      key={item.name}
                    />
                  );
                })}
              </ul>
            </div>
            <Outlet />
          </nav>
        </div>
        <div className="col-md-1 mt-3">
          <div className="row">
            <div className="col-md-3">
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{
                    color: "white",
                  }}
                  className="mt-3"
                />
              </Link>
            </div>
            <div className="col-md-8 p-2">
              <Link className="btn button1" to="/menu">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

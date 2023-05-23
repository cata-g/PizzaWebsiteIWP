import React from "react";
import NavbarLink from "./NavbarLink";
import { Outlet } from "react-router-dom";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Menu",
    link: "/menu",
  },
  {
    name: "Create Your Own",
    link: "/create-your-own",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

export default function Navbar() {
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
                      link={item.link}
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
          <button className="button1 p-2">Order Now</button>
        </div>
      </div>
    </div>
  );
}

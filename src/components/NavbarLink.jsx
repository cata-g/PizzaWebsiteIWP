import React from "react";
import { Link } from "react-router-dom";
export default function NavbarLink({ name, link }) {
  return (
    <li className="nav-item p-2">
      <Link
        className="nav-link active"
        aria-current="page"
        to={link}
        style={{
          fontFamily: "Yanone Kaffeesatz, sans-serif",
          color: "white",
          fontSize: "22px",
          letterSpacing: "0.05rem",
          fontWeight: "400",
          textTransform: "uppercase",
        }}
      >
        {name}
      </Link>
    </li>
  );
}

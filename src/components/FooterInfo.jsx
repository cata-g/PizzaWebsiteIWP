import React from "react";

export default function FooterInfo({ name, items }) {
  return (
    <div className="col-md-4 justify-content-center p-5">
      <h3
        style={{
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontFamily: "Yanone Kaffeesatz, sans-serif",
          letterSpacing: "0.1rem",
        }}
        className="mb-3"
      >
        {name}
      </h3>
      <ul className="list-group">
        {items.map((item) => {
          return (
            <li
              className="mt-2"
              style={{
                listStyleType: "none",
              }}
            >
              <a
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "Yanone Kaffeesatz, sans-serif",
                  fontWeight: "300",
                  fontSize: "22px",
                  letterSpacing: "0.05rem",
                }}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import React from "react";

export default function MenuCard({ name, imgSrc, ingredients }) {
  return (
    <div className="container p-4 " id="containerMenu">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require("../static/images/pizzas_menu/" + imgSrc)}
            style={{
              borderRadius: "20px",
              height: "200px",
            }}
            className="menu-img"
          />
        </div>
        <div className="col-md-6">
          <h1 
          className="menu=name"
          style={{fontFamily: "Yanone Kaffeesatz, sans-serif",
          fontWeight: 500,
          color: "var(--primary)",
          }}
          >{name}</h1>
          <ul className="menu-list">
            {ingredients.map((item) => {
              return <li 
              style={{fontFamily: "Yanone Kaffeesatz, sans-serif",
              fontSize: "20px",
              fontWeight: 300,
              color: "var(--black75)"
               
            }}
              >{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

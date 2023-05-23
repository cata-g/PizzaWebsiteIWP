import React from "react";

export default function MenuCard({ name, imgSrc, ingredients }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require("../static/images/pizzas_menu/" + imgSrc)}
            style={{
              borderRadius: "20px",
              height: "200px",
            }}
          />
        </div>
        <div className="col-md-6">
          <h1>{name}</h1>
          <ul>
            {ingredients.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

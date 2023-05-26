import React from "react";

export default function MenuCard({ name, imgSrc, ingredients, addToCart }) {
  return (
    <div className="col-md-3 p-3">
      <div
        className="card p-2"
        style={{
          height: "580px",
        }}
      >
        <img
          src={require("../static/images/pizzas_menu/" + imgSrc)}
          alt=""
          className="card-img-top"
        />
        <div className="card-body text-center">
          <h1
            className="menu-name"
            style={{
              fontFamily: "Yanone Kaffeesatz, sans-serif",
              fontWeight: 500,
              color: "var(--primary)",
            }}
          >
            {name}
          </h1>
          <p>{ingredients}</p>
        </div>
        <button
          className="btn button1"
          onClick={() => {
            addToCart({
              name: name,
              description: ingredients,
              img: imgSrc,
            });
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

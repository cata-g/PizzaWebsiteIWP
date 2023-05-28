import React from "react";
import Swal from "sweetalert2";
import "animate.css/animate.min.css";

export default function MenuCard({
  name,
  size,
  imgSrc,
  ingredients,
  addToCart,
}) {
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
              size: size,
              description: ingredients,
              img: imgSrc,
            });
            Swal.fire({
              icon: "success",
              title: "Added to Cart!",
              text: "Check your cart to see your order",
              confirmButtonColor: "#ff7300",
            });
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

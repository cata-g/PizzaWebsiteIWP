import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function Cart({ cartItems, deleteFromCart }) {
  return (
    <>
      <Navbar />
      {cartItems.map((itm, index) => {
        return (
          <div key={index}>
            <h1>
              {index}
              {itm.name}
            </h1>
            <p>{itm.description}</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteFromCart(index);
                console.log(cartItems);
              }}
            >
              Delete Me
            </button>
          </div>
        );
      })}
      <Footer />
      <Copyright />
    </>
  );
}

import React from "react";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import MenuCard from "../components/MenuCard";
import { useState, useEffect } from "react";

export default function Menu({ addToCartFunction }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/pizza/get", {
      method: "GET",
      headers: {
        "Content-Type": "applications/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setMenuItems(resp))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row p-3">
          {menuItems.map((item) => {
            return (
              <MenuCard
                name={item.name}
                size={item.size}
                imgSrc={item.imageSource}
                ingredients={item.ingredients}
                key={item.id}
                addToCart={addToCartFunction}
              />
            );
          })}
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

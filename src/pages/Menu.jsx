import React from "react";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import MenuCard from "../components/MenuCard";

import hawaiana from "../static/images/pizzas_menu/pizza_hawaiana.jpg";

export default function Menu() {
  return (
    <>
      <Navbar />
      <div className="container">
        {menuItems.map((item) => {
          return (
            <MenuCard
              name={item.name}
              imgSrc={item.imageSrc}
              ingredients={item.ingredients}
              key={item.name}
            />
          );
        })}
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

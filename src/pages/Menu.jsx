import React from "react";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import MenuCard from "../components/MenuCard";

import hawaiana from "../static/images/pizzas_menu/pizza_hawaiana.jpg";

const menuItems = [
  {
    name: "Pizza Hawaiana",
    imageSrc: "pizza_hawaiana.jpg",
    ingredients: ["mozzarella", "tomato sauce", "pineapple", "ham", "corn"],
  },
  {
    name: "Pizza Formaggi Pepperoni",
    imageSrc: "pizza_formaggi_pepperoni.jpg",
    ingredients: ["mozzarella", "pepperoni", "cheese", "fresh tomatoes"],
  },
  {
    name: "Pizza Suprema",
    imageSrc: "pizza_suprema.jpg",
    ingredients: [
      "mozzarella",
      "tomato sauce",
      "chorizo",
      "bacon",
      "sausages",
      "blue cheese",
      "bell peppers",
    ],
  },
  {
    name: "Pizza Quattro Formaggi",
    imageSrc: "pizza_quattro_formaggi.jpg",
    ingredients: [
      "mozzarella",
      "vegetable cream",
      "brie",
      "emmental",
      "blue cheese",
    ],
  },
  {
    name: "Pizza Diavola",
    imageSrc: "pizza_diavola.jpg",
    ingredients: [
      "mozzarella",
      "tomato sauce",
      "chorizo",
      "sausages",
      "chili peppers",
    ],
  },
  {
    name: "Pizza Quattro Stagioni",
    imageSrc: "pizza_quattro_stagioni.jpg",
    ingredients: [
      "mozzarella",
      "tomato sauce",
      "ham",
      "chorizo",
      "black olives",
      "fresh mushrooms",
    ],
  },
  {
    name: "Pizza Capricciosa",
    imageSrc: "pizza_capricciosa.jpg",
    ingredients: [
      "mozzarella",
      "tomato sauce",
      "chicken breast",
      "chorizo",
      "bell peppers",
      "fresh mushrooms",
    ],
  },
  {
    name: "Pizza Carnivora",
    imageSrc: "pizza_carnivora.jpg",
    ingredients: [
      "mozzarella",
      "tomato sauce",
      "ham",
      "chorizo",
      "bacon",
      "bell peppers",
    ],
  },
  {
    name: "Pizza Pepperoni Clasic",
    imageSrc: "pizza_pepperoni_clasic.jpg",
    ingredients: ["mozarella", "tomato sauce", "pepperoni"],
  },
  {
    name: "Pizza Quattro Stagioni Mixed",
    imageSrc: "pizza_quattro_stagioni_amestecata.jpg",
    ingredients: [
      "mozzarella",
      "tomato sauce",
      "ham",
      "chorizo",
      "black olives",
      "fresh mushrooms",
    ],
  },
  {
    name: "Pizza Picantina",
    imageSrc: "pizza_picantina.jpg",
    ingredients: [
      "mozzarella",
      "tomato sauce",
      "chorizo",
      "jalapeno peppers",
      "sausages",
      "smoked cheese",
      "blue cheese",
    ],
  },
  {
    name: "Pizza Bianca d'Oro",
    imageSrc: "pizza_bianca_doro.jpg",
    ingredients: [
      "mozzarella",
      "cream",
      "chicken breast",
      "brie",
      "corn",
      "fresh mushrooms",
      "bell peppers",
    ],
  },
  {
    name: "Pizza Prosciutto Funghi",
    imageSrc: "pizza_prosciutto_funghi.jpg",
    ingredients: ["mozzarella", "tomato sauce", "ham", "fresh mushrooms"],
  },
];

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

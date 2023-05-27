import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";

import PizzaSelector from "../components/PizzaSelector";
import Modifiers from "../components/Modifiers";
import pizzaGoala from "../static/images/pizza_toppings/pizza_goala.png";
import { useNavigate } from "react-router-dom";
export default function CreateYourOwn({ addToCartFunction }) {
  const [selectedSize, setSelectedSize] = useState("S");
  const [isAvocado, setIsAvocado] = useState(true);
  const [isCheese, setIsCheese] = useState(true);
  const [isMushrooms, setIsMushrooms] = useState(true);
  const [isJalapenos, setIsJalapenos] = useState(true);
  const [isOlives, setIsOlives] = useState(true);
  const [isHam, setIsHam] = useState(true);
  const [isTomatoes, setIsTomatoes] = useState(true);

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div
        style={{ backgroundColor: "white", borderRadius: "20px" }}
        className="p-2 container"
      >
        <center>
          <h1 className="black50">Create your own masterpiece...</h1>
        </center>
        <div
          className="row"
          style={{
            height: "550px",
          }}
        >
          <Modifiers
            setIsAvocado={setIsAvocado}
            setIsCheese={setIsCheese}
            setIsHam={setIsHam}
            setIsJalapenos={setIsJalapenos}
            setIsMushrooms={setIsMushrooms}
            setIsOlives={setIsOlives}
            setIsTomatoes={setIsTomatoes}
            isAvocado={isAvocado}
            isCheese={isCheese}
            isHam={isHam}
            isJalapenos={isJalapenos}
            isMushrooms={isMushrooms}
            isOlives={isOlives}
            isTomatoes={isTomatoes}
            setSelectedSizeFunction={setSelectedSize}
            selectedSizeValue={selectedSize}
          />
          <PizzaSelector
            isAvocado={isAvocado}
            isCheese={isCheese}
            isHam={isHam}
            isJalapenos={isJalapenos}
            isMushrooms={isMushrooms}
            isOlives={isOlives}
            isTomatoes={isTomatoes}
          />
        </div>
        <button
          className="button1 float-end btn clearfix"
          onClick={() => {
            var pizzaName = "Custom Pizza";
            var ingredients = "";
            if (isAvocado) ingredients += "Avocado,";
            if (isCheese) ingredients += "Cheese,";
            if (isHam) ingredients += "Ham,";
            if (isJalapenos) ingredients += "Jalapenos,";
            if (isMushrooms) ingredients += "Mushrooms,";
            if (isOlives) ingredients += "Olives,";
            if (isTomatoes) ingredients += "Tomatoes,";
            var pizzaSize = selectedSize;
            var imageSource = "pizza_goala.png";

            addToCartFunction({
              name: pizzaName,
              description: ingredients,
              size: pizzaSize,
              img: imageSource,
            });

            navigate("/cart");
          }}
        >
          Finish Order
        </button>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

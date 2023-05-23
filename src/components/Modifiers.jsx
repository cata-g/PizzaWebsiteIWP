import React, { useState } from "react";
import SizeButton from "./SizeButton";
import IngredientButton from "./IngredientButton";

export default function Modifiers({
  setIsAvocado,
  setIsCheese,
  setIsHam,
  setIsJalapenos,
  setIsMushrooms,
  setIsOlives,
  setIsTomatoes,
  isAvocado,
  isCheese,
  isHam,
  isJalapenos,
  isMushrooms,
  isOlives,
  isTomatoes,
}) {
  const [selectedSize, setSelectedSize] = useState("smallPizza");

  return (
    <div className="col-md-6 p-5">
      <div class="p-3">
      <h1 
      style={{
        fontFamily: "Varela Round, sans-serif"
      }}
      >What will be on your pizza?</h1>
      </div>
      
      <div class="p-3"><h3
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseSizes"
        aria-expanded="false"
        aria-controls="collapseSizes"
        style={{
          overflowY: "hidden",
          fontFamily: "Yanone Kaffeesatz, sans-serif"
        }}
      >
        Sizes
      </h3>
      </div>
      
      <div class="collapse" id="collapseSizes">
        <div class="card card-body">
          <SizeButton
            text="Small"
            id="smallPizza"
            functionOnClick={() => setSelectedSize("smallPizza")}
            selectedSize={selectedSize}
          />
          <SizeButton
            text="Medium"
            id="mediumPizza"
            functionOnClick={() => setSelectedSize("mediumPizza")}
            selectedSize={selectedSize}
          />
          <SizeButton
            text="Large"
            id="largePizza"
            functionOnClick={() => setSelectedSize("largePizza")}
            selectedSize={selectedSize}
          />
          <SizeButton
            text="Extra Large"
            id="xlPizza"
            functionOnClick={() => setSelectedSize("xlPizza")}
            selectedSize={selectedSize}
          />
        </div>
      </div>

        <div class="p-3">
          <h3
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseIngredients"
        aria-expanded="false"
        aria-controls="collapseIngredients"
        style={{
          overflowY: "hidden",
          fontFamily: "Yanone Kaffeesatz, sans-serif"
        }}
      >
        Ingredients
      </h3>
      </div>
      
      <div class="collapse" id="collapseIngredients">
        <div class="card card-body">
          <IngredientButton
            text="Avocado"
            id="avocadoSelector"
            changer={setIsAvocado}
            whatToChange={isAvocado}
          />
          <IngredientButton
            text="Cheese"
            id="cheeseSelector"
            changer={setIsCheese}
            whatToChange={isCheese}
          />
          <IngredientButton
            text="Mushrooms"
            id="mushroomsSelector"
            changer={setIsMushrooms}
            whatToChange={isMushrooms}
          />
          <IngredientButton
            text="Jalapenos"
            id="jalapenosSelector"
            changer={setIsJalapenos}
            whatToChange={isJalapenos}
          />
          <IngredientButton
            text="Olives"
            id="olivesSelector"
            changer={setIsOlives}
            whatToChange={isOlives}
          />
          <IngredientButton
            text="Ham"
            id="hamSelector"
            changer={setIsHam}
            whatToChange={isHam}
          />
          <IngredientButton
            text="Tomato"
            id="tomatoSelector"
            changer={setIsTomatoes}
            whatToChange={isTomatoes}
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import PizzaGoala from "../static/images/pizza_toppings/pizza_goala.png";
import Avocado from "../static/images/pizza_toppings/avocado.png";
import Branza from "../static/images/pizza_toppings/branza.png";
import Ciuperci from "../static/images/pizza_toppings/ciupearca.png";
import Jalapenos from "../static/images/pizza_toppings/jalapenos.png";
import Masline from "../static/images/pizza_toppings/mazline.png";
import Sunca from "../static/images/pizza_toppings/sunca.png";
import Rosie from "../static/images/pizza_toppings/tomato.png";
import ToppingImage from "./ToppingImage";

export default function PizzaSelector({
  isAvocado,
  isCheese,
  isHam,
  isJalapenos,
  isMushrooms,
  isOlives,
  isTomatoes,
}) {
  return (
    <div className="col-md-6">
      <div>
        <img
          src={PizzaGoala}
          height="500px"
          width="600px"
          style={{
            position: "absolute",
            zIndex: 1,
          }}
          alt=""
        />
        <ToppingImage src={Jalapenos} zIndex={2} opacityValue={isJalapenos} />
        <ToppingImage src={Branza} zIndex={3} opacityValue={isCheese} />
        <ToppingImage src={Avocado} zIndex={4} opacityValue={isAvocado} />
        <ToppingImage src={Ciuperci} zIndex={5} opacityValue={isMushrooms} />
        <ToppingImage src={Masline} zIndex={6} opacityValue={isOlives} />
        <ToppingImage src={Sunca} zIndex={7} opacityValue={isHam} />
        <ToppingImage src={Rosie} zIndex={8} opacityValue={isTomatoes} />
      </div>
    </div>
  );
}

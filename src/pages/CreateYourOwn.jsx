import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";

import PizzaSelector from "../components/PizzaSelector";
import Modifiers from "../components/Modifiers";
export default function CreateYourOwn() {
  const [isAvocado, setIsAvocado] = useState(false);
  const [isCheese, setIsCheese] = useState(false);
  const [isMushrooms, setIsMushrooms] = useState(false);
  const [isJalapenos, setIsJalapenos] = useState(false);
  const [isOlives, setIsOlives] = useState(false);
  const [isHam, setIsHam] = useState(false);
  const [isTomatoes, setIsTomatoes] = useState(false);
  return (
    <>
      <Navbar />
      <div
        style={{ backgroundColor: "white", borderRadius: "20px" }}
        className="p-2"
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
        <button className="button1 float-end btn clearfix">Finish Order</button>
      </div>
      <Copyright />
    </>
  );
}

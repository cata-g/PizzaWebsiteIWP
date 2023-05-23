import React from "react";
import pizza from "../static/images/pizza.png";
import pickup from "../static/images/pickup.png";
import delivery from "../static/images/delivery.png";
import InfoImage from "./InfoImage";

export default function Whyus() {
  return (
    <div
      className="container p-5 mt-5"
      style={{ backgroundColor: "white", borderRadius: "30px" }}
    >
      <h5 className="h5verde mb-3">What you get with us</h5>
      <h3 className="h3portocaliu mb-5">We've got you covered</h3>
      <div className="container">
        <div className="row align-items-center">
          <InfoImage image={delivery} text="Fast Delivery" />
          <InfoImage image={pickup} text="Pickup in Store" />
          <InfoImage image={pizza} text="Quality Pizza" />
        </div>
      </div>
    </div>
  );
}

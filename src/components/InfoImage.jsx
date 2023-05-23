import React from "react";

export default function InfoImage({ image, text }) {
  return (
    <div className="col-md-4">
      <img
        src={image}
        height="200px"
        width="200px"
        style={{ backgroundColor: "none" }}
      />
      <h5 className="h5verde mt-4 p-2">{text}</h5>
    </div>
  );
}

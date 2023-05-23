import React from "react";

export default function ToppingImage({ zIndex, src, opacityValue }) {
  return (
    <img
      src={src}
      height="500px"
      width="600px"
      style={{
        position: "absolute",
        zIndex,
        opacity: opacityValue === true ? 1 : 0,
      }}
      alt=""
    />
  );
}

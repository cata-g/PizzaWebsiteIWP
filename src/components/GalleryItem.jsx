import React from "react";

export default function GalleryItem({ col, imgSrc }) {
  return (
    <div className={`gallery-item ${col}`}>
      <img
        src={imgSrc}
        style={{
          borderRadius: "30px",
          height: "400px",

        }}
      />
    </div>
  );
}

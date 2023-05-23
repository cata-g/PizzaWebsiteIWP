import React from "react";

export default function GalleryItem({ col, imgSrc }) {
  return (
    <div className={col}>
      <img
        src={imgSrc}
        style={{
          borderRadius: "20px",
          height: "400px",
        }}
      />
    </div>
  );
}

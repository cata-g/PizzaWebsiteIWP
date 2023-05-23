import React from "react";

export default function SizeButton({
  text,
  id,
  functionOnClick,
  selectedSize,
}) {
  return (
    <div class="form-check">
      <label class="form-check-label" for={id}>
        {text}
      </label>
      <input
        class="form-check-input"
        type="radio"
        name={id}
        id={id}
        onClick={functionOnClick}
        checked={id === selectedSize}
      />
    </div>
  );
}

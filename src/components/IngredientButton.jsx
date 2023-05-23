import React from "react";

export default function IngredientButton({ text, id, changer, whatToChange }) {
  return (
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id={id}
        onChange={() => {
          changer(!whatToChange);
          console.log(whatToChange);
        }}
      />
      <label class="form-check-label" for={id}>
        {text}
      </label>
    </div>
  );
}

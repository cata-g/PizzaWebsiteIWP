import React from "react";

export default function InfoDetails() {
  return (
    <div className="container p-5">
      <div className="container p-3">
        <h1 className="mb-2 portocaliu">
          Eat well, Eat Creative, Live Creative.
        </h1>
        <p style={{ fontSize: "20px", fontFamily:"Varela Round, sans-serif"}} className="px-5 py-3 mb-1">
          We are <span style={{fontFamily:"Yanone Kaffeesatz, sans-serif", fontSize:"28px", color:"var(--secondary)"}}>FreshFILS Pizza</span> , a culinary destination rooted in creativity and
          passion. Feel free to explore the process of creating your own pizza
          with our intentionally-sourced ingredients or browse our diverse menu.
          Remember, creativity comes with every bite.
        </p>
      </div>
      <br />
      <div className="row justify-content-center">
        <div className="col-md-3">
          <button className="button1">Our Story</button>
        </div>
        <div className="col-md-3">
          {" "}
          <button className="button1">Our Menu</button>
        </div>
        <div className="col-md-3">
          <button className="button1">Create Your Own</button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import InfoDetails from "./InfoDetails";
import Whyus from "./Whyus";

export default function Info() {
  return (
    <>
      <section className="container text-center p-5">
        <InfoDetails />
        <Whyus />
      </section>
    </>
  );
}

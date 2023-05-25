import React, { useState, useEffect } from "react";
import FooterInfo from "./FooterInfo";

export default function Footer() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/footer/get", {
      method: "GET",
      headers: {
        "Content-Type": "applications/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setInfo(resp))
      .catch((error) => console.log(error));
  });

  return (
    <section className="footerImage mt-5">
      <div className="row text-center p-5">
        <FooterInfo name="Food" items={info.slice(0, 3)} />
        <FooterInfo name="About" items={info.slice(3, 6)} />
        <FooterInfo name="Contact Us" items={info.slice(6, 9)} />
      </div>
    </section>
  );
}

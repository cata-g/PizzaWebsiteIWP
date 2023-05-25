import React from "react";
import FooterInfo from "./FooterInfo";

export default function Footer() {
  return (
    <section className="footerImage mt-5">
      <div className="row text-center p-5">
        {info.map((item) => {
          return <FooterInfo name={item.category} items={item.items} />;
        })}
      </div>
    </section>
  );
}

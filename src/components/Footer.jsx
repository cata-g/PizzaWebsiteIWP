import React from "react";
import FooterInfo from "./FooterInfo";

const info = [
  {
    category: "Food",
    items: [
      {
        name: "Menu",
        link: "#",
      },
      {
        name: "Nutritionals",
        link: "#",
      },
      {
        name: "Allergens",
        link: "#",
      },
    ],
  },

  {
    category: "About",
    items: [
      {
        name: "Locations",
        link: "#",
      },
      {
        name: "Our Story",
        link: "#",
      },
      {
        name: "Contact",
        link: "#",
      },
    ],
  },

  {
    category: "Contact Us",
    items: [
      {
        name: "Address",
        link: "#",
      },
      {
        name: "Hours",
        link: "#",
      },
      {
        name: "Phone",
        link: "#",
      },
    ],
  },
];

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

import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ menuVisible }) => {
  const NavLinkNames = [
    {
      link: "",
      name: "home",
    },
    {
      link: "shop",
      name: "shop",
    },
    {
      link: "aboutme",
      name: "about me",
    },
    {
      link: "contact",
      name: "contact",
    },
  ];
  return (
    <div
      className={`flex lg:flex-row flex-col text-md lg:text-sm items-center lg:inline-flex order-2 lg:order-1 ${
        !menuVisible && "hidden"
      }`}
    >
      {NavLinkNames.map((item, index) => {
        return (
          <Link
            to={item.link}
            className={`px-1 lg:px-4 uppercase font-light hover:underline transition-opacity`}
            key={index}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;

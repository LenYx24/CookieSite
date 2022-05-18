import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ menuVisible }) => {
  const NavLinkNames = ["", "shop", "about me", "contact"];
  return (
    <div
      className={`flex lg:flex-row flex-col text-md lg:text-sm items-center lg:inline-flex order-2 lg:order-1 ${
        !menuVisible && "hidden"
      }`}
    >
      {NavLinkNames.map((item, index) => {
        return (
          <Link
            to={item.replace(" ", "")}
            className={`px-1 lg:px-4 uppercase font-light hover:underline transition-opacity`}
            key={index}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;

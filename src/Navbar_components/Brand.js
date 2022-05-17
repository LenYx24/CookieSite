import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Brand = ({ menuVisible, setMenuVisible }) => {
  return (
    <div className="text-md md:text-2xl font-serif font-bold order-1 lg:order-2 flex justify-between mt-5 lg:mt-0">
      <GiHamburgerMenu
        className="block lg:hidden"
        onClick={() => setMenuVisible(!menuVisible)}
        size={30}
      />
      <div>Leny's confectionery</div>
    </div>
  );
};

export default Brand;

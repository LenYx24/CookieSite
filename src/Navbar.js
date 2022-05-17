import React, { useState } from "react";

import NavLinks from "./Navbar_components/NavLinks.js";
import Brand from "./Navbar_components/Brand.js";
import SocialMedia from "./Navbar_components/SocialMedia.js";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="relative">
      <div className="flex flex-col lg:flex-row justify-between min-h-[5rem] bg-white px-16 lg:px-20 lg:mb-5 lg:items-center shadow">
        <NavLinks menuVisible={menuVisible} />
        <Brand menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
        <SocialMedia menuVisible={menuVisible} />
      </div>
    </nav>
  );
};

export default Navbar;

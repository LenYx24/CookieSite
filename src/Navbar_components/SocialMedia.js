import React, { useState, useContext } from "react";
import { MdShoppingBag } from "react-icons/md";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import IconElement from "../IconElement.js";

import { MainContext } from "../App.js";
import Cart from "./Cart.js";

const SocialMedia = ({ menuVisible }) => {
  const iconSize = 20;
  const { cart } = useContext(MainContext);
  const [showCart, setShowCart] = useState(false);
  return (
    <div
      className={`items-center flex flex-row text-xs order-3 lg:text-sm lg:order-3 m-auto lg:m-0 ${
        menuVisible ? "relative" : "hidden"
      } lg:inline-flex py-3 lg:py-0`}
    >
      <IconElement name="facebook" icon={<AiFillFacebook size={iconSize} />} />
      <IconElement
        name="instagram"
        icon={<AiFillInstagram size={iconSize} />}
      />
      <IconElement name="youtube" icon={<AiFillYoutube size={iconSize} />} />
      <div className="px-4">
        <div className="relative">
          <MdShoppingBag
            className="cursor-pointer hover:text-cyan-700"
            size={40}
            onClick={() => setShowCart(!showCart)}
          />
          <div
            className={`absolute top-0 right-0 rounded-full w-4 h-5 text-sm text-white bg-red-800 text-center z-50 ${
              cart.length === 0 ? "hidden" : "block"
            }`}
          >
            {cart.length > 9 ? "9+" : cart.length}
          </div>
        </div>
        <Cart showCart={showCart} setShowCart={setShowCart} />
      </div>
    </div>
  );
};

export default SocialMedia;

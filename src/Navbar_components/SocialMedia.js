import React, { useState, useContext } from "react";
import { MdShoppingBag } from "react-icons/md";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import IconElement from "../IconElement.js";
import cookiesData from "../cookiesData.js";
import { BsDashCircle } from "react-icons/bs";
import { MainContext } from "../App.js";

const SocialMedia = ({ menuVisible }) => {
  const iconSize = 20;
  const [showCart, setShowCart] = useState(false);
  const { cart, setCart } = useContext(MainContext);

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
        <MdShoppingBag
          className="cursor-pointer"
          size={30}
          onClick={() => setShowCart(!showCart)}
        />
        {showCart && (
          <div className="absolute left-0 top-12 lg:right-16 lg:left-auto lg:top-20 bg-slate-50 w-64 border min-h-32 text-right rounded-xl shadow-md">
            <div className="flex justify-between py-4 bg-slate-500 text-white w-full px-3 rounded-xl">
              <p className="mr-4">Your products ({cart.length} items)</p>
              <button className="lg:px-4 px-3 py-1 bg-white text-black text-md uppercase rounded hover:bg-cyan-700 hover:text-white font-['roboto'] font-bold transition-all">
                checkout
              </button>
            </div>
            {cart.map((item) => {
              return (
                <div
                  className="py-2 flex justify-between mx-4 border-b"
                  key={item}
                >
                  <img
                    className="w-16"
                    src={cookiesData[item].img}
                    alt={cookiesData[item].name}
                  />
                  <h2 className="self-center">{cookiesData[item].name}</h2>
                  <h3 className="underline self-center font-light italic px-4">
                    {cookiesData[item].price}
                  </h3>
                  <BsDashCircle
                    className="self-center cursor-pointer hover:text-cyan-700"
                    onClick={() =>
                      setCart(
                        cart.filter((i) => {
                          return i !== item;
                        })
                      )
                    }
                    size={20}
                  />
                </div>
              );
            })}
            {cart.length !== 0 && (
              <div className="flex justify-between">
                <h2 className="uppercase ml-5">balance</h2>
                <h3 className="mr-5 border-b-2 border-black border-double mb-3">
                  {cart.reduce((p, c) => {
                    return p + cookiesData[c].price;
                  }, 0)}
                  $
                </h3>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialMedia;

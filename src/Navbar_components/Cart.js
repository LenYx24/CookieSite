import React, { useContext } from "react";
import cookiesData from "../cookiesData.js";
import { BsDashCircle } from "react-icons/bs";

import { MainContext } from "../App.js";
const Cart = ({ showCart, setShowCart }) => {
  const { cart, setCart } = useContext(MainContext);
  return (
    <>
      {showCart && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="flex justify-between py-4 bg-slate-500 text-white w-full px-3 rounded-xl">
              <p className="">Your products ({cart.length} items)</p>
              <button className="lg:px-4 px-3 py-1 bg-white text-black text-md uppercase rounded hover:bg-cyan-700 hover:text-white font-['roboto'] font-bold transition-all">
                checkout
              </button>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowCart(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
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
        </div>
      )}
    </>
  );
};

export default Cart;

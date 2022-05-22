import React, { useContext } from "react";
import cookiesData from "../cookiesData.js";
import { BsDashCircle } from "react-icons/bs";

import { MainContext } from "../App.js";
const Cart = ({ showCart, setShowCart }) => {
  const { cart, setCart } = useContext(MainContext);
  console.log(cart);
  return (
    <>
      {showCart && (
        <div
          onClick={(e) =>
            e.target.className.includes("_outsideOfModal") && setShowCart(false)
          }
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none _outsideOfModal"
        >
          <div className="relative my-6 mx-auto max-w-3xl w-4/5 bg-white">
            <div className="flex justify-between py-4 bg-slate-500 text-white px-3 rounded-xl">
              <p className="">Your products ({cart.length} items)</p>
              <button className="lg:px-4 px-3 py-1 bg-white text-black text-md uppercase rounded hover:bg-cyan-700 hover:text-white font-['roboto'] font-bold transition-all">
                checkout
              </button>
            </div>
            {cart.map((item) => {
              console.log(item);
              return (
                <div
                  className="py-2 flex justify-between mx-4 border-b "
                  key={item.uid}
                >
                  <img
                    className="w-16 select-none"
                    src={item.img}
                    alt={item.name}
                  />
                  <h2 className="self-center select-none">{item.name}</h2>
                  <h3 className="underline self-center font-light italic px-4">
                    {item.price}
                  </h3>
                  <BsDashCircle
                    className="self-center cursor-pointer hover:text-cyan-700"
                    onClick={() =>
                      setCart(
                        cart.filter((i) => {
                          return i.uid !== item.uid;
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
                    return p + c.price;
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

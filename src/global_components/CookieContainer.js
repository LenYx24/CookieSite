import React, { useContext } from "react";
import data from "../cookiesData.js";
import Masonry from "react-masonry-css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MainContext } from "../App.js";
import { v4 as uuid } from "uuid";

const breakpointColumnsObj = {
  default: 3,
  900: 2,
  500: 1,
};

const CookieContainer = ({ sortBy, show = 3, className = "", search = "" }) => {
  let cookies = [...data];
  if (sortBy !== null) {
    cookies.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
  }
  if (search !== null) {
    cookies = cookies.filter((item) => item.name.includes(search));
  }
  if (show !== "all") {
    cookies = cookies.slice(0, show);
  }
  const { cart, setCart } = useContext(MainContext);
  const addToCart = (item) => {
    const small_id = uuid().slice(0, 8);
    const newCart = { ...item, uid: small_id };
    setCart([...cart, newCart]);
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={`flex -ml-7 w-auto ${className}`}
      columnClassName="my-masonry-grid_column"
    >
      {cookies.length === 0 && (
        <h1 className="text-center p-6 text-xl uppercase w-full">
          No cookies found
        </h1>
      )}
      {cookies.map((item, index) => {
        return (
          <div
            className="border-2 m-2 rounded-3xl shadow-xl h-auto"
            key={index}
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.name}
                className="border rounded-3xl m-auto w-[90%] hover:opacity-90 hover:cursor-pointer"
              />
              <IoIosAddCircleOutline
                className="absolute top-2 right-8 cursor-pointer hover:text-cyan-700 hover:bg-white hover:rounded-full select-none"
                onClick={() => addToCart(item)}
                size={40}
              />
            </div>
            <div className="flex justify-between mx-7">
              <h1 className="text-xl font-semibold py-2">{item.name} cookie</h1>
              <h5 className="italic underline underline-offset-4">
                {item.price}$
              </h5>
            </div>
            <div>
              <h2 className="text-lg font-light px-2 text-center">
                Amount sold: {item.amountSold}
              </h2>
            </div>
          </div>
        );
      })}
    </Masonry>
  );
};

export default CookieContainer;

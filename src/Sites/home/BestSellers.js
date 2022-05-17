import React from "react";
import CookieContainer from "../../global_components/CookieContainer";

const BestSellers = () => {
  return (
    <div className="text-center my-12">
      <h1 className="text-4xl uppercase my-5">/ best sellers</h1>
      <p className="text-md text-slate-700 my-5 ">
        Our customers have selected these cookies and they seem to get the most
        love!
      </p>
      <CookieContainer sortBy="amountSold" />
      <a
        href="shop"
        className="uppercase border-[0.2rem] bg-white border-slate-900 px-8 py-3 mt-2 hover:bg-cyan-700 hover:text-white transition-all duration-100 cursor-pointer"
      >
        all cookies
      </a>
      <hr className="-mt-4 bg-slate-900 h-[0.2rem]" />
    </div>
  );
};

export default BestSellers;

import React, { useState } from "react";
import CookieContainer from "../../global_components/CookieContainer";

const Shop = () => {
  const [text, setText] = useState("");
  return (
    <div className="mx-5">
      <input
        className="border bg-slate-700 text-white rounded-xl mb-5 p-2 outline-none"
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <CookieContainer className="" search={text} show="all" />
    </div>
  );
};

export default Shop;

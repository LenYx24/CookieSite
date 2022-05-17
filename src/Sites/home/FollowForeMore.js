import React from "react";
import foodData from "../../foodData.js";

const FollowForeMore = () => {
  return (
    <div className="text-center mt-32 pt-6">
      <div className="absolute h-80 bg-cyan-100 w-screen lg:max-w-screen-lg xl:max-w-screen-xl -z-40"></div>
      <h1 className="text-4xl uppercase my-5 py-8">
        / follow me for more bites
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
        {foodData.map((item, key) => {
          return (
            <div className="h-80 lg:h-56" key={key}>
              <img
                className="w-full h-full m-0 p-0"
                src={item.img}
                alt={item.img}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FollowForeMore;

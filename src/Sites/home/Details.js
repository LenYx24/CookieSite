import React from "react";
import { BsGift } from "react-icons/bs";
import { FaShuttleVan } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";

const iconSize = 30;

const Details = () => {
  return (
    <div className="flex my-24 px-16 m-auto flex-col md:flex-row">
      <Box
        icon={<BsHandbag size={iconSize} />}
        name="new pick up service"
        desc="get it fresh"
        bord="md:border-r-2"
      />
      <Box
        icon={<FaShuttleVan size={iconSize} />}
        name="free delivery"
        desc="Delivered to your door step"
        bord="md:border-r-2"
      />
      <Box
        icon={<BsGift size={iconSize} />}
        name="special gift wraps"
        desc="send a sweet surprise"
      />
    </div>
  );
};

const Box = ({ icon, name, desc, bord }) => {
  return (
    <div
      className={`w-1/3 flex flex-col text-center m-auto ${bord} border-slate-900`}
    >
      <div className="self-center pt-6 pb-2">{icon}</div>
      <h2 className="text-lg uppercase text-slate-800">{name}</h2>
      <h5 className="pb-6 text-sm">{desc}</h5>
    </div>
  );
};

export default Details;

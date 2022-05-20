import React from "react";
import IconElement from "./IconElement.js";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const iconSize = 25;

const Footer = () => {
  return (
    <footer className="bg-pink-200 px-16 pt-20 pb-6">
      <div className="flex lg:flex-row flex-col text-center lg:text-left justify-between">
        <ColumnWithLinks
          head="shop"
          data={[
            "About",
            "FAQ",
            "Shipping / Pick Up",
            "Store Policy",
            "Contact Me",
          ]}
          href={["aboutme", "#", "#", "#", "contact"]}
        />
        <Column
          head="opening hours"
          data={[
            "Mon: Fri 7am - 11pm",
            "Saturday: 8am - 8pm",
            "Sunday: 10am - 7pm",
          ]}
        />
        <Column
          head="address"
          data={["800 Merry Benglish Street", "San Fransisco, CA 94158"]}
        />
        <Column
          head="get it fast"
          data={[
            "email address: example@gmail.com",
            <button className="uppercase border bg-pink-300 mt-2 px-16 py-2 hover:bg-pink-400">
              subscribe now
            </button>,
          ]}
        />
      </div>
      <div className="flex justify-between my-6">
        <p>@ 2022 by Leny's confectionery</p>
        <div className="flex">
          <IconElement
            name="facebook"
            icon={<AiFillFacebook size={iconSize} />}
          />
          <IconElement
            name="instagram"
            icon={<AiFillInstagram size={iconSize} />}
          />
          <IconElement
            name="youtube"
            icon={<AiFillYoutube size={iconSize} />}
          />
        </div>
      </div>
    </footer>
  );
};

const Column = ({ head, data }) => {
  return (
    <div>
      <h2 className="uppercase text-slate-800 pb-4 pt-6 lg:pt-0">{head}</h2>
      {data.map((item, key) => {
        return (
          <p key={key} className="font-semibold text-sm font-mono">
            {item}
          </p>
        );
      })}
    </div>
  );
};
const ColumnWithLinks = ({ head, data, href }) => {
  return (
    <div className="flex flex-col">
      <h2 className="uppercase text-slate-800 pb-4 pt-6 lg:pt-0">{head}</h2>
      {data.map((item, key) => {
        return (
          <a
            href={href[key]}
            key={key}
            className="font-semibold text-sm font-mono hover:text-cyan-700 hover:underline"
          >
            {item}
          </a>
        );
      })}
    </div>
  );
};
export default Footer;

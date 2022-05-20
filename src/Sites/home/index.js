import React from "react";
import Hero from "./Hero.js";
import BestSellers from "./BestSellers.js";
import FollowForeMore from "./FollowForeMore.js";
import Details from "./Details.js";
import SiteWrapper from "../../global_components/SiteWrapper.js";

const Home = () => {
  return (
    <SiteWrapper>
      <Hero />
      <BestSellers />
      <FollowForeMore />
      <Details />
    </SiteWrapper>
  );
};

export default Home;

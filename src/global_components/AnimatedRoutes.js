import React from "react";
import Home from "../Sites/home";
import Shop from "../Sites/shop";
import Aboutme from "../Sites/aboutme";
import Contact from "../Sites/contact";
import NoPage from "../Error/NoSite.js";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import SiteWrapper from "./SiteWrapper";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SiteWrapper children={<Home />} />} />
        <Route path="/shop" element={<SiteWrapper children={<Shop />} />} />
        <Route
          path="/aboutme"
          element={<SiteWrapper children={<Aboutme />} />}
        />
        <Route
          path="/contact"
          element={<SiteWrapper children={<Contact />} />}
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

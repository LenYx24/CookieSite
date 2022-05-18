import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

import Home from "./Sites/home";
import Shop from "./Sites/shop";
import Aboutme from "./Sites/aboutme";
import Contact from "./Sites/contact";
import NoPage from "./Error/NoSite.js";

export const MainContext = React.createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <MainContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <div className="w-full lg:container m-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;

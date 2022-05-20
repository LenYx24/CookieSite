import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedRoutes from "./global_components/AnimatedRoutes.js";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = css`
  margin: auto;
`;
const Main = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, width: 0 }}
          key="modal"
        >
          <div className="mx-auto flex w-screen h-screen loadingAnim">
            <ScaleLoader css={override} color={"#E0FFFF"} size={150} />
          </div>
        </motion.div>
      ) : (
        <div className="w-full lg:container m-auto">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
};

export default Main;

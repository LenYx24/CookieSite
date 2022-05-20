import React from "react";
import { motion } from "framer-motion";
const SiteWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, width: "50%" }}
      animate={{ opacity: 1, width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default SiteWrapper;

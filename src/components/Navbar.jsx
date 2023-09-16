import React from "react";
// import { MotionTransform } from "framer-motion";
// import { navVariants } from "../utils/motion.js";
import { FiSearch, FiMenu } from "react-icons/fi";
import styles from "../index.js";
const Navbar = () => {
  return (
    <div className={`${styles.xPaddings} py-8 relative`}>
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8 `}
      >
        <button type="button" className="w-6 h-6 text-white">
          <FiSearch />
        </button>
        <h2 className="font-extrabold text-2xl leading-7 text-white">
          METAVERSUS
        </h2>
        <button type="button" onClick={() => {}} className="w-6 h-6 text-white">
          <FiMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

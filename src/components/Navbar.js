import React, { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import LogoSm3 from "../Images/LogoSm3.png";
function Navbar() {
  const [MenuOpen, setMenuOpen] = useState(false);
  const FullMenu = (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      id="FullMenu"
      className="z-40 fixed text-white top-7 left-28 space-x-10 md:w-auto h-auto  flex justify-start content-center items-start pl-10 text-2xl "
    >
      <h1
        id="hover-underline-animation"
        className="opacity-60 hover:opacity-100 transition-all duration-200 cursor-pointer "
      >
        Home
      </h1>
      <h1
        id="hover-underline-animation"
        className="opacity-60 hover:opacity-100 transition-all duration-200 cursor-pointer "
      >
        About
      </h1>
      <h1
        id="hover-underline-animation"
        className="opacity-60 hover:opacity-100 transition-all duration-200 cursor-pointer "
      >
        The 54
      </h1>
    </motion.div>
  );
  return (
    <div
      id="menu"
      className="z-50 fixed px-4 flex items-center md:items-start w-[100vw] h-16 justify-between md:justify-center"
    >
      <Link to={"/"}>
        <div className="text-white  px-4 pb-2 rounded-br-md rounded-bl-md grid content-center justify-items-center text-3xl">
          <img src={LogoSm3} className="h-8 mt-2 z-10" alt="" />
        </div>
      </Link>
      <button
        onClick={() => setMenuOpen(!MenuOpen)}
        className="z-50 md:fixed top-3 left-10 "
      >
        <Hamburger color="#fff" size={26} duration={1.2} />
      </button>
      <AnimatePresence>{MenuOpen && FullMenu}</AnimatePresence>
      <div className="fixed cursor-pointer bottom-5 border-[1px] border-white md:right-10 right-2 h-12 transition-all duration-1000 gap-y-2 w-12 rounded-full  flex items-center justify-center">
        <SiWhatsapp fill="#fff" size={18}></SiWhatsapp>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import LogoSm3 from "../Images/LogoSm3New.png";
import { BiShareAlt } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import { useStore } from "../store/popupstore";
function Navbar() {
  const [MenuOpen, setMenuOpen] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const navigate = useNavigate();
  // const setIsShown = useStore((state) => state.setIsShown);
  // function setShow() {
  //   console.log("clicking");
  //   setIsShown(true);
  // }
  const FullMenu = (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      id="FullMenu"
      className="z-40 fixed text-white top-6 left-20 md:left-28 space-x-5 md:space-x-10 md:w-auto h-auto  flex justify-start content-center items-start pl-10 md:text-xl "
    >
      <HashLink
        to={"/#SecondPage"}
        id="hover-underline-animation"
        className="opacity-60 hover:opacity-100 transition-all duration-200 cursor-pointer "
      >
        About Us
      </HashLink>
      <HashLink
        to={"/42f"}
        id="hover-underline-animation"
        className="opacity-60 hover:opacity-100 transition-all duration-200 cursor-pointer "
      >
        42F
      </HashLink>
      <HashLink
        to={"/54s"}
        id="hover-underline-animation"
        className="opacity-60 hover:opacity-100 transition-all duration-200 cursor-pointer "
      >
        54s
      </HashLink>
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
      <div
        onMouseEnter={() => !showShare && setShowShare(true)}
        onMouseLeave={() => setShowShare(false)}
        className="fixed z-50 cursor-pointer bottom-5 border-[1px] border-white md:right-10 right-2 h-11 transition-all duration-1000 gap-y-2 w-11 rounded-full  flex items-center justify-center"
      >
        <BiShareAlt fill="#fff" size={18}></BiShareAlt>
      </div>
      <AnimatePresence>
        {showShare && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5, ease: "easeOut", delay: 5 },
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            id="ShareMenu"
            className="z-40 fixed text-white md:bottom-7 bottom-6 right-20 md:right-32 space-x-10 md:w-auto h-auto  flex justify-start content-center items-start pl-10 text-2xl "
          >
            <a
              href="https://wa.me/5493424738694"
              rel="noreferrer"
              target="_blank"
            >
              <button id="hover-underline-animation">
                {" "}
                <SiWhatsapp fill="#fff" size={18}></SiWhatsapp>
              </button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:info@smcatamarans.com"
            >
              <button
                onClick={() => navigate("")}
                id="hover-underline-animation"
              >
                {" "}
                <MdEmail fill="#fff" size={18}></MdEmail>
              </button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <button
        onClick={reloadPage}
        className="z-50 flex items-center gap-x-3 fixed md:top-3 top-14 left-5 md:left-auto md:right-10  text-white bg-red-900 rounded-full px-5 py-1 text-sm "
      >
        <div className="relative">
          <div class="circle"></div>
        </div>
        Live
      </button> */}
    </div>
  );
}

export default Navbar;

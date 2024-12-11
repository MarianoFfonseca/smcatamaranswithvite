import React from "react";
import { motion } from "framer-motion";
import { linksVideos } from "../../Images/LinksCloudinary";
const Home = ({ theRef }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      id="YachtsPage"
      className="TheContainer"
    >
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        className="absolute brightness-[0.6] top-0 left-0 w-full h-full -z-10 object-cover object-center"
        src={linksVideos["fiftyFourM"]}
        controls={false}
        loop
        muted
        autoPlay={true}
        playsInline
      />
      {/* <img
        className="absolute brightness-[0.6] blur-sm bg-blue-200 top-0 left-0 w-full h-full -z-20 object-cover object-center"
        src="/preload.jpg"
        alt=""
      /> */}
      {/* <img className='h-full z-0' src={Image1} alt="" /> */}
      <div className="pb-5 md:pb-64  text-left text-white grid items-center md:content-center content-start pt-24  w-full h-full px-3">
        <h1
          ref={theRef}
          className=" text-9xl md:text-[200px]  block md:ml-11  md:font-extralight"
        >
          54m
        </h1>
        <h1 className="text-lg mt-2 md:text-2xl pl-12 md:pl-24 md:mt-8 md:ml-11 md:font-extralight">
          This its something new
        </h1>
      </div>
    </motion.div>
  );
};
export default Home;

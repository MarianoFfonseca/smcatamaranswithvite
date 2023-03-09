import React, { useRef } from "react";
import Navbar from "./Navbar";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Video54 from "../Images/Video54.mp4";
import VideoHd from "../Images/VideoHd.mov";
import Render1 from "../Images/Render1.jpg";
import Render2 from "../Images/Render2.jpg";
import Render3 from "../Images/Render3.jpg";
import Render4 from "../Images/Render4.jpg";
import HalfCata from "../Images/HalfCata.jpg";
import BackgroundDetails2 from "../Images/BackgroundDetails2.png";
import details from "./Details.json";
import ShadowEffect from "../Utils/ShadowEffect";
const HomePage = ({ theRef }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      id="YachtsPage"
      className="TheContainer"
    >
      {/* <img className='h-full z-0' src={Image1} alt="" /> */}
      <div className="pb-5 md:pb-64  text-left text-white grid items-center md:content-center content-start pt-24  w-full h-full px-3">
        <h1
          ref={theRef}
          className=" text-9xl md:text-[200px]  block md:ml-11  md:font-extralight"
        >
          54
        </h1>
        <h1 className="text-lg mt-2 md:text-3 xl pl-12 md:pl-24 md:mt-8 md:ml-11 md:font-extralight">
          La perfeccion de la simpleza
        </h1>
      </div>
      <video
        className="absolute brightness-[0.6] top-0 left-0 w-full h-full -z-10 object-cover object-center"
        src={VideoHd}
        controls={false}
        playsinline
        loop
        muted
        autoPlay={true}
      />
    </motion.div>
  );
};
const RenderPage = ({ theRef }) => {
  return (
    <div className="TheContainer bg-black relative ">
      <div className="absolute w-2 h-2 right-0 bottom-44 " ref={theRef}></div>
      <div className="grid h-1/2 md:grid-flow-col grid-flow-row md:grid-cols-2 overflow-hidden">
        <ShadowEffect text="Simplicity" span={1} Render={Render1} />
        <ShadowEffect text="Modern" span={2} Render={Render2} />
      </div>
      <div className="grid w-full h-1/2 md:grid-flow-col grid-flow-row md:grid-cols-2 overflow-hidden">
        <ShadowEffect text="Simplicity" span={1} Render={Render3} />
        <ShadowEffect text="Modern" span={2} Render={Render4} />
      </div>
    </div>
  );
};

const DetailsPage = ({ theRef, inView3 }) => {
  let animationDelay = 0;
  function addDelay() {
    animationDelay += 0.2;
    return animationDelay;
  }
  return (
    <div className="TheContainer NoScroll bg-black relative overflow-y-scroll overflow-x-hidden">
      <div className="w-full absolute z-50 h-full content-center grid justify-items-left md:ml-24 text-white">
        <div
          ref={theRef}
          className=" text-sm md:text-xl  grid px-10 gap-y-6 md:flex gap-x-12 text-left"
        >
          {details.map((detail) => (
            <div
              style={{
                transform: inView3 ? "none" : "translateY(50px)",
                opacity: inView3 ? "1" : "0",
                transition: "all 2s",
                transitionDelay: `${addDelay()}s`,
                transitionProperty: "transform, opacity",
              }}
              key={detail.title}
            >
              <h1 className="text-center text-xl md:text-2xl mb-2 flex items-center gap-x-2">
                {detail.title}
              </h1>
              <div className="h-0.5 w-5/6 md:w-full md:mb-6 bg-white"></div>
              <div className="gap-y-1 md:gap-y-2  grid text-left">
                {detail.data.map((thedetail) => (
                  <div className="detail">
                    <div className="h-[0.5px] bg-white opacity-20 w-2/3 line"></div>
                    <p key={thedetail.name} className="mt-1 md:mt-2">
                      {thedetail.name} : {thedetail.detail}{" "}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={BackgroundDetails2}
        style={{ backgroundAttachment: "fixed" }}
        className="absolute right-0 bottom-0 w-full md:rotate-0 md:bottom-24 md:w-4/5 md:h-4/5 max-w-screen z-0 brightness-[0.4]"
        alt=""
      />
    </div>
  );
};
const IntroPage = ({ theRef, inView4 }) => {
  return (
    <div className="TheContainer bg-black relative overflow-hidden">
      <div className="w-full absolute z-50 h-full content-top pt-32 md:pt-0 md:content-center grid justify-items-end md:pr-44 text-white">
        <div className="md:text-xl px-10 flex gap-x-24 text-left">
          <p
            ref={theRef}
            style={{
              transform: inView4 ? "none" : "translateY(50px)",
              opacity: inView4 ? "1" : "0",
              transition: "all 2.5s",
            }}
            className=" md:max-w-2xl md:text-right text-left text-md"
          >
            Este barco es el diseño más complejo, sofisticado y desafiante que
            nos a tocado llevar adelante. Fue complejo, desafiante y sofisticado
            para nosotros porque los que buscamos desde el primer momento fue
            lograr un barco simple, cómodo, rápido y hermoso para el usuario.
            Creemos que lo hemos logrado.
          </p>
        </div>
      </div>
      <img
        src={HalfCata}
        className="absolute left-0 bottom-0 max-w-screen z-0 "
        alt=""
      />
    </div>
  );
};
function Section({ inView, inView2, inView3, inView4, inView5 }) {
  return (
    <div className="fixed text-white z-50 right-2 md:right-14 h-full grid items-center content-center gap-y-2">
      <div className="flex items-center text-xs justify-end gap-x-2">
        <p className={inView ? "" : "no-underline opacity-40"}>54</p>
        <div
          className={`border-[1px] rounded-full ${
            inView ? "bg-white" : "bg-transparent"
          } w-2 h-2 md:w-2 md:h-2`}
        ></div>
      </div>
      <div className="flex items-center text-xs justify-end gap-x-2">
        <p className={inView4 ? "" : "no-underline opacity-40"}>Intro</p>
        <div
          className={`border-[1px] rounded-full ${
            inView4 ? "bg-white" : "bg-transparent"
          } w-2 h-2 md:w-2 md:h-2`}
        ></div>
      </div>
      <div className="flex items-center text-xs justify-end gap-x-2">
        <p className={inView2 ? "" : "no-underline opacity-40"}>Renders</p>
        <div
          className={`border-[1px] rounded-full ${
            inView2 ? "bg-white" : "bg-transparent"
          } w-2 h-2 md:w-2 md:h-2`}
        ></div>
      </div>
      <div className="flex items-center text-xs justify-end gap-x-2">
        <p className={inView3 ? "" : "no-underline opacity-40"}>
          Especificaciones
        </p>
        <div
          className={`border-[1px] rounded-full ${
            inView3 ? "bg-white" : "bg-transparent"
          } w-2 h-2 md:w-2 md:h-2`}
        ></div>
      </div>
    </div>
  );
}

function Yachts() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const ref2 = useRef(null);
  const inView2 = useInView(ref2);
  const ref3 = useRef(null);
  const inView3 = useInView(ref3);
  const ref4 = useRef(null);
  const inView4 = useInView(ref4);
  const ref5 = useRef(null);
  const inView5 = useInView(ref5);
  return (
    <div className="Home">
      <Section
        inView={inView}
        inView2={inView2}
        inView3={inView3}
        inView4={inView4}
        inView5={inView5}
      />
      <Navbar></Navbar>
      <HomePage theRef={ref}></HomePage>
      <IntroPage theRef={ref4} inView4={inView4}></IntroPage>
      <RenderPage theRef={ref2}></RenderPage>
      <DetailsPage theRef={ref3} inView3={inView3}></DetailsPage>
      {/* <MotorPage theRef={ref5} inView5={inView5}></MotorPage> */}
    </div>
  );
}

export default Yachts;

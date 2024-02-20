import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import details from "../components/JSON/Details.json";
import SecondDetails from "../components/JSON/SecondDetails.json";
import ShadowEffect from "../Utils/ShadowEffect";
import { linksVideos, linksImages } from "../Images/LinksCloudinary";
const HomePage = ({ theRef }) => {
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
        src={linksVideos["catamaranPage"]}
        controls={false}
        loop
        muted
        autoPlay={true}
        playsInline
      />
      <img
        className="absolute brightness-[0.6] blur-sm bg-blue-200 top-0 left-0 w-full h-full -z-20 object-cover object-center"
        src="/preload.jpg"
        alt=""
      />
      {/* <img className='h-full z-0' src={Image1} alt="" /> */}
      <div className="pb-5 md:pb-64  text-left text-white grid items-center md:content-center content-start pt-24  w-full h-full px-3">
        <h1
          ref={theRef}
          className=" text-9xl md:text-[200px]  block md:ml-11  md:font-extralight"
        >
          54s
        </h1>
        <h1 className="text-lg mt-2 md:text-2xl pl-12 md:pl-24 md:mt-8 md:ml-11 md:font-extralight">
          The perfection of simplicity
        </h1>
      </div>
    </motion.div>
  );
};
const RenderPage = ({ theRef }) => {
  return (
    <div className="TheContainer bg-black relative ">
      <div className="absolute w-2 h-2 right-0 bottom-44 " ref={theRef}></div>
      <div className="grid h-1/2 md:grid-flow-col grid-flow-row md:grid-cols-2 overflow-hidden">
        <ShadowEffect
          text="Simplicity"
          span={1}
          Render={linksImages["render1"]}
        />
        <ShadowEffect text="Modern" span={2} Render={linksImages["render2"]} />
      </div>
      <div className="grid w-full h-1/2 md:grid-flow-col grid-flow-row md:grid-cols-2 overflow-hidden">
        <ShadowEffect text="Fast" span={1} Render={linksImages["render3"]} />
        <ShadowEffect
          text="Beautiful"
          span={2}
          Render={linksImages["render4"]}
        />
      </div>
    </div>
  );
};
const GeneralDataPage = ({ theRef, inView5 }) => {
  return (
    <div className="TheContainer overflow-y-auto NoScroll bg-black relative  overflow-x-hidden">
      <div
        id="hiddeScrollBar"
        className="w-full overflow-x-hidden absolute z-30 h-full text-white"
      >
        <div className="h-screen py-24 overflow-x-hidden content-center grid justify-items-start ml-10 md:ml-0 md:justify-items-end md:mr-44">
          <div
            style={{
              transform: inView5 ? "none" : "translateY(50px)",
              opacity: inView5 ? "1" : "0",
              transition: "all 2.5s",
            }}
            className="grid md:flex"
            ref={theRef}
          >
            {SecondDetails.map((specification, index) => (
              <div
                key={index}
                className={`grid ${
                  specification.borderRigth
                    ? "md:border-r-[0.05px]"
                    : "border-none"
                }`}
              >
                {specification.Data.map((data, index) => (
                  <div
                    key={index}
                    className={`text-left md:text-center
                    border-b-slate-800
                    border-b-[0.1px]
                    md:border-b-0
                    py-4
                    ${
                      data.borderTop ? "md:border-t-[0.1px]" : "md:border-none"
                    } md:py-16 md:px-16`}
                  >
                    <h1 className="md:text-2xl">{data.description}</h1>
                    <p className="text-sm md:text-md ">{data.title}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        src={linksImages["general"]}
        style={{ backgroundAttachment: "fixed" }}
        className="absolute left-0 bottom-0 w-auto md:rotate-0 max-w-screen brightness-[0.4]"
        alt=""
      />
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
    <div className="TheContainer overflow-y-auto NoScroll bg-black relative  overflow-x-hidden">
      <div
        id="hiddeScrollBar"
        className="w-full overflow-x-hidden absolute z-30 h-full text-white"
      >
        <div className="h-screen py-24 overflow-x-hidden content-center grid justify-items-left md:ml-24">
          <div
            ref={theRef}
            className="text-sm md:text-xl  grid px-10 gap-y-6 md:flex gap-x-12 text-left"
          >
            {details.map((detail, index) => (
              <div
                style={{
                  transform: inView3 ? "none" : "translateY(50px)",
                  opacity: inView3 ? "1" : "0",
                  transition: "all 2s",
                  transitionDelay: `${addDelay()}s`,
                  transitionProperty: "transform, opacity",
                }}
                key={index}
              >
                <h1 className="text-center text-xl md:text-2xl mb-2 flex items-center gap-x-2">
                  {detail.title}
                </h1>
                <div className="h-0.5 w-5/6 md:w-full md:mb-6 bg-white"></div>
                <div className="gap-y-1 md:gap-y-2  grid text-left">
                  {detail.data.map((thedetail) => (
                    <div key={thedetail.name} className="detail">
                      <div className="h-[0.5px] bg-white opacity-20 w-2/3 line"></div>
                      <p className="mt-1 md:mt-2">
                        {thedetail.name} : {thedetail.detail}{" "}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        src={linksImages["bgDetails"]}
        style={{ backgroundAttachment: "fixed" }}
        className="absolute right-0 bottom-0 w-full md:rotate-0 md:bottom-24 md:w-4/5 md:h-4/5 max-w-screen "
        alt=""
      />
    </div>
  );
};
const IntroPage = ({ theRef, inView4 }) => {
  return (
    <div className="TheContainer bg-black relative overflow-hidden">
      <div className="w-full absolute z-30 h-full items-start content-top pt-32 md:pt-0 md:content-center grid justify-items-end md:pr-44 text-white">
        <div className="md:text-xl grid px-10 justify-items-start md:justify-items-end items-start gap-x-24 text-left">
          <p
            ref={theRef}
            style={{
              transform: inView4 ? "none" : "translateY(50px)",
              opacity: inView4 ? "1" : "0",
              transition: "all 2.5s",
            }}
            className=" md:max-w-2xl md:text-right text-md"
          >
            "This magnificent vessel stands as the pinnacle of our design
            portfolio, requiring unparalleled levels of intricacy, finesse and
            ingenuity. Its intricacy and complexity proved to be an immense
            challenge, for our aim from the outset was to create a vessel that
            embodied simplicity, comfort, speed, and aesthetic splendor for the
            discerning seafarer.
            <p></p>
            We are proud to proclaim that our endeavors have borne fruit, and
            that we have succeeded in crafting a masterpiece that satisfies all
            of these criteria"
          </p>
          <p
            style={{
              transform: inView4 ? "none" : "translateY(50px)",
              opacity: inView4 ? "1" : "0",
              transition: "all 2.5s",
            }}
            className="mt-5 text-left text-xs md:text-base
          "
          >
            Minuet Calabrese Naval Architecture
          </p>
        </div>
      </div>
      <img
        src={linksImages["halfCatamaran"]}
        className="absolute left-0 bottom-0 max-w-screen z-0 "
        alt=""
      />
    </div>
  );
};
function Section({ inView, inView2, inView3, inView4, inView5 }) {
  return (
    <div className="fixed text-white z-40 right-2 md:right-14 h-full grid items-center content-center gap-y-2">
      <div className="flex items-center text-xs justify-end gap-x-2">
        <p className={inView ? "" : "no-underline opacity-40"}>54s</p>
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
        <p className={inView2 ? "" : "no-underline opacity-40"}>Outside</p>
        <div
          className={`border-[1px] rounded-full ${
            inView2 ? "bg-white" : "bg-transparent"
          } w-2 h-2 md:w-2 md:h-2`}
        ></div>
      </div>
      <div className="flex items-center text-xs justify-end gap-x-2">
        <p className={inView5 ? "" : "no-underline opacity-40"}>General</p>
        <div
          className={`border-[1px] rounded-full ${
            inView5 ? "bg-white" : "bg-transparent"
          } w-2 h-2 md:w-2 md:h-2`}
        ></div>
      </div>
      <div className="flex items-center text-xs justify-end gap-x-2">
        <p className={inView3 ? "" : "no-underline opacity-40"}>
          Specifications
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
    <div className="Home" id="hiddeScroll">
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
      <GeneralDataPage theRef={ref5} inView5={inView5} />
      <DetailsPage theRef={ref3} inView3={inView3}></DetailsPage>
      {/* <MotorPage theRef={ref5} inView5={inView5}></MotorPage> */}
    </div>
  );
}

export default Yachts;

import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { useInView } from "framer-motion";
import IntroPage from "./FiftyFourM/IntroPage";
import RenderPage from "./FiftyFourM/RenderPage";
import GeneralData from "./FiftyFourM/GeneralData";
import Home from "./FiftyFourM/Home";
import Details from "./FiftyFourM/Details";
function Section({ inView, inView2, inView3, inView4, inView5 }) {
  return (
    <div className="fixed text-white z-40 right-2 md:right-14 h-full grid items-center content-center gap-y-2">
      <div className="flex items-center text-xs justify-end gap-x-2">
        <p className={inView ? "" : "no-underline opacity-40"}>54m</p>
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

function FiftyFour_M() {
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
      <Home theRef={ref}></Home>
      <IntroPage theRef={ref4} inView4={inView4}></IntroPage>
      <RenderPage theRef={ref2}></RenderPage>
      <GeneralData theRef={ref5} inView5={inView5} />
      <Details theRef={ref3} inView3={inView3}></Details>
    </div>
  );
}

export default FiftyFour_M;

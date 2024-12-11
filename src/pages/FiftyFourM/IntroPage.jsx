import React from "react";
import { FiftyFourM_linkImages } from "../../Images/LinksCloudinary";

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
            Introducing the 54m Catamaran, the pinnacle of performance cruising
            and unparalleled comfort. This exceptional vessel stands out in the
            marine world with its unique tri-command system, featuring dual
            external controls on each side and a central command within the
            cabin. This innovative setup provides the captain with supreme
            control and precision, ensuring a seamless sailing experience.
          </p>
          {/* <p
            style={{
              transform: inView4 ? "none" : "translateY(50px)",
              opacity: inView4 ? "1" : "0",
              transition: "all 2.5s",
            }}
            className="mt-5 text-left text-xs md:text-base
            "
          >
            Minuet Calabrese Naval Architecture
          </p> */}
        </div>
      </div>
      <img
        src={FiftyFourM_linkImages["halfCatamaran"]}
        className="absolute left-0 bottom-0  z-0 "
        alt=""
      />
    </div>
  );
};
export default IntroPage;

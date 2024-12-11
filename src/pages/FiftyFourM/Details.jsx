import React from "react";
import details from "../../components/JSON/FiftyFourM_Details.json";
import { FiftyFourM_linkImages } from "../../Images/LinksCloudinary";

const Details = ({ theRef, inView3 }) => {
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
        src={FiftyFourM_linkImages["bgDetails"]}
        style={{ backgroundAttachment: "fixed" }}
        className="absolute right-0 bottom-0 w-full md:rotate-0 md:bottom-24 md:w-4/5 md:h-4/5 max-w-screen "
        alt=""
      />
    </div>
  );
};
export default Details;

import { FiftyFourM_linkImages } from "../../Images/LinksCloudinary";
import React from "react";
import generalDetails from "../../components/JSON/FiftyFourM_General.json";

const GeneralData = ({ theRef, inView5 }) => {
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
            {generalDetails.map((specification, index) => (
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
                        data.borderTop
                          ? "md:border-t-[0.1px]"
                          : "md:border-none"
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
        src={FiftyFourM_linkImages["general"]}
        style={{ backgroundAttachment: "fixed" }}
        className="absolute left-0 bottom-0 w-auto md:rotate-0 max-w-screen brightness-[0.4]"
        alt=""
      />
    </div>
  );
};
export default GeneralData;

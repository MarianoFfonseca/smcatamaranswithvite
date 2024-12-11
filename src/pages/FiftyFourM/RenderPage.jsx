import React from "react";
import { FiftyFourM_linkImages } from "../../Images/LinksCloudinary";
import ShadowEffect from "../../Utils/ShadowEffect";

const RenderPage = ({ theRef }) => {
  return (
    <div className="TheContainer bg-black relative ">
      <div className="absolute w-2 h-2 right-0 bottom-44 " ref={theRef}></div>
      <div className="grid h-1/2 md:grid-flow-col grid-flow-row md:grid-cols-2 overflow-hidden">
        <ShadowEffect
          text="Simplicity"
          span={1}
          Render={FiftyFourM_linkImages["render1"]}
        />
        <ShadowEffect
          text="Modern"
          span={2}
          Render={FiftyFourM_linkImages["render2"]}
        />
      </div>
      <div className="grid w-full h-1/2 md:grid-flow-col grid-flow-row md:grid-cols-2 overflow-hidden">
        <ShadowEffect
          text="Fast"
          span={1}
          Render={FiftyFourM_linkImages["render3"]}
        />
        <ShadowEffect
          text="Beautiful"
          span={2}
          Render={FiftyFourM_linkImages["render4"]}
        />
      </div>
    </div>
  );
};

export default RenderPage;

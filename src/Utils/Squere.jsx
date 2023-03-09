import React from "react";

function Squere() {
  return (
    <div className="grid h-24 w-24 ">
      <div className="grid grid-flow-col grid-cols-2 text-2xl text-white ">
        <div className="border-r-[0.5px] p-0 ">54 </div>
        <div></div>
      </div>
      <div className="grid grid-flow-col grid-cols-2 border-t-[0.5px]">
        {" "}
        <div className="border-r-[0.5px]"> </div>
        <div> </div>
      </div>
    </div>
  );
}
export default Squere;

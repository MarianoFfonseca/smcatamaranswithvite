import React from "react";

function ShadowEffect({ text, span, Render }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`col-span-${span} overflow-hidden relative`}
    >
      <img
        className={`${
          hover && "scale-125"
        } max-h-full transition-all duration-[2200ms] w-full h-full`}
        src={Render}
        alt=""
      />

      <div
        style={{ backgroundColor: "" }}
        className="z-10 textShadow text-white absolute bottom-0 flex items-end left-0 h-32   pb-2 pl-5 w-full "
      >
        {" "}
        <p
          style={{ letterSpacing: hover ? "20px" : "3px" }}
          className=" transition-all duration-[2200ms]"
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default ShadowEffect;

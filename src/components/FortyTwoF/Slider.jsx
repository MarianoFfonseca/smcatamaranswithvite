import React, { useEffect, useState } from "react";

function Slider() {
  const images = [
    "/FortyTwo/Inside/Inside1.webp",
    "/FortyTwo/Inside/Inside2.webp",
    "/FortyTwo/Inside/Inside3.webp",
    "/FortyTwo/Inside/Inside4.webp",
    "/FortyTwo/Inside/Inside5.webp",
    "/FortyTwo/Inside/Inside6.webp",
    "/FortyTwo/Inside/Inside7.webp",
    "/FortyTwo/Inside/Inside8.webp",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [lastSlide, setLastSlide] = useState(0);

  const nextSlide = () => {
    setLastSlide(currentSlide);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setLastSlide(currentSlide);
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    // Trigger fade-in animation when the slide changes
    // Remove the fade-in class after the animation duration (adjust as needed)
    document.getElementById("animationFadeIn").classList.remove("fade-in");
    const timeoutId = setTimeout(() => {
      document.getElementById("animationFadeIn").classList.add("fade-in");
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [currentSlide]);

  return (
    <div id="hiddeScroll">
      <div className="flex items-center max-h-screen overflow-hidden relative w-full">
        <div className="absolute top-0 bottom-0 grid content-center"></div>

        <div
          className={`relative overflow-x-scroll box-content w-full  flex duration-300`}
        >
          <img
            className="-z-0 absolute top-0 left-0 bottom-0 right-0 w-fullo object-cover"
            src={images[lastSlide]}
            alt={`Slide ${lastSlide + 1}`}
          />
          <img
            id="animationFadeIn"
            className="w-full z-10 object-cover"
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
          />

          {/* <div className="absolute -left-32 top-0 bottom-0 h-full opacity-60 -z-10 grid items-center ">
            <img
              src={images[imageShowBefore]}
              className="h-[400px] rounded-lg"
              alt=""
            />
          </div> */}
        </div>
        <div className="absolute right-0 left-0 bottom-6  z-20 flex items-center justify-center">
          <div className="p-2 bg-black flex text-white items-center shadow-2xl shadow-black content-center rounded-full gap-x-6">
            <button
              className=" text-sm p-2 block font-bold   rounded-full  text-white"
              onClick={prevSlide}
            >
              {" "}
              &lt;
            </button>
            <p>
              {currentSlide + 1} / {images.length}
            </p>
            <button
              className=" text-sm block p-2 font-bold   rounded-full  text-white"
              onClick={nextSlide}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

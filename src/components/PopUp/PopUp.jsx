import React, { useRef } from "react";
import { linksVideos } from "../../Images/LinksCloudinary";
import { useStore } from "../../store/popupstore";
// import { useEffect, useRef } from "react";
// import PopUpForm from "./PopUpForm";
// import Translator from "../../Utils/Translator";
function PopUp() {
  const isShown = useStore((state) => state.isShown);
  console.log(isShown);
  const setIsShown = useStore((state) => state.setIsShown);
  // const cloudinaryRef = useRef();
  // const videoRef = useRef();

  // useEffect(() => {
  //   if (cloudinaryRef.current) return;
  //   cloudinaryRef.current = window.cloudinary;
  //   cloudinaryRef.current.videoPlayer(videoRef.current, {
  //     cloud_name: "dxvqofz1l",
  //   });
  // }, []);
  // // const [showPopInfo, setShowPopInfo] = useState(false);
  // // const [showForm, setShowForm] = useState(false);
  // // const [leng, setLeng] = useState("es");
  // // const [showGermanVideo, setShowGermanVideo] = useState(true);
  // // const handleTextTranslation = (text) => {
  // //   return Translator(text, leng);
  // // };
  // const vidRef = useRef(null);
  // const videoClick = () => {
  //   vidRef.current.play();
  //   vidRef.current.pause();
  // };
  const handleShowGermanVideo = () => {
    // setShowPopInfo(!showPopInfo);
    // setShowGermanVideo(!showGermanVideo);
    setIsShown(false);
  };

  if (isShown)
    return (
      <div className="fixed grid overflow-hidden top-0 left-0 right-0 bottom-0 md:overflow-hidden bg-[rgba(0,0,0,0.9)] z-50 justify-items-center items-center">
        <div className="relative w-4/5 md:w-auto grid md:block justify-end">
          <div className="flex w-full justify-end mb-2">
            <p
              onClick={() => setIsShown(false)}
              className="text-white opacity-50 text-right justify-end cursor-pointer "
            >
              Close
            </p>
          </div>
          <iframe
            className="md:w-[920px] md:h-[518px] border-2 border-white/40"
            src="https://www.youtube.com/embed/9LyDBO4_zC0"
            title="GERMAN FRERS - Descubrimos un nuevo diseño"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      //  <div className="fixed grid overflow-hidden top-0 left-0 right-0 bottom-0 md:overflow-hidden bg-[rgba(0,0,0,0.9)] z-50 justify-items-center items-center">
      //     <div className="relative w-4/5 md:w-3/5 grid md:block justify-items-center">
      //       <div className="relative w-4/5 md:w-auto grid md:block justify-end">
      //         {" "}
      //         <div className="flex w-full justify-end mb-2">
      //           {" "}
      //           <p
      //             onClick={() => setIsShown(false)}
      //             className="text-white opacity-50 text-right justify-end cursor-pointer "
      //           >
      //             Close
      //           </p>
      //         </div>
      //         <iframe
      //           className="md:w-[920px] md:h-[518px] border-2 border-white/40"
      //           src="https://www.youtube.com/embed/CNJLSXq5BHc"
      //           title="GERMAN FRERS - Descubrimos un nuevo diseño"
      //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      //           allowFullScreen
      //         ></iframe>
      //       </div>
      //       {/* <video
      //         onClick={videoClick}
      //         onEnded={handleShowGermanVideo}
      //         ref={vidRef}
      //         // id="video"
      //         // data-cld-public-id={"smcatamarans/veksmc8sbrlmhqr3ejkw"}
      //         src={linksVideos["fers"]}
      //         className="md:w-auto h-auto border-[0.5px] border-white/40"
      //         autoPlay
      //       ></video> */}
      //       {/* {vidRef.current.paused && (
      //         <button
      //           onClick={videoClick}
      //           className="absolute text-sm md:text-lg text-white -top-9 -right-8 md:-top-12 md:-right-8 p-4"
      //         >
      //           Play
      //         </button>
      //       )} */}
      //       {/* <button
      //         onClick={handleShowGermanVideo}
      //         className="absolute text-sm md:text-lg text-white -top-9 -right-8 md:-top-12 md:-right-8 p-4"
      //       >
      //         x
      //       </button> */}
      //     </div>
      //   </div>
      // <div className="fixed grid overflow-hidden top-0 left-0 right-0 bottom-0 md:overflow-hidden bg-[rgba(0,0,0,0.9)] z-50 justify-items-center items-center">
      //   {!showPopInfo && !showGermanVideo && (
      //     <div className="relative w-4/5 md:w-auto grid md:block justify-end">
      //       <div className="flex w-full justify-end mb-2">
      //         <p
      //           onClick={() => setIsShown(false)}
      //           className="text-white opacity-50 text-right justify-end cursor-pointer "
      //         >
      //           Close
      //         </p>
      //       </div>
      //       <iframe
      //         className="md:w-[920px] md:h-[518px] border-2 border-white/40"
      //         src="https://www.youtube.com/embed/9LyDBO4_zC0"
      //         title="GERMAN FRERS - Descubrimos un nuevo diseño"
      //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      //         allowFullScreen
      //       ></iframe>
      //     </div>
      //   )}
      //   {!showPopInfo && showGermanVideo && (
      //     <div className="relative w-4/5 md:w-3/5 grid md:block justify-items-center">
      //       <video
      //         onEnded={handleShowGermanVideo}
      //         src="/GernamFersVideo.mp4"
      //         className="md:w-auto h-auto border-[0.5px] border-white/40"
      //         autoPlay
      //         loop={false}
      //         controls
      //       ></video>
      //       <button
      //         onClick={handleShowGermanVideo}
      //         className="absolute text-sm md:text-lg text-white -top-9 -right-8 md:-top-12 md:-right-8 p-4"
      //       >
      //         x
      //       </button>
      //     </div>
      //   )}
      //   {showPopInfo && !showGermanVideo && (
      //     <div className="relative block mx-6 my-2 shadow-lg shadow-gray-300/10">
      //       <img
      //         className="md:w-96 w-72"
      //         src={leng === "en" ? "/PopUpEn.jpg" : "/PopUpBackground.jpg"}
      //         alt=""
      //       />
      //       <div className="absolute left-6 top-6">
      //         <button
      //           onClick={() => setLeng(leng === "en" ? "es" : "en")}
      //           className="underline  text-xs py-2 text-[rgba(234,234,234,0.8)] bg-none"
      //         >
      //           {handleTextTranslation("Change Language")}
      //         </button>
      //         <button
      //           alt="Sobre German Flag"
      //           className="underline ml-4 text-xs py-2 text-[rgba(234,234,234,0.8)] bg-none"
      //           onClick={handleShowGermanVideo}
      //         >
      //           German Fers
      //         </button>
      //       </div>
      //       <button
      //         onClick={() => setIsShown(!isShown)}
      //         className="absolute right-6 top-4 p-2 text-[rgba(234,234,234,0.8)] bg-none"
      //       >
      //         x
      //       </button>
      //       {!showForm ? (
      //         <>
      //           {" "}
      //           <button
      //             onClick={() => setShowForm(!showForm)}
      //             className="absolute right-[6%] md:right-8 bottom-12 border-[1px] border-[rgba(234,234,234,0.8)] text-xs px-6 py-2 text-[rgba(234,234,234,0.8)] bg-none"
      //           >
      //             {handleTextTranslation("More")}
      //           </button>
      //         </>
      //       ) : (
      //         <PopUpForm handleTextTranslation={handleTextTranslation} />
      //       )}
      //     </div>
      //   )}
      // </div>
    );
  return <></>;
}

export default PopUp;

import React, { useState } from "react";
import PopUpForm from "./PopUpForm";
import Translator from "../../Utils/Translator";
function PopUp() {
  const [isShown, setIsShown] = useState(true);
  const [showPopInfo, setShowPopInfo] = useState(false); // [false, true, false, false, false, false, false, false, false, false, false, false, false, false, false
  const [showForm, setShowForm] = useState(false);
  const [leng, setLeng] = useState("es");
  const handleTextTranslation = (text) => {
    return Translator(text, leng);
  };
  if (isShown)
    return (
      <div className="fixed grid overflow-hidden top-0 left-0 right-0 bottom-0 md:overflow-hidden bg-[rgba(0,0,0,0.9)] z-50 justify-items-center items-center">
        {!showPopInfo && (
          <div className="relative w-4/5 md:w-auto grid md:block justify-items-center">
            <video
              onEnded={() => setShowPopInfo(true)}
              src="/videoBeforePopUp.mp4"
              className="md:w-auto h-auto border-[0.5px] py-0.5 border-white/40"
              autoPlay
              loop={false}
              muted
            ></video>
            <button
              onClick={() => setShowPopInfo(true)}
              className="absolute text-sm md:text-lg text-white -top-9 -right-8 md:-top-12 md:-right-8 p-4"
            >
              x
            </button>
          </div>
        )}
        {showPopInfo && (
          <div className="relative block mx-6 my-2 shadow-lg shadow-gray-300/10">
            <img
              className="md:w-96 w-72"
              src={leng === "en" ? "/PopUpEn.jpg" : "/PopUpBackground.jpg"}
              alt=""
            />
            <div className="absolute left-6 top-6">
              <button
                onClick={() => setLeng(leng === "en" ? "es" : "en")}
                className="underline  text-xs py-2 text-[rgba(234,234,234,0.8)] bg-none"
              >
                {handleTextTranslation("Change Language")}
              </button>
              {/* <button
                alt="Sobre German Flag"
                className="underline ml-4 text-xs py-2 text-[rgba(234,234,234,0.8)] bg-none"
              >
                {handleTextTranslation("Change Language")} 
                German Fers
              </button> */}
            </div>
            <button
              onClick={() => setIsShown(!isShown)}
              className="absolute right-6 top-4 p-2 text-[rgba(234,234,234,0.8)] bg-none"
            >
              x
            </button>
            {!showForm ? (
              <>
                {" "}
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="absolute right-[6%] md:right-8 bottom-12 border-[1px] border-[rgba(234,234,234,0.8)] text-xs px-6 py-2 text-[rgba(234,234,234,0.8)] bg-none"
                >
                  {handleTextTranslation("More")}
                </button>
              </>
            ) : (
              <PopUpForm handleTextTranslation={handleTextTranslation} />
            )}
          </div>
        )}
      </div>
    );
}

export default PopUp;

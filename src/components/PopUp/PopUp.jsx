import React, { useState } from "react";
import PopUpForm from "./PopUpForm";
import Translator from "../../Utils/Translator";
function PopUp() {
  const [isShown, setIsShown] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [leng, setLeng] = useState("es");
  const handleTextTranslation = (text) => {
    return Translator(text, leng);
  };
  if (isShown)
    return (
      <div className="fixed overflow-hidden top-0 left-0 right-0 bottom-0 md:overflow-hidden bg-[rgba(0,0,0,0.9)] z-50 grid justify-items-center items-center">
        <div className="relative block mx-6 my-2 shadow-lg shadow-gray-300/10">
          <img
            className="md:w-96 w-72"
            src={leng === "en" ? "/PopUpEn.jpg" : "/PopUpBackground.jpg"}
            alt=""
          />
          <button
            onClick={() => setLeng(leng === "en" ? "es" : "en")}
            className="underline absolute left-6 top-6 text-xs py-2 text-[rgba(234,234,234,0.8)] bg-none"
          >
            {handleTextTranslation("Change Language")}
          </button>
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
      </div>
    );
}

export default PopUp;

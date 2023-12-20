import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
function PopUpForm({ handleTextTranslation }) {
  const [loading, setLoading] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    try {
      setLoading(true);
      await emailjs.send(
        "service_8vzkx0r",
        "template_etgypho",
        {
          user_name: name,
          user_phone: phone,
          user_email: email,
        },
        "5QClNfFXlJEEFViGG"
      );
      form.reset();
      confetti();
      setIsExploding(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (!isExploding)
    return (
      <>
        <form
          onSubmit={handelSubmit}
          className="absolute top-48 md:top-72 pt-2 mx-4  left-0 right-0 bg-[#1D120C]"
        >
          <h4 className="text-gray-100 text-sm mb-4">
            {handleTextTranslation("Complet")}
          </h4>
          <div className="relative mb-4">
            <input
              name="name"
              type="text"
              id="input-group-1"
              required
              className="bg-gray-50/80 border placeholder:text-black/70 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={handleTextTranslation("Name")}
            />
          </div>

          <div className="relative mb-4">
            <input
              name="email"
              type="text"
              required
              id="input-group-2"
              className="bg-gray-50/80 border placeholder:text-black/70 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
            />
          </div>

          <div className="relative mb-2">
            <input
              name="phone"
              type="text"
              required
              id="input-group-3"
              className="bg-gray-50/80 border placeholder:text-black/70 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={handleTextTranslation("Phone")}
            />
          </div>
          <div className="flex justify-end gap-x-4 mt-4 ">
            <button
              disabled={loading}
              type="submit"
              className="border-[1px] disabled:opacity-25 border-[rgba(234,234,234,0.8)] text-xs px-6 py-2 text-[rgba(234,234,234,0.8)] bg-none"
            >
              {handleTextTranslation("Subscribe")}
            </button>
          </div>
        </form>
      </>
    );
  if (isExploding)
    return (
      <>
        <section className=" h-48 md:h-56 absolute top-48 md:top-72 pt-2 mx-4 left-0 right-0 bg-[#1D120C] text-gray-100">
          <h1 className="font-bold text-sm">
            {handleTextTranslation("Thanks")}
          </h1>
          <p className="mt-4 text-xs">{handleTextTranslation("Reach Us")}</p>
        </section>
      </>
    );
}

export default PopUpForm;

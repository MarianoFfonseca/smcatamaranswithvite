import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import videoCatamaras from "../Images/videoCatamaras.mp4";
import VideoAboutUs from "../Images/VideoAboutUs.mp4";
// import Footer from "./Footer";
import { useInView } from "framer-motion";
const HomePage = ({ theRef }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      id="HomePage"
      className="TheContainer relative z-10
      "
    >
      <motion.div className="text-white z-10 grid w-full h-full content-center items-center md:justify-items-center md:text-center px-10 space-y-5">
        <div className="md:flex md:space-x-4 text-7xl md:text-8xl md:font-extralight font-bold">
          <h1 ref={theRef}>Just </h1>
          <h1 className="mt-2 ">Relax</h1>
        </div>
        <p className="md:hidden">catamarans from $5.000.000.</p>
        <div className="hidden md:block">
          <p className="max-w-xl text-md">
            Welcome to our company, where we specialize in the design and
            manufacturing of high-quality catamarans. Our team of experienced
            engineers and craftsmen have a passion for the water and the boating
            lifestyle, and it shows in the attention to detail and superior
            craftsmanship of each catamaran we build.
          </p>
        </div>
        <div className="block">
          <Link to={"/yachts"}>
            {" "}
            <button className="px-24 py-1 border-white border-2">
              Meet the 54
            </button>
          </Link>{" "}
        </div>
      </motion.div>
      <video
        className="absolute brightness-[0.4] top-0 left-0 w-full h-full -z-10 object-cover object-center"
        src={videoCatamaras}
        playsinline
        controls={false}
        loop
        muted
        autoPlay={true}
      />
    </motion.div>
  );
};

const AboutUsPage = ({ theRef }) => {
  return (
    <div id="SecondPage" className="TheContainer relative z-10 ">
      <div
        className="z-50 grid md:grid-flow-col md:grid-cols-2 px-10 md:px-36 items-center md:py-0 justify-items-center
       w-full h-screen text-white "
      >
        <div className="grid justify-start space-y-6 md:px-4">
          <div className="text-5xl md:mb-6 md:text-7xl font-bold md:grid space-y-4">
            <h1 ref={theRef}>About </h1>
            <h1>Our History</h1>
          </div>
          <p className="text-md md:text-xl text-left">
            Sistemas Marinos es un astillero dedicado a la construcción de
            embarcaciones del segmento de alto rendimiento Construimos
            CATAMARANES diseñados para ofrecer altas prestaciones de navegación.
            Para ello nos integramos con profesionales de primer nivel con el
            fin de lograr los mejores resultados en diseño, cálculo y sistemas
            de fabricación.
          </p>
        </div>
        <div className="px-4 hidden md:block">
          {" "}
          <p className="text-md md:text-xl md:text-right">
            Argentina tiene un importante desarrollo en el diseño y construcción
            de embarcaciones destinadas a la recreación y al deporte náutico.
            Con mucho orgullo realizamos nuestra actividad en uno de los mejores
            clubes del país, ubicado en la rivera del Río Paraná. Las
            instalaciones de nuestro Astillero se encuentran dentro del predio
            perteneciente al Club Náutico Paraná, circunstancia que amplía la
            capacidad operativa y potencia el área de Taller Naval, dando
            atención a la flota de la Institución y toda la región. Sistemas
            Marinos cuenta con medios de elevación, más de 6000 m2 de varadero
            descubierto y 1100 m2 cubiertos, ofreciendo prestaciones de calidad
            para los amante de la náutica.
          </p>
        </div>
      </div>
      <video
        className="absolute brightness-[0.2] top-0 left-0 w-full h-full -z-10 object-cover object-center"
        src={VideoAboutUs}
        controls={false}
        loop
        muted
        autoPlay={true}
        playsinline
      />
    </div>
  );
};
function Section({ inView, inView2 }) {
  return (
    <div className="fixed text-white z-50 right-2 md:right-14 h-full grid items-center content-center gap-y-2">
      <div className="flex items-center justify-end gap-x-2">
        <div
          className={`border-[1px] rounded-full ${
            inView ? "bg-white" : "bg-transparent"
          } w-2 h-2 md:w-2 md:h-2`}
        ></div>
      </div>
      <div className="flex items-center justify-end gap-x-2">
        <div
          className={`border-[1px] rounded-full ${
            inView2 ? "bg-white" : "bg-transparent"
          } w-2 h-2 md:w-2 md:h-2`}
        ></div>
      </div>
    </div>
  );
}

function Home() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const ref2 = useRef(null);
  const inView2 = useInView(ref2);

  return (
    <>
      <div className="Home">
        <Section inView={inView} inView2={inView2} />
        <HomePage theRef={ref}></HomePage>
        <AboutUsPage theRef={ref2}></AboutUsPage>
      </div>
    </>
  );
}

export default Home;

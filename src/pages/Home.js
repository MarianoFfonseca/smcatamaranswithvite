import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { linksVideos } from "../Images/LinksCloudinary";
import PopUp from "../components/PopUp/PopUp";
import { useStore } from "../store/popupstore";
const HomePage = ({ theRef }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      id="HomePage hiddeScroll"
      className="TheContainer relative z-10
      "
    >
      <motion.div className="text-white z-10 grid w-full h-full content-center items-center md:justify-items-center md:text-center px-8 space-y-5">
        <div className="flex md:space-x-4 text-7xl md:text-8xl md:font-extralight font-bold">
          <h1 ref={theRef}>Just </h1>
          <h1 className="md:mt-0 ml-3 md:ml-0 ">Live</h1>
        </div>
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
          <Link to={"/54s"}>
            {" "}
            <button className="px-20 md:px-24 py-1 border-white border-2">
              Discover your 54s
            </button>
          </Link>{" "}
        </div>
      </motion.div>
      <img
        className="absolute brightness-[0.3] blur-sm bg-blue-200 top-0 left-0 w-full h-full -z-20 object-cover object-center"
        src="/Home/Preload.webp"
        alt=""
      />
      <video
        className="absolute brightness-[0.3] top-0 left-0 w-full h-full -z-10 object-cover object-center"
        src={linksVideos["home"]}
        playsInline
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
    <section id="SecondPage" className="TheContainer relative z-10 ">
      <div
        className="z-50 grid px-8 md:px-36 items-center md:py-0 justify-items-center
       w-full h-screen text-white "
      >
        <div className="grid md:grid-flow-col md:grid-cols-2 ">
          <div className="grid justify-start space-y-6 md:px-4">
            <div className="text-5xl md:mb-6 md:text-7xl font-bold md:grid space-y-4">
              <h1 id="about" ref={theRef}>
                About Us
              </h1>
            </div>
            <p className="text-md md:text-lg text-left">
              Born in Argentina and now located in Juan Lacaze, Department of
              Colonia, we are a leading shipyard with advanced technology. Our
              roots are nourished by a passion for sailing. We specialize in
              manufacturing premium catamarans where excellence and performance
              come together to provide an unparalleled experience on the water.
              Each vessel we build is the result of our dedication and technical
              expertise.
            </p>
          </div>
          <div className="px-4 hidden md:block">
            {" "}
            <p className="text-md  md:text-lg md:text-right">
              Proudly, we incorporate the best of technology into our
              manufacturing process. This enables us to create high-performance
              catamarans that meet the highest standards. Speed, stability, and
              luxury merge in every detail to provide unforgettable moments at
              sea.
            </p>
            <p className="text-md mt-2  md:text-lg md:text-right">
              From our roots in Argentina to our current home in Juan Lacaze,
              our passion for sailing is the driving force behind our shipyard.
              Our highly skilled and passionate team strives to exceed your
              expectations and deliver exceptional quality catamarans.
            </p>
            <p className="text-md mt-2  md:text-lg md:text-right">
              Welcome to SM Catamarans. Where technology, passion, and
              performance come together to take your sailing to a whole new
              level!
            </p>
          </div>
        </div>
      </div>
      <video
        className="absolute brightness-[0.4] top-0 left-0 w-full h-full -z-10 object-cover object-center"
        src={linksVideos["aboutUs"]}
        controls={false}
        loop
        muted
        autoPlay={true}
        playsInline
      />
    </section>
  );
};
function Section({ inView, inView2 }) {
  return (
    <div className="fixed text-white z-40 right-2 md:right-14 h-full grid items-center content-center gap-y-2">
      <div className="flex items-center text-xs justify-end gap-x-2">
        <p className={inView ? "" : "no-underline opacity-40"}>Home</p>
        <div
          className={`border-[1px] rounded-full ${
            inView ? "bg-white" : "bg-transparent"
          } w-2 h-2 md:w-2 md:h-2`}
        ></div>
      </div>
      <div className="flex items-center text-xs justify-end gap-x-2">
        <p className={inView2 ? "" : "no-underline opacity-40"}>About us</p>
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
  const isShown = useStore((state) => state.isShown);

  return (
    <>
      <div className="Home" id="hiddeScroll">
        {/* <PopUp /> */}
        <Section inView={inView} inView2={inView2} />
        {/* {isShown && <PopUp></PopUp>} */}
        <HomePage theRef={ref}></HomePage>
        <AboutUsPage theRef={ref2}></AboutUsPage>
      </div>
    </>
  );
}

export default Home;

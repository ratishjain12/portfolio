import bioLogo from "../assets/Ratish Jain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Blogs from "./Blogs";
import More from "./More";
import { motion } from "framer-motion";

const Bio = () => {
  return (
    <>
      <div
        className="relative bio container mx-auto h-[560px] pt-16 md:mb-2"
        id="bio"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bio-card  bg-white rounded-lg w-[90%] mx-auto p-5 md:p-12 md:flex gap-10 items-center justify-center md:max-w-4xl  "
        >
          <div className="left-bio ">
            <img
              src={bioLogo}
              className="max-w-[172px] h-44  md:max-w-[176px] md:h-44 rounded-full mx-auto"
            />
          </div>
          <div className="right-bio pt-3 md:max-w-lg flex flex-col items-center justify-center md:items-start">
            <h1 className="text-black  px-2 mb-2 text-xl sm:text-3xl text-center md:text-left md:text-3xl  md:px-0">
              Hi I am a Fullstack Developer
            </h1>
            <p className="text-gray-700 text-[0.68rem] text-center  sm:text-[1.2rem]  sm:text-center md:text-left  md:pl-0 md:text-lg">
              Passionate Fullstack Developer with a strong focus on software
              development. Proficient in building robust and user‑friendly
              applications using modern web technologies.
            </p>
            <div className="w-full flex justify-center">
              <Link
                to="https://drive.google.com/file/d/1OMvOmAVRFPOZmEN_i0vWlo-YO_WfFqGH/view?usp=sharing"
                className="w-full flex justify-center"
              >
                <button className=" w-[300px]  mt-4  sm:w-full md:w-full md:ml-0  text-black px-2 py-2 rounded-lg md:mt-2 border-2 border-gray-700 bg-transparent mr-2 hover:bg-black hover:text-white">
                  <span className="mr-4 ">Resume</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </button>
              </Link>
            </div>
          </div>
          <div className="socials flex order-3 justify-evenly mt-6 md:flex-col md:order-first md:mt-0 md:h-full">
            <div className="linkedin mb-2">
              <Link to="https://www.linkedin.com/in/ratish-jain/">
                <LinkedInIcon className="text-black hover:scale-125 transition-transform ease-out" />
              </Link>
            </div>
            <div className="twitter mb-2">
              <Link to="https://twitter.com/ratishtwts">
                <TwitterIcon className="text-black hover:scale-125 transition-transform ease-out" />
              </Link>
            </div>
            <div className="github mb-2">
              <Link to="https://github.com/ratishjain12">
                <GitHubIcon className="text-black hover:scale-125 transition-transform ease-out" />
              </Link>
            </div>
            <div className="insta mb-2">
              <Link to="https://www.instagram.com/ratisshh/">
                <InstagramIcon className="text-black hover:scale-125 transition-transform ease-out" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Contributions */}
      <div className="mx-auto mt-6 py-8 px-8 md:py-12 md:px-0 bg-black/10 h-[400px] flex flex-col justify-center">
        <p className="text-2xl text-center mb-6  text-white rounded-sm">
          Open Source Contributions
        </p>
        <img
          className="mx-auto bg-white p-3 rounded-lg shadow-sm "
          src="https://ghchart.rshah.org/ratishjain12"
          alt="2016rshah's Github chart"
        />
      </div>
      {/* Bio section */}
      {/* Skills section */}
      <Skills />
      {/* Project section */}
      <Projects />
      {/* More Projects */}
      <More />
      {/* Contact section */}
      <Blogs />
      <ContactMe />
      <Footer />
    </>
  );
};
export default Bio;

import bioLogo from "../assets/Ratish Jain.jpg";
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

const Bio = () => {
  return (
    <>
      <div
        className="relative bio container mx-auto h-[600px] pt-16 md:mb-2"
        id="bio"
      >
        <div className="bio-card h-[400px] bg-white rounded-lg w-[90%] mx-auto p-5 md:p-12 md:flex gap-10 items-center justify-center md:max-w-4xl  ">
          <div className="left-bio ">
            <img
              src={bioLogo}
              className="max-w-[172px] h-44  md:max-w-[176px] md:h-44 rounded-full mx-auto"
            />
          </div>
          <div className="right-bio pt-3 md:max-w-lg flex flex-col items-center justify-center md:items-start">
            <h1 className="text-black  px-2 mb-2 text-xl sm:text-3xl text-center md:text-left md:text-3xl  md:px-0">
              Hi I'm a Fullstack Developer
            </h1>
            <p className="text-gray-700 text-[0.68rem] text-center  sm:text-[1.2rem]  sm:text-center md:text-left  md:pl-0 md:text-lg">
              Passionate Fullstack Developer with a strong focus on software
              development. Proficient in building robust and user‑friendly
              applications using modern web technologies.
            </p>
            <div className="w-full flex justify-center">
              <button className=" w-[300px]  mt-4  sm:w-full md:w-full md:ml-0  text-black px-2 py-2 rounded-lg md:mt-2 border-2 border-gray-700 bg-transparent mr-2 hover:bg-black hover:text-white">
                <span className="mr-4 ">Resume</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </button>
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
              <Link to="https://www.instagram.com/ratish_45/">
                <InstagramIcon className="text-black hover:scale-125 transition-transform ease-out" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" icon-scroll  md:mb-6 top-[20%] sm:top-[29%] md:top-[90%]"></div>
      </div>
      {/* Bio section */}

      {/* Skills section */}
      <Skills />
      {/* Project section */}
      <Projects />
      {/* Contact section */}
      <ContactMe />
      <Footer />
    </>
  );
};
export default Bio;

import bioLogo from "../assets/Ratish Jain.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Bio = () => {
  return (
    <div className="bio container mx-auto" id="bio">
      <div className="bio-card  bg-white rounded-lg w-[90%] mx-auto p-5 md:p-12 md:flex gap-10 items-center justify-center md:max-w-4xl">
        <div className="left-bio ">
          <img
            src={bioLogo}
            className=" max-w-[176px] h-44 rounded-full mx-auto"
          />
        </div>
        <div className="right-bio pt-3 md:max-w-lg">
          <h1 className="text-black  px-2 mb-2 text-2xl text-center   md:text-left md:text-3xl  md:px-0">
            Hi I'm a Fullstack Developer
          </h1>
          <p className="text-gray-700 text-md text-center md:text-left pl-2 md:pl-0 md:text-lg">
            Passionate Fullstack Developer with a strong focus on software
            development. Proficient in building robust and user‑friendly
            applications using modern web technologies.
          </p>
          <button className=" w-[300px] ml-14 mt-4 sm:ml-0 sm:w-full md:w-full md:ml-0  text-black px-2 py-2 rounded-lg md:mt-2 border-2 border-gray-700 bg-transparent mr-2">
            <span className="mr-4">Resume</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </div>
        <div className="socials flex order-3 justify-evenly mt-6 md:flex-col md:order-first md:mt-0 md:h-full">
          <div className="linkedin mb-2">
            <LinkedInIcon className="text-black" />
          </div>
          <div className="twitter mb-2">
            <TwitterIcon className="text-black" />
          </div>
          <div className="github mb-2">
            <GitHubIcon className="text-black" />
          </div>
          <div className="insta mb-2">
            <InstagramIcon className="text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bio;

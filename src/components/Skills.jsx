import html from "../assets/html-5.png";
import js from "../assets/js.png";
import css from "../assets/css-3.png";
import react from "../assets/react.svg";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import flutter from "../assets/flutter.png";
import dart from "../assets/dart.png";
function Skills() {
  return (
    <div
      className="w-[94%] h-[90vh] mx-auto flex items-center flex-col pt-4 justify-center mt-8 md:mt-36"
      id="skills"
    >
      <h1 className=" text-4xl mb-8 text-center">Skills</h1>
      <div className="skills-container grid grid-rows-2 gap-8 px-2 py-4">
        <div className="grid grid-cols-4 gap-2 md:gap-16 mx-auto">
          <img className="w-[180px]  md:w-[80px]" src={html} alt="" />
          <img className="w-[180px]  md:w-[80px]" src={css} alt="" />
          <img className="w-[180px]  md:w-[70px]" src={js} alt="" />
          <img className="w-[180px]  md:w-[80px]" src={react} alt="" />
        </div>
        <div className="grid grid-cols-4 gap-2 md:gap-16 mx-auto">
          <img className="w-[180px] md:w-[80px]" src={nodejs} alt="" />
          <img className="w-[180px] md:w-[80px]" src={mongodb} alt="" />
          <img className="w-[180px] md:w-[80px]" src={flutter} alt="" />
          <img className="w-[180px] md:w-[80px]" src={dart} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Skills;

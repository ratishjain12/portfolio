import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projectData from "./projectData";
import Projectcard from "./Projectcard";
function Projectcatalog() {
  const [projects] = useState(projectData);
  const [toggle, setToggle] = useState(1);

  useEffect(() => {
    window.scrollTo("Top", 0);
  }, []);
  function changeTab(id) {
    setToggle(id);
  }
  return (
    <div className="">
      <Link to="/">
        <div className="backbtn ml-4 mt-2 h-[50px]">
          <ArrowBackIcon />
        </div>
      </Link>
      <div className="w-[90%] border-b-2 border-gray-200 mx-auto flex flex-col justify-center items-center p-2 mb-2">
        <div className="tabscontainer flex w-[72vw] justify-evenly items-center">
          <button
            className={toggle === 1 ? "border-b-2 border-blue-500" : "border-0"}
            onClick={() => {
              changeTab(1);
            }}
          >
            HTML CSS JS
          </button>
          <button
            className={toggle === 2 ? "border-b-2 border-blue-500" : "border-0"}
            onClick={() => {
              changeTab(2);
            }}
          >
            MERN
          </button>
          <button
            className={toggle === 3 ? "border-b-2 border-blue-500" : "border-0"}
            onClick={() => {
              changeTab(3);
            }}
          >
            Flutter
          </button>
        </div>
      </div>
      <div className="tabpanel w-[92%] mx-auto flex">
        {toggle === 1 && (
          <div className="tab1 w-[90%] mx-auto">
            <div className="w-full flex justify-center items-center flex-wrap">
              {projects.length > 0 &&
                projects.map((project) => {
                  if (project.category == "html") {
                    return <Projectcard {...project} key={project.id} />;
                  }
                })}
            </div>
          </div>
        )}
        {toggle === 2 && (
          <div className="tab2 w-[90%] mx-auto">
            <div className="w-full flex justify-center items-center flex-wrap">
              {projects.length > 0 &&
                projects.map((project) => {
                  if (project.category == "mern") {
                    return <Projectcard {...project} key={project.id} />;
                  }
                })}
            </div>
          </div>
        )}
        {toggle === 3 && (
          <div className="tab2 w-[90%] mx-auto">
            <div className="w-full flex justify-center items-center flex-wrap">
              {projects.length > 0 &&
                projects.map((project) => {
                  if (project.category == "flutter") {
                    return <Projectcard {...project} key={project.id} />;
                  }
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Projectcatalog;

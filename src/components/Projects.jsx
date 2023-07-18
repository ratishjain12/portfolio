import Projectcard from "./Projectcard";
import projectData from "./projectData";
import { useState } from "react";
const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  return (
    <div
      className="projects-section w-[90%] mx-auto mb-12 pt-16 pb-20 flex flex-col justify-center"
      id="projects"
    >
      <h1 className="text-3xl text-center mb-6">Projects</h1>
      <div className="projects-container flex flex-wrap justify-center gap-4">
        {projects.length > 0 &&
          projects.map((project) => (
            <Projectcard {...project} key={project.id} />
          ))}
      </div>
      <button className="w-[92%] mx-auto mt-8 border-2 border-black py-2 text-lg md:w-[91%] hover:bg-black hover:text-white">
        See more projects
      </button>
    </div>
  );
};
export default Projects;

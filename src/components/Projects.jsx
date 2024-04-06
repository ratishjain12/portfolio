import Projectcard from "./Projectcard";
import projectData from "./utils/projectData";
import { useState } from "react";
import { motion } from "framer-motion";
const Projects = () => {
  const [projects] = useState(projectData);

  return (
    <motion.div
      className="projects-section w-[90%] mx-auto mb-3 pt-16 pb-12 flex flex-col justify-center"
      id="projects"
    >
      <h1 className="text-2xl text-center mb-6">Projects</h1>
      <motion.div className="projects-container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xxl:grid-cols-4 gap-2 mx-auto">
        {projects.length > 0 &&
          projects
            .slice(0, 8)
            .map((project) => <Projectcard {...project} key={project.id} />)}
      </motion.div>
    </motion.div>
  );
};
export default Projects;

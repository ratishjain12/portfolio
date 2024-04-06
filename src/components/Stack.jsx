import { frontend, backend, database, devOps } from "./utils/data";
import { motion, useAnimationControls, useInView } from "framer-motion";
import Chip from "@mui/material/Chip";
import { useEffect, useRef } from "react";

const StackCard = () => {
  const controls = useAnimationControls();
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [controls, isInView]);
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xxl:grid-cols-4 gap-3">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        transition={{ duration: 0.6 }}
        className="card1 bg-gray-700 px-2 py-4 rounded-md space-y-2 "
      >
        <p className="text-lg">Frontend</p>
        <div className="flex flex-wrap  gap-2 ">
          {frontend.map((item, index) => {
            return (
              <Chip
                label={item}
                key={index}
                size="medium"
                variant="outlined"
                sx={{ color: "white" }}
              />
            );
          })}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        ref={ref}
        transition={{ duration: 0.9 }}
        className="card2 bg-gray-700 px-2 py-4 rounded-md space-y-2"
      >
        <p className="text-lg">Backend</p>
        <div className="flex flex-wrap gap-2">
          {backend.map((item, index) => {
            return (
              <Chip
                label={item}
                key={index}
                size="medium"
                variant="outlined"
                sx={{ color: "white" }}
              />
            );
          })}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        ref={ref}
        transition={{ duration: 1 }}
        className="card2 bg-gray-700 px-2 py-4 rounded-md space-y-2 "
      >
        <p className="text-lg">Database</p>
        <div className="flex flex-wrap gap-2">
          {database.map((item, index) => {
            return (
              <Chip
                label={item}
                key={index}
                size="medium"
                variant="outlined"
                sx={{ color: "white" }}
              />
            );
          })}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        ref={ref}
        transition={{ duration: 1.1 }}
        className="card2 bg-gray-700 px-2 py-4 rounded-md space-y-2 "
      >
        <p className="text-lg">DevOps</p>
        <div className="flex flex-wrap gap-2">
          {devOps.map((item, index) => {
            return (
              <Chip
                label={item}
                key={index}
                size="medium"
                variant="outlined"
                sx={{ color: "white" }}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
export default StackCard;

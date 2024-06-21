/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
// eslint-disable-next-line react/prop-types
function Projectcard({ title, img, stack, source, duration, description }) {
  const controls = useAnimationControls();
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start({ x: 0 });
    }
  }, [controls, isInView]);
  const goToSource = () => {
    window.location.href = source;
  };
  return (
    <motion.div
      ref={ref}
      initial={{ x: -100 }}
      animate={controls}
      transition={{ duration: duration }}
      className="project-card  md:shadow-md  rounded-lg  flex flex-col  m-4 items-center md:border-none bg-white shadow-md shadow-gray-800 cursor-pointer"
      onClick={goToSource}
    >
      <div className="w-full h-[200px]">
        <img src={img} className="h-full w-full rounded-tl-md rounded-tr-md" />
      </div>
      <div className="bg-white w-full rounded-lg p-2 space-y-2">
        <div className="text-neutral-800 font-semibold text-lg w-full py-2">
          {title}
        </div>
        <div className="text-slate-600">{description}</div>
        <div className="text-neutral-800 flex flex-wrap gap-2 ">
          {stack.map((item, index) => {
            return (
              <div key={index} className="border-2 px-2 py-1 rounded-full">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
export default Projectcard;

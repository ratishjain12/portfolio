import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SourceIcon from "@mui/icons-material/Source";
function Projectcard({ title, img, stack, live, source }) {
  return (
    <div className="project-card w-[290px] md:w-[380px] md:shadow-md border-2 rounded-md border-gray-300 flex flex-col justify-evenly m-4 items-center md:border-none">
      <img src={img} className="w-full h-[240px]" />
      <h4 className="text-center mt-2 text-2xl">{title}</h4>
      <p className="mt-4 mb-4 px-4">
        <b>Stack: </b>
        <span>{stack}</span>
      </p>
      <div className="button-container mt-8 mb-2 w-[90%] flex items-center justify-center">
        <Link to={source}>
          <button
            className={
              !live
                ? "px-24 sm:px-24 py-2 text-sm items-center border-2 border-black   hover:text-white hover:bg-black flex gap-1 "
                : "px-4 sm:px-7 py-2 text-sm items-center border-2 border-black mr-4 ml-1 hover:text-white hover:bg-black flex gap-1 "
            }
          >
            Source
            <SourceIcon />
          </button>
        </Link>
        {live && (
          <Link to={live}>
            <button className="px-4 sm:px-10 py-2 border-2 ext-sm items-center border-black hover:text-white hover:bg-black flex gap-1 ">
              Live
              <RemoveRedEyeIcon />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
export default Projectcard;

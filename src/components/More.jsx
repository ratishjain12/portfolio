import { ArrowForwardIos } from "@mui/icons-material";
import GitHub from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const More = () => {
  return (
    <div className="w-[90%] mx-auto ">
      <div className="mb-2 text-lg">More</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-gray-300/10 w-full rounded-lg p-6 flex flex-col">
          <Link to={"https://github.com/ratishjain12/Discord-clone-tailwind"}>
            <div className="mb-2">
              <div className="flex gap-2 items-center">
                <p>Discord Landing Page</p>
                <ArrowForwardIos fontSize="smal" />
              </div>
              <span className="text-gray-500/95 text-xs">
                Responsive Discord Landing Page created using html tailwind and
                GSAP
              </span>
            </div>
          </Link>
          <Link
            to={"https://github.com/ratishjain12/usability-hub-clone-html-css"}
          >
            <div className="mb-2">
              <div className="flex gap-2 items-center">
                <p>Usability Hub Landing Page</p>
                <ArrowForwardIos fontSize="smal" />
              </div>
              <span className="text-gray-500/95 text-xs">
                Responsive UsabilityHub Landing Page created using html css and
                javascript
              </span>
            </div>
          </Link>
          <Link to={"https://github.com/ratishjain12/dashboard-nextjs"}>
            <div className="">
              <div className="flex gap-2 items-center">
                <p>Weframetech Dashboard</p>
                <ArrowForwardIos fontSize="smal" />
              </div>
              <span className="text-gray-500/95 text-xs">
                Responsive Dashboard created using nextjs, tailwindcss
              </span>
            </div>
          </Link>
        </div>

        <div className="bg-gray-300/10 max-h-[120px] p-12 rounded-lg text-center space-x-2 hover:bg-gray-400 transition-all ">
          <span className="text-lg">GITHUB</span>
          <GitHub />
        </div>
      </div>
    </div>
  );
};
export default More;

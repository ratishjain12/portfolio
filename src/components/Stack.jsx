import { frontend, backend, database, devOps } from "./utils/data";

import Chip from "@mui/material/Chip";

const StackCard = () => {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xxl:grid-cols-4 gap-3">
      <div className="card1 bg-gray-700 px-2 py-4 rounded-md space-y-2 ">
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
      </div>
      <div className="card2 bg-gray-700 px-2 py-4 rounded-md space-y-2">
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
      </div>
      <div className="card2 bg-gray-700 px-2 py-4 rounded-md space-y-2 ">
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
      </div>
      <div className="card2 bg-gray-700 px-2 py-4 rounded-md space-y-2 ">
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
      </div>
    </div>
  );
};
export default StackCard;

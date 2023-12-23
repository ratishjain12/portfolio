import { Dropdown } from "flowbite-react";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink as Link } from "react-router-hash-link";
const MobileNav = () => {
  return (
    <div className="block md:hidden fixed top-0 w-[100%] z-50 h-[40px]">
      <div className="flex justify-between p-2 items-center bg-black/80 ">
        <p>Ratish Jain</p>
        <Dropdown
          label={<MenuIcon />}
          dismissOnClick={true}
          arrowIcon={false}
          color="black"
          size="sm"
          className=" bg-gray-700  border-gray-400/10 mt-2 w-[120px] "
        >
          <Link to={"#bio"}>
            <Dropdown.Item className="text-white hover:bg-gray-500  focus:hover:bg-gray-500">
              Bio
            </Dropdown.Item>
          </Link>
          <Link to={"#skills"}>
            <Dropdown.Item className="text-white hover:bg-gray-500  focus:hover:bg-gray-500">
              Skills
            </Dropdown.Item>
          </Link>
          <Link to="#projects">
            <Dropdown.Item className="text-white hover:bg-gray-500  focus:hover:bg-gray-500">
              Projects
            </Dropdown.Item>
          </Link>
          <Link to="#blogs">
            <Dropdown.Item className="text-white hover:bg-gray-500  focus:hover:bg-gray-500">
              Blogs
            </Dropdown.Item>
          </Link>
          <Link to="#contact">
            <Dropdown.Item className="text-white hover:bg-gray-500  focus:hover:bg-gray-500">
              Contact
            </Dropdown.Item>
          </Link>
        </Dropdown>
      </div>
    </div>
  );
};
export default MobileNav;

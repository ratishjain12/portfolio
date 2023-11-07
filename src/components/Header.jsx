import { Outlet } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Header = () => {
  return (
    <div className="main">
      <header className="header ">
        <nav className="h-[50px] mb-2 flex items-center ">
          <ul className="flex justify-evenly  max-w-6xl mx-auto flex-1 ">
            <li>
              <Link to="#bio">Bio</Link>
            </li>
            <li>
              <Link to="#skills">Skills</Link>
            </li>
            <li>
              <Link to="#projects">Projects</Link>
            </li>
            <li>
              <Link to="#blogs">Blogs</Link>
            </li>
            <li>
              <Link
                to="#contact"
                className="bg-black text-white px-4 py-2 rounded-full shadow-sm"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default Header;

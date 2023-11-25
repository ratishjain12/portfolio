import { Outlet } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Header = () => {
  return (
    <div className="main">
      <header className="header sticky top-0 z-50 ">
        <nav className="h-[50px] mb-2 flex items-center bg-black/30 backdrop-blur-xl ">
          <ul className="flex justify-evenly  max-w-6xl mx-auto flex-1 ">
            <li>
              <Link
                to="#bio"
                className="bg-gray-700 px-3 py-2 rounded-full text-sm"
              >
                Bio
              </Link>
            </li>
            <li>
              <Link
                to="#skills"
                className="bg-gray-700 px-4 py-2 rounded-full text-sm"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="#projects"
                className="bg-gray-700 px-4 py-2 rounded-full text-sm"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="#blogs"
                className="bg-gray-700 px-6 py-2 rounded-full text-sm"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className="bg-black text-white px-3 py-2 rounded-full shadow-sm"
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

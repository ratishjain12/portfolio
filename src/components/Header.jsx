import { HashLink as Link } from "react-router-hash-link";
const Header = () => {
  return (
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
            <Link
              to="#contact"
              className="bg-black text-white px-4 py-2 rounded-full shadow-sm"
            >
              Hire me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

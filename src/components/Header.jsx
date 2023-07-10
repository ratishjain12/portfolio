const Header = () => {
  return (
    <header className="header">
      <nav className="bg-gray-700 h-[50px] mb-6 flex items-center ">
        <ul className="flex justify-evenly  max-w-6xl mx-auto flex-1 ">
          <li>
            <a href="">Bio</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Hire me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

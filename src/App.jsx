import Header from "./components/Header.jsx";
import Bio from "./components/Bio.jsx";
import Skills from "./components/Skills.jsx";
import "./App.css";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <div>
      {/* Header Section  */}
      <Header />
      {/* Bio section */}
      <Bio />
      {/* Skills section */}
      <Skills />
      {/* Project section */}
      <Projects />
      {/* Contact section */}
    </div>
  );
}

export default App;

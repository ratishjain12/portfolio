import Header from "./components/Header.jsx";
import Bio from "./components/Bio.jsx";
import Skills from "./components/Skills.jsx";
import "./App.css";
import Projects from "./components/Projects.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ContactMe />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
    </div>
  );
}

export default App;

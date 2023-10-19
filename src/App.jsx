import Header from "./components/Header.jsx";
import Bio from "./components/Bio.jsx";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Projectcatalog from "./components/ProjectCatalog.jsx";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useState } from "react";
function App() {
  function scrollToTop() {
    window.scrollTo("top", 0);
  }
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  return (
    <div className="relative">
      {/* Header Section  */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Bio />} />
        </Route>
        <Route path="/projects" element={<Projectcatalog />} />
      </Routes>
      {scroll && (
        <button className="right-4 bottom-12 z-50 fixed" onClick={scrollToTop}>
          <div className="bg-black p-2 shadow-md rounded-lg text-white cursor-pointer">
            <ArrowUpwardIcon />
          </div>
        </button>
      )}

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

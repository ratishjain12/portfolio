import Header from "./components/Header.jsx";
import Bio from "./components/Bio.jsx";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Projectcatalog from "./components/ProjectCatalog.jsx";
function App() {
  return (
    <div>
      {/* Header Section  */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Bio />} />
        </Route>
        <Route path="/projects" element={<Projectcatalog />} />
      </Routes>

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

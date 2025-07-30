import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import lightTheme from "./assets/light.png";
import darkTheme from "./assets/dark.png";
import { useState } from "react";
import Upload from "./Upload";
import FAQS from "./FAQS";
import Contact from "./Contact";
import Zoom from "./components/Zoom";
import ClaimAccount from "./components/ClaimAccount";
import Play from "./components/Play";
// import Toggler from "./components/Toggler";
// import "@theme-toggles/react/css/Expand.css";
// import { Expand } from "@theme-toggles/react";

{
  /* <Expand duration={750} />; */
}
function App() {
  const themeDeterminer = () => {
    const date = new Date();
    const currentHours = date.getHours();
    console.log(currentHours);
    if (currentHours <= 7 || currentHours >= 19) {
      return false;
    } else {
      return true;
    }
  };

  const userTime = themeDeterminer();
  const [themeToggle, setThemeToggle] = useState(userTime);
  console.log(themeToggle);
  function handleToggleEffect() {
    setThemeToggle(!themeToggle);
  }
  return (
    <div data-theme={`${themeToggle ? "light" : "dark"}`}>
      <Router>
        <Navbar />
        <div className="mt-18 bg-base-100  "></div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Zoom />} />
          <Route path="/claim-account" element={<ClaimAccount />} />
          <Route path="/play" element={<Play />} />
        </Routes>
        <Footer />
      </Router>
      <img
        src={themeToggle ? lightTheme : darkTheme}
        alt=""
        className="fixed right-5 bottom-10 w-15 border-error border-r-2 hover:cursor-grab active:cursor-grabbing text-2xl "
        onClick={() => handleToggleEffect()}
      />
      <div
        id="overlay"
        className="w-full h-full fixed top-0 left-0 bg-black opacity-40 invisible"
      ></div>
      {/* <div className="absolute left-1/2 right-1/2 transform"></div> */}
    </div>
  );
}

export default App;

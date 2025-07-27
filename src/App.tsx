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
          {/* <Route path="/*" element={<PageNotFound />} /> */}
        </Routes>
        <Footer />
      </Router>
      <img
        src={themeToggle ? lightTheme : darkTheme}
        alt=""
        className="fixed right-5 bottom-10 w-15 border-error border-r-2 hover:cursor-grab active:cursor-grabbing text-2xl "
        onClick={() => handleToggleEffect()}
      />
      {/* <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vitae ex,
        eos totam sint itaque! Incidunt aperiam veniam voluptatibus perspiciatis
        quas corporis ut in ipsam quasi. Voluptatem incidunt optio pariatur.
        Cupiditate accusamus unde mollitia quod officia laboriosam
        exercitationem fugiat minima eos quibusdam excepturi obcaecati ex,
        delectus quos asperiores, dolore similique aperiam voluptatum
        perspiciatis? Iure dolor nesciunt tenetur est nobis quis? Deserunt eius,
        libero neque ipsum veniam eaque voluptate iure minima, quisquam
        doloremque rerum aperiam perspiciatis ad! Officia, magni debitis natus
        eveniet doloremque dolorum, repudiandae facilis recusandae dolore
        laborum ab aspernatur. Porro et eaque cumque pariatur odio, nihil
        nesciunt? Iure unde, expedita iste ratione placeat dicta enim odit qui
        quasi ea distinctio adipisci quam nesciunt delectus quo et quibusdam
        esse ducimus. Autem repellat consequatur magnam in corrupti! Ipsum
        labore consequuntur libero culpa quidem? Iure fugiat exercitationem
        accusamus magni, modi numquam nobis. Temporibus quam error saepe
        explicabo accusantium, eligendi laborum ea magni. Nisi magni adipisci
        tempore. Inventore veniam libero illo aliquam. Porro aperiam sapiente
        quam veniam. Incidunt quam numquam distinctio nostrum quibusdam
        excepturi doloremque odit facere, dolores voluptate magni iure atque
        officia! Vero asperiores et odit ex ut. Voluptatum quibusdam incidunt
        saepe sunt hic officiis provident modi error. Eius fuga dolores dolor
        optio quaerat! Dolorem natus soluta ab dicta, odit optio eos!
        Accusantium ducimus sapiente alias placeat cumque laborum reprehenderit
        sequi distinctio totam, eius doloribus, velit est, pariatur tempora
        harum minima rerum nihil voluptas. Ea recusandae perspiciatis
        consequuntur laboriosam nobis eligendi facilis? Dolorem autem
        exercitationem ab. Dolore minus voluptatum illo nobis. Ex, nulla
        praesentium sed cumque explicabo aperiam, neque voluptatem veritatis
        accusamus doloremque iure quo quibusdam voluptatum qui iste
        necessitatibus soluta vel! Perspiciatis sit asperiores corrupti vero
        atque cupiditate inventore accusamus enim ab ad iure, recusandae eius
        quisquam dolorum vel quidem illo adipisci magnam quaerat? Suscipit
        molestiae obcaecati reiciendis, eaque nihil ipsam?
      </div> */}
    </div>
  );
}

export default App;

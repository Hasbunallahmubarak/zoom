// import React from "react";

import Partners from "./Partners";
import Hero from "./Hero";
// interface Props {
//   themeToggle: boolean;
//   handleToggleEffect: () => void;
// }
//{ themeToggle, handleToggleEffect }: Props
const Homepage = () => {
  // console.log(themeToggle);
  return (
    <div>
      <Hero />
      <section className="border-y-1 border-gray-400 my-10">
        <Partners />
      </section>
    </div>
  );
};

export default Homepage;

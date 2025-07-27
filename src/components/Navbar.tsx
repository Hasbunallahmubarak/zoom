import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 py-3 shadow-sm md:px-20 fixed z-3 top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm w-50 dropdown-content bg-base-100  rounded-box z-1 mt-3 p-2 shadow"
            >
              <li className="p-1">
                <Link to={"/"}>Homepage</Link>
              </li>
              <li className="p-1">
                <Link to={"/login"}>Zoom Nation</Link>
                <ul className="p-2">
                  <li className="p-1">
                    <Link to={"https://www.zoomlifestyle.com/hunt/"}>
                      Treasure Hunt
                    </Link>
                  </li>
                  <li className="p-1">
                    <Link to={"https://trivia.zoomlifestyle.com/"}>
                      Zoom Trivia
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="p-1">
                <Link to={"/upload"}>Upload</Link>
              </li>
              <li className="p-1">
                <Link to={"/faqs"}>FAQS</Link>
              </li>
              <li className="p-1">
                <Link to={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="w-25">
            <img
              src="https://www.zoomlifestyle.com/images/zoom-logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <details>
                <summary>
                  <Link to={"/login"}>Zoom Nation</Link>{" "}
                </summary>
                <ul className="p-2 w-40 z-[-1]">
                  <li>
                    <Link to={"https://www.zoomlifestyle.com/hunt/"}>
                      Treasure Hunt
                    </Link>
                  </li>
                  <li>
                    <Link to={"https://trivia.zoomlifestyle.com/"}>
                      Zoom Trivia
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to={"/upload"}>Uploads</Link>
            </li>
            <li>
              <Link to={"/faqs"}>FAQs</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <Link to={""} className="btn btn-error text-base-100">
            Buy Raffle
          </Link>
          <Link to={""} className="btn btn-warning text-base-100">
            Sign Up
          </Link>
        </div>
        {/* <Link to={} className="w-25 sm:w-18  ml-5" onClick={() => handleToggleEffect()}>
          <img src={toggle ? lightTheme : darkTheme} />
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;

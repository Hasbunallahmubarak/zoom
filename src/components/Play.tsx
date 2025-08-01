import { Link } from "react-router-dom";
import { useState } from "react";
import { details } from "../zoom";
const Play = () => {
  const play1 = details[0].play1;
  const play2 = details[0].play2;
  const [formData, setFormData] = useState({
    play1: "",
    play2: "",
    name: "",
    number: "",
    email: "",
    password: "",
    verify_password: "",
  });
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };
  console.log(formData);
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div>
      <div className="max-w-5/6 mx-auto text-center py-10">
        <h3 className="text-lg letter tracking-wider font-light">
          Enter the Weekly N1,000,000 Raffle Draw
        </h3>
        <h1 className="text-xl tracking-wide font-bold opacity-80 my-3">
          Buy Lottery Ticket To Enter Raffle Draw
        </h1>
        {/* name of each tab group should be unique */}
        <div className="bg-[url(https://www.zoomlifestyle.com/images/pattern.png)]bg-cover p-5 w-full h-auto overflow-hidden">
          <div className="select-none md:max-w-2/5 mx-auto text-center ">
            <form>
              <input
                type="text"
                placeholder="Your Name*"
                required
                className="w-full mt-5 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0"
                name="name"
                value={formData.name}
                onChange={() => handleChange(event)}
              ></input>
              <div className="flex justify-between my-1">
                <input
                  type="text"
                  placeholder="8127892388"
                  required
                  className="w-12/25 mt-5 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0"
                  name="number"
                  value={formData.number}
                  onChange={() => handleChange(event)}
                ></input>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-12/25 mt-5 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0"
                  name="email"
                  value={formData.email}
                  onChange={() => handleChange(event)}
                ></input>
              </div>
              <div className="flex justify-between my-1">
                <select
                  className="select validator w-12/25 border-1 border-base-300 outline-0 opacity-80 my-3 "
                  name="play1"
                  required
                  onChange={() => handleChange(event)}
                >
                  {play1.map((genre) => (
                    <option className="opacity-80" value={formData.play1}>
                      {genre}
                    </option>
                  ))}
                </select>
                <select
                  className="select validator w-12/25 border-1 border-base-300 outline-0 opacity-80 my-3 "
                  name="play2"
                  required
                  onChange={() => handleChange(event)}
                >
                  {play2.map((genre) => (
                    <option className="opacity-80" value={formData.play2}>
                      {genre}
                    </option>
                  ))}
                </select>
              </div>

              <input
                type="password"
                placeholder="Password"
                required
                className="w-full mt-5 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0"
                name="password"
                value={formData.password}
                onChange={() => handleChange(event)}
              ></input>
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full mt-5 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0"
                name="verify_password"
                value={formData.verify_password}
                onChange={() => handleChange(event)}
              ></input>
              <input
                type="submit"
                value={"Sign in"}
                onSubmit={() => handleSubmit(event)}
                className="w-full my-3 px-5 py-3 border-base-300 text-white opacity-80 bg-error cursor-pointer hover:opacity-100  outline-0"
              />
              <div className="flex justify-between my-1">
                <Link
                  to="/play"
                  className="w-12/25 px-5 py-3 border-1 border-base-300 opacity-80 -error outline-0"
                >
                  Create Account
                </Link>
                <Link
                  to="/login"
                  className="w-12/25 px-5 py-3 border-1 border-base-300 opacity-80 -error outline-0"
                >
                  Reset Password
                </Link>
              </div>
              <Link
                to={"/claim-account"}
                className="text-center block text-sm my-8"
              >
                Click here if you have payed before but have no account
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;

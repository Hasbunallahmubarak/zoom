// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const ClaimAccount = () => {
  const [formData, setFormData] = useState({
    // image: dummyImage,
    name: "",
    number: "",
    email: "",
    password: "",
    gender: "",
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
      <div>
        <div className="bg-base-200 p-10 text-center">
          <h1 className="text-3xl font-bold  opacity-70">Claim your account</h1>
          <p className="my-3 opacity-80">
            Buy Lottery Ticket To Enter Raffle Draw
          </p>
        </div>
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
                  placeholder="Phone Number"
                  required
                  className="w-12/25 mt-5 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0"
                  name="number"
                  value={formData.number}
                  onChange={() => handleChange(event)}
                ></input>
                <input
                  type="email"
                  placeholder="Email/Phone Number"
                  required
                  className="w-12/25 mt-5 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0"
                  name="email"
                  value={formData.email}
                  onChange={() => handleChange(event)}
                ></input>
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
                name="password"
                value={formData.password}
                onChange={() => handleChange(event)}
              ></input>

              <input
                type="submit"
                value={"Claim Account"}
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
                  to="/play"
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

export default ClaimAccount;

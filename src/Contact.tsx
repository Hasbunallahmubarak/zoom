// import React from "react";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    // image: dummyImage,
    name: "",

    email: "",
    phone_number: "",
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
          <h1 className="text-3xl font-bold  opacity-70">Contact Us</h1>
          <p className="my-3 opacity-80">
            For Suggestions/Complaints fill the form below or email us at
            <a
              href="mailto:hello@zoomlifestyle.com"
              className=" text-error pl-1 hover:underline  "
            >
              hello@zoomlifestyle.com
            </a>
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
              <input
                type="email"
                placeholder="Email*"
                required
                className="w-full mt-5 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0"
                name="email"
                value={formData.email}
                onChange={() => handleChange(event)}
              ></input>
              <input
                type="email"
                placeholder="Mobile Number*"
                required
                className="w-full mt-5 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0"
                name="phone_number"
                value={formData.phone_number}
                onChange={() => handleChange(event)}
              ></input>
              <textarea
                name="message"
                required
                className="w-full mt-5 px-5 resize-none h-40 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0"
                placeholder="Your Message*"
                onChange={() => handleChange(event)}
              ></textarea>
              <input
                type="submit"
                onSubmit={() => handleSubmit(event)}
                className="w-full my-5 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

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
        <div className="select-none grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <form>
            <input
              type="text"
              placeholder="Your Name*"
              required
              name="name"
              value={formData.name}
              onChange={() => handleChange(event)}
            ></input>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={formData.email}
              onChange={() => handleChange(event)}
            ></input>
            <input
              type="email"
              placeholder="Mobile Number*"
              required
              name="phone_number"
              value={formData.phone_number}
              onChange={() => handleChange(event)}
            ></input>
            <textarea
              name="message"
              required
              placeholder="Your Message*"
              onChange={() => handleChange(event)}
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

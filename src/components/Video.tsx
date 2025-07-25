// import React from "react";
import { useState } from "react";
import { details } from "../zoom";
const Video = () => {
  const video = details[0].video;
  const [formData, setFormData] = useState({
    // image: dummyImage,
    name: "",

    email: "",
    phone_number: "",
    video: "",
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
      <form>
        <input
          type="text"
          placeholder="Your Name*"
          required
          name="name"
          value={formData.name}
          onChange={() => handleChange(event)}
          className="w-full mt-3 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0 "
        ></input>
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          value={formData.email}
          onChange={() => handleChange(event)}
          className="w-full mt-3 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0 "
        ></input>
        <input
          type="email"
          placeholder="Mobile Number*"
          required
          name="phone_number"
          value={formData.phone_number}
          onChange={() => handleChange(event)}
          className="w-full mt-3 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0 "
        ></input>
        <select
          className="select validator w-full opacity-80 my-3 "
          name="video"
          required
          onChange={() => handleChange(event)}
        >
          <option disabled selected value={formData.video}>
            Choose category:
          </option>
          {video.map((genre) => (
            <option className="border-0 outline-0">{genre}</option>
          ))}
        </select>
        <textarea
          name="message"
          required
          placeholder="Your Message*"
          onChange={() => handleChange(event)}
          className="w-full resize-none h-30 mt-3 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0 "
        ></textarea>
      </form>
    </div>
  );
};

export default Video;

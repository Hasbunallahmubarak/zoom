// import React from "react";
import { useState } from "react";
import { details } from "../zoom";
const Video = () => {
  const video = details[0].video;
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    title: "",
    phone_number: "",
    video: "",
    public_name: "",
  });
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(formData);
  }
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
          type="text"
          placeholder="Mobile Number*"
          required
          name="phone_number"
          value={formData.phone_number}
          onChange={() => handleChange(event)}
          className="w-full mt-3 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0 "
        ></input>
        <select
          className="select validator w-full border-1 border-base-300 outline-0 opacity-80 my-3  "
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
        <input
          type="text"
          placeholder="Public Name*"
          required
          name="title"
          value={formData.public_name}
          onChange={() => handleChange(event)}
          className="w-full mt-3 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0 "
        ></input>
        <input
          type="text"
          placeholder="Video Title*"
          required
          name="title"
          value={formData.title}
          onChange={() => handleChange(event)}
          className="w-full mt-3 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0 "
        ></input>
        <textarea
          name="message"
          required
          placeholder="Your Message*"
          onChange={() => handleChange(event)}
          className="w-full resize-none h-30 mt-3 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0 "
        ></textarea>
        <input
          type="url"
          placeholder="Youtube Url*"
          required
          name="url"
          value={formData.url}
          onChange={() => handleChange(event)}
          className="w-full mt-3 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0 "
        ></input>
        <input
          type="submit"
          value="Upload Video Plan"
          onSubmit={() => handleSubmit(event)}
          className="w-full text-white my-5 px-5 py-3 border-1 border-base-300 opacity-80 bg-error outline-0"
        />
      </form>
    </div>
  );
};

export default Video;

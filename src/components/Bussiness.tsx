// import React from "react";
import { useState } from "react";
import { details } from "../zoom";
const Business = () => {
  const business = details[0].business;
  const funding = details[0].funding;
  const [dummybusiness, setDummybusiness] = useState("");
  const [formData, setFormData] = useState({
    business: dummybusiness,
    name: "",
    track_title: "",
    stage_name: "",
    phone_number: "",
    funding: "",
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
  const handleChangePicture = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64String = reader.result;
        if (typeof base64String == "string") {
          localStorage.setItem("newbusiness", base64String);
          setDummybusiness(localStorage.getItem("newbusiness")!);
        }
      };
    }
  };
  console.log(formData);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Full Name*"
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
        <input
          type="text"
          placeholder="Stage Name*"
          required
          name="stage_name"
          value={formData.stage_name}
          onChange={() => handleChange(event)}
          className="w-full mt-3 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0 "
        ></input>
        <input
          type="text"
          placeholder="Track Title*"
          required
          name="track_title"
          value={formData.track_title}
          onChange={() => handleChange(event)}
          className="w-full mt-3 px-5 py-3  opacity-80 focus:border-error outline-0 "
        ></input>
        <select
          className="select validator w-full border-1 border-base-300 outline-0 opacity-80 my-3 "
          name="business"
          required
          onChange={() => handleChange(event)}
        >
          <option
            disabled
            selected
            value={formData.business}
            className="opacity-80"
          >
            Choose category:
          </option>
          {business.map((genre) => (
            <option className="">{genre}</option>
          ))}
        </select>
        <select
          className="select validator w-full border-1 border-base-300 outline-0 opacity-80 my-3 "
          name="funding"
          required
          onChange={() => handleChange(event)}
        >
          <option
            disabled
            selected
            value={formData.funding}
            className="opacity-80"
          >
            Select Funding:
          </option>
          {funding.map((fundOption: any) => (
            <option className="">{fundOption}</option>
          ))}
        </select>
        <textarea
          name="message"
          required
          placeholder="Your Message*"
          onChange={() => handleChange(event)}
          className="w-full resize-none h-30 mt-3 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0 "
        ></textarea>
        <input
          type="submit"
          placeholder="Upload Business Plan"
          onSubmit={() => handleSubmit(event)}
          className="w-full my-5 px-5 py-3 border-1 border-base-300 opacity-80 bg-error outline-0"
        />
        <p className="opacity-80 my-5">
          Choose Attachment (.pdf) &nbsp;
          <input
            type="file"
            name="business"
            accept="pdf/*"
            onChange={() => handleChangePicture}
            className="cursor-progress"
          />
        </p>
      </form>
    </div>
  );
};

export default Business;

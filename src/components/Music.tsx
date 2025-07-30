// import React from "react";
import { useState } from "react";
import { details } from "../zoom";
const Music = () => {
  const music = details[0].music;
  const [dummymusic, setDummymusic] = useState("");
  const [formData, setFormData] = useState({
    music: dummymusic,
    name: "",
    track_title: "",
    stage_name: "",
    phone_number: "",
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
          localStorage.setItem("newmusic", base64String);
          setDummymusic(localStorage.getItem("newmusic")!);
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
          name="music"
          required
          onChange={() => handleChange(event)}
        >
          <option
            disabled
            selected
            value={formData.music}
            className="opacity-80"
          >
            Choose category:
          </option>
          {music.map((genre) => (
            <option className="">{genre}</option>
          ))}
        </select>
        <textarea
          name="message"
          required
          placeholder="Short Description*"
          onChange={() => handleChange(event)}
          className="w-full resize-none h-30 mt-3 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0 "
        ></textarea>
        <input
          type="submit"
          value={"Upload Music"}
          onSubmit={() => handleSubmit(event)}
          className="w-full my-5 text-white px-5 py-3 border-1 border-base-300 opacity-80 bg-error outline-0"
        />
        <p className="opacity-80 my-5">
          Choose Attachment (.mp3) &nbsp;
          <input
            type="file"
            name="music"
            accept="audio/*"
            onChange={() => handleChangePicture}
            className="cursor-progress"
          />
        </p>
      </form>
    </div>
  );
};

export default Music;

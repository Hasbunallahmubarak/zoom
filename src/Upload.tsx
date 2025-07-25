// import React from "react";
import { useState } from "react";
import Music from "./components/Music";
const Upload = () => {
  const [formData, setFormData] = useState({
    image: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "+234",
    gender: "",
  });
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData: any) => {
      return { ...prevFormData, [name]: value };
    });
  };
  return (
    <div className="max-w-5/6 mx-auto text-center py-10">
      <h3 className="text-lg letter tracking-wider font-light">
        UPLOAD YOUR MEDIA FILES
      </h3>
      <h1 className="text-xl tracking-wide font-bold opacity-80 my-3">
        An active #Zoom subscription is required to for upload
      </h1>
      {/* name of each tab group should be unique */}
      <div className="tabs max-w-200 border-0 border-t-2 border-t-error mx-auto  my-10 shadow-xl">
        <input
          type="radio"
          name="tab"
          className="tab w-1/3 hover:bg-error "
          aria-label="Music"
          // checked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <Music />
        </div>

        <input
          type="radio"
          name="tab"
          className={`tab w-1/3 hover:bg-error `}
          aria-label="Video"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>

        <input
          type="radio"
          name="tab"
          className={`tab w-1/3 hover:bg-error `}
          aria-label="Business"
          // checked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 3
        </div>
      </div>
    </div>
  );
};

export default Upload;

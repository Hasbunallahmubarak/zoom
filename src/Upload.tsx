import Business from "./components/Bussiness";
import Music from "./components/Music";
import Video from "./components/Video";
import { useState } from "react";

const Upload = () => {
  const [videoTab, setVideoTab] = useState(true);
  const [musicTab, setMusicTab] = useState(false);
  const [businessTab, setBusinessTab] = useState(false);
  function currentTabFunc(event: any) {
    setVideoTab(event.target.ariaLabel === "Video" ? true : false);
    setMusicTab(event.target.ariaLabel === "Music" ? true : false);
    setBusinessTab(event.target.ariaLabel === "Business" ? true : false);
  }
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
          onClick={() => currentTabFunc(event)}
          className={`tab w-1/3 h-15 bg-base-100 hover:bg-error hover:text-gray-50 ${
            musicTab && "bg-error text-white"
          }`}
          aria-label="Music"
          // checked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <Music />
        </div>

        <input
          type="radio"
          name="tab"
          onClick={() => currentTabFunc(event)}
          className={`tab w-1/3 h-15 hover:bg-error hover:text-gray-50 ${
            videoTab && "bg-error text-white"
          } `}
          aria-label="Video"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <Video />
        </div>

        <input
          type="radio"
          name="tab"
          onClick={() => currentTabFunc(event)}
          className={`tab w-1/3 h-15 hover:bg-error hover:text-gray-50  ${
            businessTab && "bg-error text-white"
          } `}
          aria-label="Business"
          // checked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <Business />
        </div>
      </div>
    </div>
  );
};

export default Upload;

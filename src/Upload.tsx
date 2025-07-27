import Business from "./components/Bussiness";
import Music from "./components/Music";
import Video from "./components/Video";
import { useState } from "react";

const Upload = () => {
  const [currentTab, setCurrentTab] = useState(false);
  function currentTabFunc(event: any) {
    setCurrentTab((prevValue) => !prevValue);
    console.log(event.target);
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
          className={`tab w-1/3 bg-base-100 hover:bg-error ${
            currentTab && "bg-error"
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
          className={`tab w-1/3 hover:bg-error ${currentTab && "bg-error"} `}
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
          className={`tab w-1/3 hover:bg-error ${currentTab && "bg-error"} `}
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

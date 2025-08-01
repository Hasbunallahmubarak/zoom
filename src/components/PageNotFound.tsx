import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen bg-base-200 border-3 flex justify-center content-center">
      <div className=" p-10 ">
        <h1 className="text-3xl font-bold  opacity-70">Page Not found</h1>
        <Link to={"/"}>Back to Homepage</Link>
      </div>
    </div>
  );
};

export default PageNotFound;

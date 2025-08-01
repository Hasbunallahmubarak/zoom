import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-10 mt-[-20vh]  opacity-70">
          Page Not found
        </h1>
        <Link to={"/"} className="btn btn-error">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;

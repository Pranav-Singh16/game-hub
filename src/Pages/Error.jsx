import { Link, useRouteError } from "react-router-dom";
import img from "../assets/images/404-not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-center px-4">
      <img src={img} alt="not found" className="max-w-md mb-8" />
      <h3 className="text-2xl font-semibold mb-2">Ohh! Page not found</h3>
      <p className="text-gray-600 mb-6">
        We can't seem to find the page you're looking for
      </p>
      <Link
        to="/"
        className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-2 rounded"
      >
        Back Home
      </Link>
    </div>
  );
};
export default Error;

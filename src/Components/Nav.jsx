import { Link } from "react-router-dom";
import { CategoriesNav } from "./Categories";

export const Nav = () => {
  return (
    <nav className="sticky top-0 bg-gray-800 py-4 z-10">
      <ul className="flex justify-center">
        <li className="mr-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 font-medium text-lg"
          >
            Home
          </Link>
        </li>
        <li className="mr-4">
          <Link
            to="/login"
            className="text-white hover:text-gray-300 font-medium text-lg"
          >
            Login
          </Link>
        </li>
        <li className="mr-4">
          <Link
            to="/reviews"
            className="text-white hover:text-gray-300 font-medium text-lg"
          >
            Write A Review
          </Link>
        </li>
        <li>{/* <CategoriesNav /> */}</li>
      </ul>
    </nav>
  );
};

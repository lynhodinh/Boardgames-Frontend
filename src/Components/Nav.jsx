const { Link } = require("react-router-dom");

export const Nav = () => {
  return (
    <nav>
      <ul className="flex">
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
      </ul>
    </nav>
  );
};


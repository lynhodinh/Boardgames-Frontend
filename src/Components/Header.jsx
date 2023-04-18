const React = require("react");
const { Link } = require("react-router-dom");

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-center text-white font-bold text-3xl">NC Board Games</h1>
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
      </div>
    </header>
  );
};

export default Header;
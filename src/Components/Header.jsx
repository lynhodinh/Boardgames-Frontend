import { Nav } from "./Nav";

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-center text-white font-bold text-3xl">NC Board Games</h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex gap-4 justify-center items-center p-4">
      <Link
        to="/"
        className="hover:text-red-500 duration-300 font-semibold hover:scale-110"
      >
        Home
      </Link>
      <Link
        to="/Shop"
        className="hover:text-red-500 duration-300 font-semibold hover:scale-110"
      >
        Shop
      </Link>
      <Link
        to="/Contact"
        className="hover:text-red-500 duration-300 font-semibold hover:scale-110"
      >
        Contact
      </Link>
      <Link
        to="/About"
        className="hover:text-red-500 duration-300 font-semibold hover:scale-110"
      >
        About
      </Link>
    </div>
  );
};

export { NavBar };

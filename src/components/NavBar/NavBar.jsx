import { Link } from "react-router-dom";

const NavBar = ({ user, onLogout }) => {
  return (
    <div className="py-4 px-6 bg-blue-500 text-white flex justify-between items-center gap-4">
      {user && (
        <Link to="/" className="text-2xl font-bold">
          BookStore
        </Link>
      )}
      {!user && (
        <Link to="/auth" className="text-2xl font-bold">
          BookStore
        </Link>
      )}
      {user && (
        <nav className="flex gap-6">
          <Link
            to="/books/create"
            className="text-lg transition-all duration-150 ease-in hover:underline w-fit"
          >
            Create New Book
          </Link>
          <button
            className="text-lg transition-all duration-150 ease-in hover:underline w-fit"
            onClick={onLogout}
          >
            Logout
          </button>
        </nav>
      )}
    </div>
  );
};

export default NavBar;

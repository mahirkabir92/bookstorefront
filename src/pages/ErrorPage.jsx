import { Link } from "react-router-dom";
import { getUser } from "../utilities/user-services";

const ErrorPage = () => {
  const user = getUser();

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <h1 className="text-4xl font-bold text-center">404 Page Not Found</h1>
      {user && (
        <Link to="/" className="text-lg text-blue-500 underline">
          Go Back to Home Page
        </Link>
      )}
      {!user && (
        <Link to="/auth" className="text-lg text-blue-500 underline">
          Login to Continue
        </Link>
      )}
    </div>
  );
};

export default ErrorPage;

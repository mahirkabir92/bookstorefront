import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import AuthPage from "./pages/AuthPage/AuthPage";
import UserLogOut from "./components/UserLogOut/UserLogOut";
import { useEffect, useState } from "react";
import { getUser, logOut } from "./utilities/user-services";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }

    //eslint-disable-next-line
  }, [user]);

  const userLoginHandler = (token) => {
    setUser(token);
    navigate("/");
  };

  const logoutHandler = () => {
    logOut();
    setUser(null);
    navigate("/auth");
  };

  return (
    <>
      <NavBar user={user} onLogout={logoutHandler} />
      <Routes>
        {/* show these routes if the user is logged in */}
        {user && <Route path="/" element={<Home />} />}
        {user && <Route path="/books/create" element={<CreateBook />} />}
        {user && <Route path="/books/details/:id" element={<ShowBook />} />}
        {user && <Route path="/books/edit/:id" element={<EditBook />} />}
        {user && <Route path="/books/delete/:id" element={<DeleteBook />} />}

        {/* Route for the authentication page */}
        {!user && (
          <Route
            path="/auth"
            element={<AuthPage setUser={userLoginHandler} />}
          />
        )}

        {/* Route for the user logout */}
        {user && <Route path="/logout" element={<UserLogOut />} />}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import AuthPage from './pages/AuthPage/AuthPage';
import UserLogOut from './components/UserLogOut/UserLogOut';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />

      {/* Route for the authentication page */}
      <Route path="/auth" element={<AuthPage />} />

      {/* Route for the user logout */}
      <Route path="/logout" element={<UserLogOut />} />
    </Routes>
  );
};

export default App;

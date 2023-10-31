import React, { useState } from 'react';
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm'; // Adjust the path here
import LoginForm from '../../components/LoginForm/LoginForm'; // Adjust the path here
import Logo from '../../components/Logo/Logo'; // Adjust the path here

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <main className="AuthPage">
      <div>
        <Logo /> {/* Render the Logo component */}
        <h3 onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 'SIGN UP' : 'LOG IN'}
        </h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}

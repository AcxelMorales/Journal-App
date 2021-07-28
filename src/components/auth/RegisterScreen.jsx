import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          type="text"
          autoComplete="off"
          placeholder="John Doe"
          name="name"
          className="auth__input"
        />
        <input
          type="text"
          autoComplete="off"
          placeholder="email@email.com"
          name="email"
          className="auth__input"
        />
        <input
          type="password"
          autoComplete="off"
          placeholder="******"
          name="password"
          className="auth__input"
        />
        <input
          type="password"
          autoComplete="off"
          placeholder="******"
          name="password-confirm"
          className="auth__input"
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>
        <Link to="/auth/login">¿Already registered?</Link>
      </form>
    </>
  );
};

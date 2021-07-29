import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';

import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: 'acxel@email.com',
    password: 123456,
  });

  const { email, password } = formValues;

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(startLoginEmailPassword());
  };

  const handleGoogleLogin = () => dispatch(startGoogleLogin());

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="email@email.com"
          name="email"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          autoComplete="off"
          placeholder="******"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block" type="submit">
          Login
        </button>
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register">Create new account</Link>
      </form>
    </>
  );
};

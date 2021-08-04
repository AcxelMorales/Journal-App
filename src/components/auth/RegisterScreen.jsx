import React from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
  //TODO: Eliminar data hardcode
  const [{ name, email, password, passwordConfirm }, handleInputChange, reset] = useForm({
    name: 'Acxel',
    email: 'acxel@email.com',
    password: 123456,
    passwordConfirm: 123456,
  });

  const handleOnSubmit = evt => {
    evt.preventDefault();
    reset();
  };

  const isFormValid = () => {

  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="John Doe"
          name="name"
          className="auth__input"
          value={name}
          onChange={handleInputChange}
        />
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
        <input
          type="password"
          autoComplete="off"
          placeholder="******"
          name="password-confirm"
          className="auth__input"
          value={passwordConfirm}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>
        <Link to="/auth/login">¿Already registered?</Link>
      </form>
    </>
  );
};

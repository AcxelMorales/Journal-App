import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';

import { setError, removeError } from '../../actions/ui';

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  //TODO: Eliminar data hardcode
  const [{ name, email, password, passwordConfirm }, handleInputChange] = useForm({
    name: 'Acxel',
    email: 'acxel@email.com',
    password: 123456,
    passwordConfirm: 123456,
  });

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const valid = isFormValid();

    if (valid) {
      console.log(true);
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if (password !== passwordConfirm || password.length < 5) {
      dispatch(setError('Password should be at leaste 6 characters and match each other'));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleOnSubmit}>
        <div className="auth__error-alert">
          Hola mundo
        </div>
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
          name="passwordConfirm"
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

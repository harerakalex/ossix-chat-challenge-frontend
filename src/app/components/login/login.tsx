import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './login.scss';
import { AppState } from '../../redux';
import { ILogin } from '../../redux/interfaces';
import { login } from './loginAction';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated }: ILogin = useSelector(
    (state: AppState) => state.login,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) window.location.assign('/chats');
  }, [isAuthenticated]);

  const submitForm = (event: any) => {
    event.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <section className="login-page-container">
      <div className="login-page-container__content-content">
        <div className="login-page-container__heading-container">
          <h1>Chatti</h1>
        </div>
        <form
          onSubmit={submitForm}
          className="login-page-container__form-container">
          <p className="login-page-container__label">Username</p>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="login-page-container__input-field"
            onChange={(e) => setUsername(e.target.value)}
          />

          <p className="login-page-container__label">Password</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-page-container__input-field"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-page-container__button-container">
            <p className="login-page-container__hiden">Hidden</p>
            <button type="submit" className="login-page-container__signin-btn">
              Sign in
            </button>
          </div>
          <Link to="signup">
            <button className="login-page-container__no-account-btn">
              Don't have an account
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;

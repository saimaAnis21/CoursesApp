import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Route, NavLink,
} from 'react-router-dom';
import SignUpForm from '../containers/SignUpForm';
import SignInForm from '../containers/SignInForm';
import Course from '../containers/Course';
import { GetAuthToken, GetEmail } from '../logic/localStorage';
import '../styles.css';

const App = () => {
  const [signedin, setSignedin] = useState();

  useEffect(() => {
    const token = GetAuthToken();
    const email = GetEmail();
    if (token === null || email === null) {
      setSignedin(false);
    } else {
      setSignedin(true);
    }
  });

  return (
    <div>
      <h1 className="mt-50 text-decoration-underlin text-warning text-center">Crash Coursera</h1>
      <BrowserRouter>
        <div className="txt-align">
          <NavLink className="navbar-item" activeClassName="active-link" to="/signin">
            Sign in |
          </NavLink>
          <NavLink className="navbar-item" activeClassName="active-link" to="/signup">
          &nbsp;Sign up |
          </NavLink>
          <NavLink className="navbar-item" activeClassName="active-link" to="/my_courses">
          &nbsp;My Courses
          </NavLink>
        </div>

        <Route exact path="/" component={signedin ? Course : SignInForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/signin" component={SignInForm} />
        <Route exact path="/my_courses" component={Course} />
      </BrowserRouter>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchAuthToken from '../logic/fetchAuthToken';
import { SaveAuthToken } from '../logic/localStorage';
import { changeLogInfoAction } from '../actions/index';
import '../styles.css';

const SignInForm = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msgs, setMsgs] = useState();
  const history = useHistory();
  const { logInfo } = props;

  const inputChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const getData = async () => {
    const queries = {
      email,
      password,
    };
    const response = await fetchAuthToken(queries, 'signin');
    if (response.auth_token) {
      SaveAuthToken(response.auth_token);
      history.push('/my_courses');
      logInfo({
        logged_in: true,
        email,
      });
    } else if (response.message) {
      setMsgs(response.message);
    }
  };

  const btnClick = async (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className=" p-20 txt-align mx-auto mt-50 w-50 border border-primary rounded">
      <p>
        {msgs}
      </p>
      <p>
        Don&#39;t have an account!
        <a className="" href="/signup">  Sign Up!</a>
      </p>
      <form className="">
        <div className="mt-10 mb-10 d-flex flex-column align-items-center mx-auto w-75 mx-auto">

          {/* <div className="d-flex justify-content-between w-75 mb-10">
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => inputChange(e)}
            />
          </div> */}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Email</span>
            </div>
            <input type="text" onChange={(e) => inputChange(e)} id="email" name="email" className="form-control" placeholder="" aria-describedby="basic-addon1" />
          </div>

          <div className="d-flex justify-content-between w-75 mb-10">
            <span>Password:</span>
            <input
              type="text"
              id="password"
              name="password"
              onChange={(e) => inputChange(e)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            onClick={(e) => btnClick(e)}
          >
            Sign In
          </button>
        </div>

      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logInfo: (info) => {
    dispatch(changeLogInfoAction(info));
  },
});

SignInForm.propTypes = {
  logInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignInForm);

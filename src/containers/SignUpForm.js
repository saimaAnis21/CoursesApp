import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchAuthToken from '../logic/fetchAuthToken';
import { SaveAuthToken, SaveEmail } from '../logic/localStorage';
import { changeLogInfoAction } from '../actions/index';
import '../styles.css';

const SignUpForm = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [pwd, setPwd] = useState();
  const [msgs, setMsgs] = useState();
  const history = useHistory();
  const { logInfo } = props;

  const inputChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else if (e.target.name === 'pwd') {
      setPwd(e.target.value);
    }
  };

  const getData = async () => {
    const queries = {
      name,
      email,
      password,
      pwd,
    };
    const response = await fetchAuthToken(queries, 'signup');
    if (response.auth_token) {
      SaveAuthToken(response.auth_token);
      SaveEmail(email);
      history.push('/my_courses');
      logInfo({
        logged_in: true,
        email,
      });
    } else if (response.message) {
      setMsgs(`${response.message}!!`);
    }
  };

  const btnClick = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className=" p-20 txt-align mx-auto mt-50 ">
      <p className="text-danger">
        {msgs}
      </p>
      <form className="">
        <div className="mt-10 mb-10 d-flex flex-column align-items-center mx-auto ">

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">User Name</span>
            </div>
            <input type="text" onChange={(e) => inputChange(e)} id="name" name="name" className="form-control" />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Email</span>
            </div>
            <input type="text" onChange={(e) => inputChange(e)} id="email" name="email" className="form-control" />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Password</span>
            </div>
            <input type="password" onChange={(e) => inputChange(e)} id="password" name="password" className="form-control" />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Confirm Password</span>
            </div>
            <input type="password" onChange={(e) => inputChange(e)} id="pwd" name="pwd" className="form-control" />
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
            onClick={(e) => btnClick(e)}
          >
            Sign Up
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

SignUpForm.propTypes = {
  logInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignUpForm);

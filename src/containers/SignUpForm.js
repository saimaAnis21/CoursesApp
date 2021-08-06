import React, { useState } from 'react';
import fetchAuthToken from '../logic/fetchAuthToken';
import { SaveAuthToken } from '../logic/localStorage';
import '../styles.css';

const SignUpForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [pwd, setPwd] = useState();

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
    // console.log(response.auth_token);
    SaveAuthToken(response.auth_token);
  };

  const btnClick = (e) => {
    e.preventDefault();
    // console.log(name + email + password + pwd);
    getData();
  };

  return (
    <div className=" p-20 txt-align mx-auto mt-50 w-50 border border-primary rounded">
      <form className="">
        <div className="mt-10 mb-10 d-flex flex-column align-items-center mx-auto w-75 mx-auto">
          <div className="d-flex justify-content-between w-75 mb-10">
            <span>User Name:</span>
            <input type="text" id="name" name="name" onChange={(e) => inputChange(e)} />
          </div>

          <div className="d-flex justify-content-between w-75 mb-10">
            <span>Email:</span>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => inputChange(e)}
            />
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

          <div className="d-flex justify-content-between w-75 mb-10">
            <span>Confirm Password:</span>
            <input
              type="text"
              id="pwd"
              name="pwd"
              onChange={(e) => inputChange(e)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            onClick={(e) => btnClick(e)}
          >
            Sign Up
          </button>
        </div>

      </form>
    </div>
  );
};

export default SignUpForm;

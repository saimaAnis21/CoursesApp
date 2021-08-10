import React, { useState, useEffect } from 'react';
import CourseAddForm from '../components/CourseAddForm';
import CourseDisplay from '../components/CourseDisplay';
import { GetAuthToken, GetEmail } from '../logic/localStorage';
import '../styles.css';

const Course = () => {
  const [hasToken, setHasToken] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    const token = GetAuthToken();
    if (token === null) {
      setHasToken(false);
    } else {
      setHasToken(true);
      setEmail(GetEmail());
    }
  });

  return (
    <div className="txt-align mt-10">

      { hasToken ? (
        <p className="text-success">
          {email}
          {' '}
          is logged in!!
        </p>
      ) : <p>Please Sign in or Sign up if you do not have an account!!</p>}
      { hasToken ? <CourseAddForm /> : <p><a href="/signin">Sign in!</a></p>}
      { hasToken ? <CourseDisplay /> : (
        <p><a href="/signup">Sign up!</a></p>
      )}
    </div>
  );
};

export default Course;

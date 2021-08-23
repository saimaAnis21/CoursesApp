import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import CourseAddForm from '../components/CourseAddForm';
import CourseDisplay from '../components/CourseDisplay';
import { GetAuthToken, GetEmail } from '../logic/localStorage';
// import { changeCoursesAction } from '../actions/index';
// import { addCourseAction } from '../actions/index';
// import addCourse from '../logic/addCourse';
// import fetchCourses from '../logic/fetchCourses';
import '../styles.css';

const Course = () => {
  const [hasToken, setHasToken] = useState();
  const [email, setEmail] = useState();
  // const [errormsg, setErrormsg] = useState('');
  // const { putCourses } = props;

  useEffect(() => {
    const token = GetAuthToken();
    if (token === null) {
      setHasToken(false);
    } else {
      setHasToken(true);
      setEmail(GetEmail());
    }
  }, []);

  return (
    <div className="txt-align mt-10">

      { hasToken ? (
        <div>
          <p className="text-success">
            {email}
            {' '}
            is logged in!!
          </p>
          <CourseAddForm />
          <CourseDisplay />
        </div>
      ) : <p>Please Sign in or Sign up if you do not have an account!!</p>}
    </div>
  );
};

export default Course;

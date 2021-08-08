import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCoursesAction } from '../actions/index';
import fetchCourses from '../logic/fetchCourses';
import CourseAddForm from '../components/CourseAddForm';
import CourseDisplay from '../components/CourseDisplay';
import { GetAuthToken, GetEmail } from '../logic/localStorage';
import '../styles.css';

const Course = (props) => {
  const [hasToken, setHasToken] = useState();
  const [email, setEmail] = useState();
  const { putCourses } = props;

  const getCourses = async (token) => {
    const response = await fetchCourses(token);
    console.log(response);
    putCourses(response);
  };

  useEffect(() => {
    const token = GetAuthToken();
    if (token === null) {
      setHasToken(false);
    } else {
      setHasToken(true);
      setEmail(GetEmail());
      getCourses(token);
    }
  });

  return (
    <div className="txt-align mt-50">

      { hasToken ? (
        <p>
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

const mapDispatchToProps = (dispatch) => ({
  putCourses: (data) => {
    dispatch(changeCoursesAction(data));
  },
});

// const mapStateToProps = (state) => ({
//   info: state.log_info,
// });

Course.propTypes = {
  // info: PropTypes.shape({
  //   logged_in: PropTypes.bool,
  //   email: PropTypes.string,
  // }).isRequired,
  putCourses: PropTypes.func.isRequired,

};

export default connect(null, mapDispatchToProps)(Course);

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCoursesAction } from '../actions/index';
import fetchCourses from '../logic/fetchCourses';
import CourseAddForm from '../components/CourseAddForm';
import CourseDisplay from '../components/CourseDisplay';
import { GetAuthToken } from '../logic/localStorage';
import '../styles.css';

const Course = (props) => {
  const { info, putCourses } = props;

  const getCourses = async (token) => {
    const response = await fetchCourses(token);
    console.log(response);
    putCourses(response);
  };

  useEffect(() => {
    const token = GetAuthToken();
    getCourses(token);
  });

  return (
    <div className="txt-align mt-50">
      <p>
        <span>
          {info.email}
        </span>
        is logged in
      </p>
      {/* { info.logged_in ? <CourseAddForm /> : <a className="" href="/signin">
      Please Sign in </a>} */}
      <CourseAddForm />
      <CourseDisplay />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  putCourses: (data) => {
    dispatch(changeCoursesAction(data));
  },
});

const mapStateToProps = (state) => ({
  info: state.log_info,
});

Course.propTypes = {
  info: PropTypes.shape({
    logged_in: PropTypes.bool,
    email: PropTypes.string,
  }).isRequired,
  putCourses: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Course);

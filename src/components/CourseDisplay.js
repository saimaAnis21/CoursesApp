import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCoursesAction } from '../actions/index';
import fetchCourses from '../logic/fetchCourses';
import delCourse from '../logic/delCourse';
import { GetAuthToken } from '../logic/localStorage';
import '../styles.css';

const CourseDisplay = (props) => {
  const { courses, putCourses } = props;

  const getCourses = async () => {
    try {
      const token = GetAuthToken();
      const response = await fetchCourses(token);
      putCourses(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCourses();
  });

  const DeleteCourse = async (e, courseID) => {
    e.preventDefault();
    const token = GetAuthToken();
    const response = await delCourse(courseID, token);
    console.log(response);
    getCourses();
  };

  return (
    <div className="mx-auto ">
      <table className="table table-striped mt-10 ">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Course Name</th>
            <th scope="col">Course Duration</th>
            <th scope="col">Course Category</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.duration}</td>
              <td>{course.category}</td>
              <td>
                <button
                  type="submit"
                  className="btn btn-danger btn-sm btn-block"
                  onClick={(e) => DeleteCourse(e, course.id)}

                >
                  DEL
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  courses: state.courses,
});

const mapDispatchToProps = (dispatch) => ({
  putCourses: (data) => {
    dispatch(changeCoursesAction(data));
  },
});

CourseDisplay.propTypes = {
  courses: PropTypes.instanceOf(Array).isRequired,
  putCourses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDisplay);

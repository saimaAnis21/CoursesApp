import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import delCourse from '../logic/delCourse';
import { GetAuthToken } from '../logic/localStorage';
import '../styles.css';

const CourseDisplay = (props) => {
  const { courses } = props;

  useEffect(() => {
    console.log(courses);
  });

  const DeleteCourse = async (e, courseID) => {
    e.preventDefault();
    const token = GetAuthToken();
    const response = await delCourse(courseID, token);
    console.log(response);
  };

  return (
    <div>
      <table className="table table-striped mt-10 mx-auto w-75">
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
              <td>{course.category_name_id}</td>
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

CourseDisplay.propTypes = {
  courses: PropTypes.instanceOf(Array).isRequired,

};

export default connect(mapStateToProps)(CourseDisplay);

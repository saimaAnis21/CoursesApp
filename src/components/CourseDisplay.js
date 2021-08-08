import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles.css';

const CourseDisplay = (props) => {
  const { courses } = props;

  useEffect(() => {
    console.log(courses);
  });

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

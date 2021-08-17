import {
  PropTypes,
} from 'prop-types';
import { connect } from 'react-redux';
import delCourse from '../logic/delCourse';
import { GetAuthToken } from '../logic/localStorage';
import { changeCoursesAction } from '../actions/index';

const DelBtn = (props) => {
  const { id, courses, putCourses } = props;

  const DeleteCourse = async (e) => {
    e.preventDefault();
    const token = GetAuthToken();
    const response = await delCourse(id, token);
    console.log(response);
    const arr = courses.filter((value) => value.id !== id);
    putCourses(arr);
  };

  return (
    <button
      type="submit"
      className="btn btn-danger btn-sm btn-block"
      onClick={(e) => DeleteCourse(e)}
    >
      DEL
    </button>
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

DelBtn.propTypes = {
  id: PropTypes.number.isRequired,
  courses: PropTypes.instanceOf(Array).isRequired,
  putCourses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DelBtn);

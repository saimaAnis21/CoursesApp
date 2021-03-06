import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCourseAction } from '../actions/index';
import { GetAuthToken } from '../logic/localStorage';
import addCourse from '../logic/addCourse';
import CategoryNamesSelect from './CategoryNamesSelect';
import '../styles.css';

const CourseAddForm = (props) => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState(0);
  const [category, setCategory] = useState(0);
  const [errormsg, setErrormsg] = useState('');
  const { addCors } = props;

  const createCourse = async () => {
    const obj = {
      title,
      duration,
      category,
    };
    const token = GetAuthToken();
    const response = await addCourse(obj, token);
    if (response.message) {
      setErrormsg(response.message);
    } else {
      setErrormsg(response.message);
      addCors(response[0]);
    }
  };

  const btnClick = (e) => {
    e.preventDefault();
    if (category === undefined || title === undefined || duration === undefined) {
      setErrormsg('Category, Title and Duration are mandatory fields!!');
    } else {
      createCourse();
    }
  };

  useEffect(() => {
    setErrormsg('');
  }, []);

  return (
    <div className=" p-20 txt-align mx-auto mt-10 ">
      <h1>Create a course!</h1>
      <p className="text-danger">{errormsg}</p>
      <form className="">
        <div className="mt-10 mb-10 d-flex flex-column ">

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Course Title</span>
            </div>
            <input type="text" onChange={(e) => setTitle(e.target.value)} id="title" name="title" className="form-control" placeholder="e.g. Crash Course in Java" aria-describedby="basic-addon1" />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Duration(hrs)</span>
            </div>
            <input type="text" onChange={(e) => setDuration(e.target.value)} id="duration" name="duration" className="form-control" placeholder="e.g. 1.0 or 2.5" aria-describedby="basic-addon1" />
          </div>

          <div className="d-flex justify-content-between w-75 mb-10">
            <CategoryNamesSelect onInputChange={(value) => setCategory(value)} />
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-sm btn-block"
            onClick={(e) => btnClick(e)}
          >
            Create Course
          </button>
        </div>

      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCors: (data) => {
    dispatch(addCourseAction(data));
  },
});

CourseAddForm.propTypes = {

  addCors: PropTypes.func.isRequired,

};

export default connect(null, mapDispatchToProps)(CourseAddForm);

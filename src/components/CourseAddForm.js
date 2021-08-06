import React, { useState, useEffect } from 'react';
import fetchCategoryNames from '../logic/fetchCategoryNames';
// import { GetAuthToken } from '../logic/localStorage';
import CategoryNamesSelect from './CategoryNamesSelect';
import '../styles.css';

const CourseAddForm = () => {
  const [title, setTitle] = useState();
  const [duration, setDuration] = useState();
  const [category, setCategory] = useState();
  const [categorynames, setCategoryNames] = useState([{ id: 0, name: '--' }]);

  const getData = async () => {
    const response = await fetchCategoryNames();
    setCategoryNames(response);
    // console.log(categorynames);
  };

  useEffect(() => {
    // console.log(GetAuthToken());
    getData();
  });

  const inputChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'duration') {
      setDuration(e.target.value);
    } else if (e.target.name === 'category') {
      setCategory(e.target.value);
    }
  };

  const btnClick = (e) => {
    e.preventDefault();
    console.log(title + duration + category);
  };

  return (
    <div className=" p-20 txt-align mx-auto mt-50 w-50 border border-primary rounded">
      <form className="">
        <div className="mt-10 mb-10 d-flex flex-column align-items-center mx-auto w-75 mx-auto">

          <div className="d-flex justify-content-between w-75 mb-10">
            <span>Title:</span>
            <input
              type="text"
              id="title"
              name="title"
              onChange={(e) => inputChange(e)}
            />
          </div>

          <div className="d-flex justify-content-between w-75 mb-10">
            <span>Duration:</span>
            <input
              type="text"
              id="duration"
              name="duration"
              onChange={(e) => inputChange(e)}
            />
          </div>

          <div className="d-flex justify-content-between w-75 mb-10">
            <span>Category:</span>
            <CategoryNamesSelect />            
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            onClick={(e) => btnClick(e)}
          >
            Create Course
          </button>
        </div>

      </form>
    </div>
  );
};

export default CourseAddForm;

import {
  PropTypes,
} from 'prop-types';
import React, { useState, useEffect } from 'react';
import fetchCategoryNames from '../logic/fetchCategoryNames';
import '../styles.css';

const CategoryNamesSelect = (props) => {
  const { onInputChange } = props;

  const [categorynames, setCategorynames] = useState([{ id: 0, name: '--' }]);

  const getData = async () => {
    const catnames = await fetchCategoryNames();
    const arr = [{ id: '', name: '--' }];
    catnames.forEach((cat) => { arr.push(cat); });
    setCategorynames(arr);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="input-group mb-3 ">
      <div className="input-group-prepend">
        <span className="input-group-text ">Categories</span>
      </div>
      <select className="custom-select w-50" name="category" id="category" onChange={(e) => onInputChange(e)}>
        {categorynames.map((opt) => (
          <option
            key={opt.id}
            value={opt.id}
          >
            {opt.name}
          </option>
        ))}
        ;
      </select>
    </div>
  );
};

CategoryNamesSelect.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default CategoryNamesSelect;

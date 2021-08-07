import {
  PropTypes,
} from 'prop-types';
import '../styles.css';

const CategoryNamesSelect = (props) => {
  const { options, onInputChange } = props;

  return (

    <div className="input-group mb-3 ">
      <div className="input-group-prepend">
        <span className="input-group-text ">Categories</span>
      </div>
      <select className="custom-select w-50" name="category" id="category" onChange={(e) => onInputChange(e)}>
        {options.map((opt) => (
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
  options: PropTypes.instanceOf(Array).isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CategoryNamesSelect;

// <div>
// { /* <select name="category" id="category" onChange={(e) => onInputChange(e)}>
//         {options.map((opt) => (
//           <option
//             key={opt.id}
//             value={opt.id}
//           >
//             {opt.name}
//           </option>
//         ))}
//         ;
//       </select> */ }
// </div>

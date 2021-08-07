const CHANGE_COURSES = 'CHANGE_COURSES';
const ADD_COURSES = 'ADD_COURSES';

const coursesReducer = (State = {}, action) => {
  switch (action.type) {
    case CHANGE_COURSES:
      return action.payload;
    case ADD_COURSES:
      return [...State, action.payload];
    default:
      return State;
  }
};

export default coursesReducer;

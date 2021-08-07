const CHANGE_LOGINFO = 'CHANGE_LOGINFO';

const logInfoReducer = (State = {}, action) => {
  switch (action.type) {
    case CHANGE_LOGINFO:
      return action.payload;
    default:
      return State;
  }
};

export default logInfoReducer;

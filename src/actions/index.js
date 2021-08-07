const CHANGE_LOGINFO = 'CHANGE_LOGINFO';
const CHANGE_COURSES = 'CHANGE_COURSES';
const ADD_COURSES = 'ADD_COURSES';

const changeLogInfoAction = (info) => ({
  type: CHANGE_LOGINFO,
  payload: info,
});

const changeCoursesAction = (data) => ({
  type: CHANGE_COURSES,
  payload: data,
});

const addCourseAction = (newcourse) => ({
  type: ADD_COURSES,
  payload: newcourse,
});

export { changeCoursesAction, changeLogInfoAction, addCourseAction };

import baseURL from './variables';

const delCourse = async (courseID, token) => {
  const url = `${baseURL}/courses/${courseID}`;

  let data = {};
  try {
    fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    data = 'SUCCESS';
  } catch (e) {
    data = 'ERROR';
  }

  return data;
};

export default delCourse;

const delCourse = async (courseID, token) => {
  const url = `https://course-api-101.herokuapp.com/courses/${courseID}`;

  let data = {};
  try {
    // const response = await
    fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    data = 'SUCCESS';
    // await response.json();
  } catch (e) {
    data = 'ERROR';
  }

  return data;
};

export default delCourse;

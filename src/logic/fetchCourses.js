const fetchCourses = async (token) => {
  const url = 'https://course-api-101.herokuapp.com/courses';

  let data = {};
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    data = await response.json();
  } catch (e) {
    data = 'ERROR';
  }

  return data;
};

export default fetchCourses;

import baseURL from './variables';

const fetchCourses = async (token) => {
  const url = `${baseURL}/courses`;

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

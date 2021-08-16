import baseURL from './variables';

const addCourse = async (obj, token) => {
  const url = `${baseURL}/courses?`;

  let data = {};
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        title: obj.title,
        duration: obj.duration,
        category_name_id: obj.category,
      }),
    });
    data = await response.json();
  } catch (e) {
    data = 'ERROR';
  }

  return data;
};

export default addCourse;

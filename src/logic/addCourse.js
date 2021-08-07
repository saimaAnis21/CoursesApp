const addCourse = async (obj, token) => {
  const url = `https://course-api-101.herokuapp.com/courses?title=${obj.title}&duration=${obj.duration}&category_name_id=${obj.category}`;

  let data = {};
  try {
    const response = await fetch(url, {
      method: 'POST',
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

export default addCourse;

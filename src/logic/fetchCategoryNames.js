const fetchCategoryNames = async () => {
  const url = 'https://course-api-101.herokuapp.com/category_names';

  let data = {};
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    });

    data = await response.json();
  } catch (e) {
    data = 'ERROR';
  }
  return data;
};

export default fetchCategoryNames;

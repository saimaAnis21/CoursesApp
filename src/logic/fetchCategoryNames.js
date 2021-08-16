import baseURL from './variables';

const fetchCategoryNames = async () => {
  const url = `${baseURL}/category_names`;

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

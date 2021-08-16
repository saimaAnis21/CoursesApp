import baseURL from './variables';

const fetchAuthToken = async (obj, form) => {
  let params = { };
  let url = '';

  if (form === 'signup') {
    url = `${baseURL}/signup?`;
    params = {
      name: obj.name,
      email: obj.email,
      password: obj.password,
      password_confirmation: obj.pwd,
    };
  } else if (form === 'signin') {
    url = `${baseURL}/authentication?`;
    params = {
      email: obj.email,
      password: obj.password,
    };
  }

  let data = {};
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(params),
    });

    data = await response.json();
  } catch (e) {
    data = 'ERROR';
  }

  return data;
};

export default fetchAuthToken;

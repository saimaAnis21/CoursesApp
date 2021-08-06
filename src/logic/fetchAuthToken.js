const fetchAuthToken = async (obj, form) => {
  // console.log(obj.name + obj.email + obj.password + obj.pwd);
  let url = '';
  if (form === 'signup') {
    url = `https://course-api-101.herokuapp.com/signup?name=${obj.name}&email=${obj.email}&password=${obj.password}&password_confirmation=${obj.pwd}`;
  } else if (form === 'signin') {
    url = `https://course-api-101.herokuapp.com/auth/login?email=${obj.email}&password=${obj.password}`;
  }

  let data = {};
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
    });

    data = await response.json();
  } catch (e) {
    data = 'ERROR';
  }

  return data;
};

export default fetchAuthToken;

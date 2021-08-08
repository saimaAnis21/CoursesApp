const GetAuthToken = () => {
  const str = localStorage.getItem('authToken');
  const authToken = JSON.parse(str);
  return authToken;
};

const SaveAuthToken = (authToken) => {
  const str = JSON.stringify(authToken);
  localStorage.setItem('authToken', str);
};

const GetEmail = () => {
  const str = localStorage.getItem('email');
  const email = JSON.parse(str);
  return email;
};

const SaveEmail = (email) => {
  const str = JSON.stringify(email);
  localStorage.setItem('email', str);
};

export {
  GetAuthToken, SaveAuthToken, GetEmail, SaveEmail,
};

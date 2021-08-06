const GetAuthToken = () => {
  const str = localStorage.getItem('authToken');
  const authToken = JSON.parse(str);
  return authToken;
};

const SaveAuthToken = (authToken) => {
  const str = JSON.stringify(authToken);
  localStorage.setItem('authToken', str);
};

export { GetAuthToken, SaveAuthToken };

import axios from 'axios';

// const config = {
//     baseUrl :'https://reqres.in/api';
// }

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  //   return axios.post(`${config.baseUrl}/register`, userData);
  return instance.post('register', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };

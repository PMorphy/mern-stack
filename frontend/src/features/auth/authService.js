import axios from 'axios';

const URL = '/api/users/';

const register = async (userData) => {
  const { data } = await axios.post(URL, userData);

  if (data) localStorage.setItem('user', JSON.stringify(data));

  return data;
};

const login = async (userData) => {
  const response = await axios.post('/api/users/login', userData);

  if (response.data)
    localStorage.setItem('user', JSON.stringify(response.data));

  return response.data;
};

const logout = async () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout
};

export default authService;

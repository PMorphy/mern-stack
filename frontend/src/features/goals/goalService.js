import axios from 'axios';

const URL = '/api/goals/';

// Create Goal
const createGoal = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const { data } = await axios.post(URL, userData, config);

  return data;
};

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.get(URL, config);
  return response.data;
};

const goalService = {
  createGoal,
  getGoals
};

export default goalService;

import axios from "axios";

const API_URL = "https://yourapi.com"; // Change to your backend API URL

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    return response.data.token;
  } catch (error) {
    throw error;
  }
};

import axios from "axios";
import { API_URL } from "./config/Config";

export const postSignIn = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/sign-in`, formData);
    return response.data;
  } catch (error) {
      throw error;
  }
};

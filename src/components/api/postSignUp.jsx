import axios from "axios";
// import { API_KEY } from "./config/Config";
import { API_URL } from "./config/Config";

export const postSignUp = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/users`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
